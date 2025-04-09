
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const slides = [
  {
    id: 1,
    title: "बालिका उच्च विद्यालय",
    subtitle: "डूमरिया, किशनगंज, बिहार",
    description: "Empowering girl education since 1948",
    buttonText: "Apply Now",
    buttonLink: "/admission",
    image: "/lovable-uploads/b78400d4-21fe-4de8-9a6b-8fb4c679d001.png" // Existing flag hoisting image
  },
  {
    id: 2,
    title: "बालिका उच्च विद्यालय",
    subtitle: "डूमरिया, किशनगंज, बिहार",
    description: "Nurturing excellence in academics and character",
    buttonText: "Explore Courses",
    buttonLink: "/courses",
    image: "/lovable-uploads/97c33dff-3da0-4a68-a127-140aa194e0c0.png" // Existing classroom image
  },
  {
    id: 3,
    title: "बालिका उच्च विद्यालय",
    subtitle: "डूमरिया, किशनगंज, बिहार",
    description: "Developing leaders for tomorrow",
    buttonText: "View Activities",
    buttonLink: "/photo-gallery",
    image: "/lovable-uploads/57d20296-4572-4531-8b10-7738be3c6b58.png" // Existing students and staff image
  },
  {
    id: 6,
    title: "बालिका उच्च विद्यालय",
    subtitle: "डूमरिया, किशनगंज, बिहार",
    description: "School Pride and Community",
    buttonText: "Learn More",
    buttonLink: "/about",
    image: "/lovable-uploads/fd8e0044-7891-4a9b-861e-4b537e5fdfe1.png" // New first image
  },
  {
    id: 7,
    title: "बालिका उच्च विद्यालय",
    subtitle: "डूमरिया, किशनगंज, बिहार",
    description: "School Infrastructure and Learning Environment",
    buttonText: "Explore Campus",
    buttonLink: "/about",
    image: "/lovable-uploads/161af116-0fc8-4880-bbec-8b856b26641b.png" // New second image
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
    }, 5000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Image Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`transition-all duration-1000 w-full ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 absolute"}`}
          >
            <div className="bg-black/30 backdrop-blur-sm py-6 px-4 rounded-lg inline-block max-w-3xl mx-auto">
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
                {slide.title}
              </h1>
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-6">
                {slide.subtitle}
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <Button className="bg-school-blue hover:bg-school-blue-dark text-white" size="lg">
                {slide.buttonText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`} 
            onClick={() => setCurrentSlide(index)} 
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
