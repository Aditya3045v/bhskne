import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const slides = [{
  id: 1,
  title: "+2 BALIKA MADHYA VIDYALAYA",
  subtitle: "बालिका माध्य विद्यालय, किशनगंज",
  description: "Empowering girl education since 1948",
  buttonText: "Apply Now",
  buttonLink: "/admission",
  image: "/lovable-uploads/b78400d4-21fe-4de8-9a6b-8fb4c679d001.png" // Flag hoisting image
}, {
  id: 2,
  title: "+2 BALIKA MADHYA VIDYALAYA",
  subtitle: "बालिका माध्य विद्यालय, किशनगंज",
  description: "Nurturing excellence in academics and character",
  buttonText: "Explore Courses",
  buttonLink: "/courses",
  image: "/lovable-uploads/97c33dff-3da0-4a68-a127-140aa194e0c0.png" // Classroom image
}, {
  id: 3,
  title: "+2 BALIKA MADHYA VIDYALAYA",
  subtitle: "बालिका माध्य विद्यालय, किशनगंज",
  description: "Developing leaders for tomorrow",
  buttonText: "View Activities",
  buttonLink: "/photo-gallery",
  image: "/lovable-uploads/57d20296-4572-4531-8b10-7738be3c6b58.png" // Students in uniform with staff
}, {
  id: 4,
  title: "+2 BALIKA MADHYA VIDYALAYA",
  subtitle: "बालिका माध्य विद्यालय, किशनगंज",
  description: "Quality education with modern values",
  buttonText: "Take a Tour",
  buttonLink: "/about",
  image: "/lovable-uploads/bbbc7205-1c82-4100-9485-4557c3c154e3.png" // School assembly image
}, {
  id: 5,
  title: "+2 BALIKA MADHYA VIDYALAYA",
  subtitle: "बालिका माध्य विद्यालय, किशनगंज",
  description: "Fostering community and environmental awareness",
  buttonText: "Learn More",
  buttonLink: "/about",
  image: "/lovable-uploads/a7005fc8-b301-4b0b-ada8-f10ac1481e8f.png" // Tree planting activity
}];
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
  return <div className="relative overflow-hidden h-[500px] md:h-[600px]">
      {/* Image Slides */}
      {slides.map((slide, index) => <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${slide.image})`
      }} />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>)}

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        <div className="mb-6">
          
        </div>
        {slides.map((slide, index) => <div key={slide.id} className={`transition-all duration-1000 w-full ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 absolute"}`}>
            <div className="bg-black/30 backdrop-blur-sm py-6 px-4 rounded-lg inline-block">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
                {slide.title}
              </h1>
              <h2 className="text-white text-xl md:text-2xl font-medium mb-6">
                {slide.subtitle}
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <Button className="bg-school-blue hover:bg-school-blue-dark text-white" size="lg">
                {slide.buttonText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>)}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => <button key={index} className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`} onClick={() => setCurrentSlide(index)} />)}
      </div>
    </div>;
};
export default HeroSection;