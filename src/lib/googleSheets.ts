
import { supabase } from '@/lib/supabase';

/**
 * Send application data to Google Sheets via Supabase Edge Function
 * @param formData The application form data
 * @returns Promise with the response from the edge function
 */
export const sendToGoogleSheets = async (formData: any): Promise<{ success: boolean; message: string }> => {
  try {
    // Log that we're sending data to Google Sheets
    console.log('Sending application data to Google Sheets:', formData);
    
    // Call the Supabase Edge Function that will handle the Google Sheets integration
    const { data, error } = await supabase.functions.invoke('save-to-sheets', {
      body: { data: formData },
    });

    if (error) {
      console.error('Error sending data to Google Sheets:', error);
      return { success: false, message: error.message || 'Failed to send data to Google Sheets' };
    }

    return { success: true, message: 'Data successfully sent to Google Sheets' };
  } catch (error: any) {
    console.error('Exception sending data to Google Sheets:', error);
    return { success: false, message: error.message || 'An unexpected error occurred' };
  }
};
