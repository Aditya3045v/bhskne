
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
        <div className="text-center max-w-md px-4">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-school-blue-dark rounded-full mb-8">
            <span className="text-white text-3xl font-bold">404</span>
          </div>
          <h1 className="text-3xl font-bold text-school-blue-dark mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved. Please check the URL or navigate back to the home page.
          </p>
          <Link to="/">
            <Button className="bg-school-blue hover:bg-school-blue-dark text-white">
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
