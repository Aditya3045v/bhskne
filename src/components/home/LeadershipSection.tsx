
import React from "react";
import { Separator } from "@/components/ui/separator";

const LeadershipSection = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-school-blue-dark mb-2">Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished leader who guides our institution with vision and dedication
            towards excellence in education.
          </p>
          <Separator className="w-24 h-1 bg-school-blue-dark mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Chairman */}
          <div className="flex flex-col items-center text-center">
            <div className="h-48 w-48 rounded-full overflow-hidden border-4 border-school-blue-light mb-4">
              <img alt="Chairman - Anand Kishor" className="w-full h-full object-cover" src="/lovable-uploads/8fc020db-92a0-460c-9859-6e07aae38c4a.png" />
            </div>
            <h3 className="text-xl font-bold text-school-blue-dark">Anand Kishor</h3>
            <p className="text-sm text-school-blue font-medium mb-2">Chairman, Bihar School Examination Board</p>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              A distinguished IAS officer, Anand Kishor has been instrumental in revolutionizing 
              Bihar's education system. Under his leadership, BSEB has achieved remarkable 
              efficiency in conducting examinations and declaring results ahead of schedule. 
              His innovative reforms have enhanced transparency and technological integration 
              in the board's functioning.
            </p>
            <div className="mt-3 flex items-center justify-center space-x-2">
              <span className="text-xs text-gray-500">IAS (1996 Batch, Bihar Cadre)</span>
              <span className="h-1 w-1 rounded-full bg-gray-500"></span>
              <span className="text-xs text-gray-500">M.Tech, IIT Kanpur</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default LeadershipSection;
