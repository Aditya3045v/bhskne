import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

// Import User and Session as types
type User = {
  id: string;
  app_metadata: any;
  user_metadata: any;
  aud: string;
  email?: string;
};

type Session = {
  access_token: string;
  refresh_token: string;
  user: User;
  expires_at: number;
};

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: Error | null;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    let mounted = true;

    // First set up auth state listener
    try {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event, newSession) => {
          if (mounted) {
            setSession(newSession);
            setUser(newSession?.user ?? null);
            setIsLoading(false);
          }
        }
      );

      // Then check for existing session
      supabase.auth.getSession().then(({ data: { session: currentSession }, error }) => {
        if (error) {
          console.error('Error getting session:', error);
          setError(error);
          toast({
            title: "Authentication Error",
            description: "There was a problem with your session. Please try signing in again.",
            variant: "destructive",
          });
        } else if (mounted) {
          setSession(currentSession);
          setUser(currentSession?.user ?? null);
          setIsLoading(false);
        }
      });

      return () => {
        mounted = false;
        subscription.unsubscribe();
      };
    } catch (err) {
      console.error('Error setting up auth listener:', err);
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      setIsLoading(false);
    }
  }, [toast]);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      setSession(null);
      
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
    } catch (err) {
      console.error('Error signing out:', err);
      toast({
        title: "Error signing out",
        description: "There was a problem signing out. Please try again.",
        variant: "destructive",
      });
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, isLoading, error, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
