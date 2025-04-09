
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { LogOut, User } from "lucide-react";

const AuthButtons = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account."
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Sign out failed",
        description: "An error occurred while signing out.",
        variant: "destructive"
      });
    }
  };

  if (user) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="flex items-center text-gray-700 hover:text-school-blue-dark">
          <User className="h-4 w-4 mr-1" />
          <span className="truncate max-w-[120px]">
            {user.user_metadata?.full_name || user.email?.split('@')[0]}
          </span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4 mr-1" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <>
      <Link to="/sign-in">
        <Button
          variant="outline"
          size="sm"
          className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white px-[14px] mx-[5px]"
        >
          Sign In
        </Button>
      </Link>
      <Link to="/sign-up">
        <Button size="sm" className="bg-school-blue hover:bg-school-blue-dark text-white mx-0">
          Sign Up
        </Button>
      </Link>
    </>
  );
};

export default AuthButtons;
