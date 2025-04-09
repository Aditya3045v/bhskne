
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  // Update the document title
  React.useEffect(() => {
    document.title = `${title} | Balika Madhya Vidyalaya`;
    
    // Optional: Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-school-blue-dark text-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            {description && <p className="mt-2 text-white/80">{description}</p>}
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
