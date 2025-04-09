
import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const LocationMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-school-blue-dark mb-2">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are conveniently located in Kishanganj, Bihar. Visit us to explore our campus and facilities.
          </p>
          <Separator className="w-24 h-1 bg-school-blue-dark mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="bg-school-gray-light p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Contact Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-school-blue mt-1 mr-3 shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600 text-sm">
                    Balika Madhya Vidyalaya
                    <br />
                    College Road, Kishanganj
                    <br />
                    Bihar - 855107, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-school-blue mt-1 mr-3 shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+919876543210" 
                    className="text-gray-600 text-sm hover:text-school-blue transition-colors"
                  >
                    +91 9876543210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-school-blue mt-1 mr-3 shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:info@balikavidyalaya.edu" 
                    className="text-gray-600 text-sm hover:text-school-blue transition-colors"
                  >
                    info@balikavidyalaya.edu
                  </a>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-school-blue hover:bg-school-blue-dark text-white">
              Contact Us
            </Button>
          </div>
          
          {/* OpenStreetMap embed */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-md h-[400px]">
            <iframe 
              title="School Location Map"
              className="w-full h-full border-0"
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://www.openstreetmap.org/export/embed.html?bbox=87.9397,26.0924,87.9597,26.1124&layer=mapnik&marker=26.1024,87.9497" 
            />
            
            <div className="p-3 bg-school-gray-light flex justify-between items-center">
              <span className="text-sm text-gray-600">
                View our location on OpenStreetMap
              </span>
              <a 
                href="https://www.openstreetmap.org/?mlat=26.1024&mlon=87.9497#map=15/26.1024/87.9497" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-school-blue flex items-center text-sm hover:underline"
              >
                <span>View Larger Map</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
