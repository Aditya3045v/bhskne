
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

interface RequestBody {
  data: Record<string, any>;
}

serve(async (req) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Content-Type": "application/json",
  };

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers });
  }
  
  try {
    const { data } = await req.json() as RequestBody;
    
    // Get the credentials from environment variables
    const googleServiceAccount = Deno.env.get("GOOGLE_SERVICE_ACCOUNT");
    const spreadsheetId = Deno.env.get("GOOGLE_SPREADSHEET_ID");
    
    if (!googleServiceAccount || !spreadsheetId) {
      console.error("Missing Google credentials");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing Google credentials. Please set GOOGLE_SERVICE_ACCOUNT and GOOGLE_SPREADSHEET_ID environment variables." 
        }),
        { headers, status: 500 }
      );
    }
    
    const credentials = JSON.parse(googleServiceAccount);
    
    // Format data for Google Sheets
    const values = formatDataForSheets(data);
    
    // Append data to Google Sheets
    const result = await appendToGoogleSheet(credentials, spreadsheetId, values);
    
    return new Response(
      JSON.stringify({ success: true, result }),
      { headers }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers, status: 500 }
    );
  }
});

/**
 * Format the application data for Google Sheets
 */
function formatDataForSheets(data: Record<string, any>): string[][] {
  // Create a single row with all the data
  // The order should match your Google Sheet columns
  const row = [
    new Date().toISOString(), // Timestamp
    data.student_name || data.full_name || "",
    data.father_name || "",
    data.mother_name || "",
    data.dob || "",
    data.gender || "",
    data.category || "",
    data.nationality || "",
    data.religion || "",
    data.address || "",
    data.mobile || "",
    data.email || "",
    data.emergency_contact || "",
    data.father_occupation || "",
    data.mother_occupation || "",
    data.mother_mobile || "",
    data.last_school || "",
    data.last_class || "",
    data.applying_for_class || "",
    data.academic_year || "",
    data.medical_conditions || "",
    data.status || "pending",
    data.photo_url || "",
    data.birth_certificate_url || "",
    data.marksheet_url || ""
  ];
  
  return [row];
}

/**
 * Append data to Google Sheets using the Google Sheets API
 */
async function appendToGoogleSheet(
  credentials: any,
  spreadsheetId: string,
  values: string[][]
): Promise<any> {
  // Get Google OAuth2 token
  const token = await getGoogleAccessToken(credentials);
  
  // Define the range (sheet name and range in A1 notation)
  const range = "Applications!A:Z";
  
  // Make API request to append data
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: values,
      }),
    }
  );
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Google Sheets API error:", errorText);
    throw new Error(`Google Sheets API error: ${response.status} ${errorText}`);
  }
  
  return await response.json();
}

/**
 * Get Google OAuth2 access token using service account credentials
 */
async function getGoogleAccessToken(credentials: any): Promise<string> {
  const tokenEndpoint = "https://oauth2.googleapis.com/token";
  const scope = "https://www.googleapis.com/auth/spreadsheets";
  
  // Create JWT header
  const header = {
    alg: "RS256",
    typ: "JWT",
    kid: credentials.private_key_id,
  };
  
  // Create JWT claim set
  const now = Math.floor(Date.now() / 1000);
  const claimSet = {
    iss: credentials.client_email,
    scope: scope,
    aud: tokenEndpoint,
    exp: now + 3600,
    iat: now,
  };
  
  // Encode JWT header and claim set
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedClaimSet = btoa(JSON.stringify(claimSet));
  
  // Create signature input
  const signatureInput = `${encodedHeader}.${encodedClaimSet}`;
  
  // Sign with private key
  const encoder = new TextEncoder();
  const signatureInputBuffer = encoder.encode(signatureInput);
  
  // Convert private key to proper format
  const privateKey = credentials.private_key.replace(/\\n/g, "\n");
  
  // Import the private key
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    str2ab(atob(privateKey.split("-----")[2].replace(/\n/g, ""))),
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["sign"]
  );
  
  // Create signature
  const signatureBuffer = await crypto.subtle.sign(
    { name: "RSASSA-PKCS1-v1_5" },
    cryptoKey,
    signatureInputBuffer
  );
  
  // Convert signature to base64
  const signature = btoa(ab2str(signatureBuffer));
  
  // Create JWT
  const jwt = `${signatureInput}.${signature}`;
  
  // Request access token
  const tokenResponse = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  
  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    console.error("Token error:", errorText);
    throw new Error(`Token error: ${tokenResponse.status} ${errorText}`);
  }
  
  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

// Helper functions for ArrayBuffer conversion
function str2ab(str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function ab2str(buf: ArrayBuffer): string {
  return String.fromCharCode.apply(null, new Uint8Array(buf) as any);
}
