
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import NoticeBoard from "@/components/home/NoticeBoard";
import LeadershipSection from "@/components/home/LeadershipSection";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import LocationMap from "@/components/home/LocationMap";
import AdmissionCTA from "@/components/home/AdmissionCTA";

const Index = () => {
  // Animation for sections when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll(".section-animate");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <HeroSection />
        
        <div className="w-full">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-screen-2xl">
            <div className="section-animate py-8 md:py-12">
              <AdmissionCTA />
            </div>
            
            <div className="section-animate py-8 md:py-12">
              <NoticeBoard />
            </div>
            
            <div className="section-animate py-8 md:py-12">
              <LeadershipSection />
            </div>
            
            <div className="section-animate py-8 md:py-12">
              <PrincipalMessage />
            </div>
          </div>
        </div>
        
        <div className="section-animate py-8 md:py-12 w-full">
          <LocationMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
