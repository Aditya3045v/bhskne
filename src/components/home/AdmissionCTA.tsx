
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdmissionCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-10 bg-gradient-to-r from-school-blue to-school-blue-dark text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center" 
        style={{ backgroundImage: "url('/lovable-uploads/e39b0f47-1d91-4966-a2ac-b8b11b8c3357.png')" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-school-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Admissions Open</h3>
              <p className="text-white/80 mt-1">Enroll your child for the upcoming academic year</p>
            </div>
          </div>
          
          <Button 
            onClick={() => navigate('/admission')}
            variant="outline" 
            className="bg-white text-school-blue-dark hover:bg-gray-100 border-none font-medium"
            size="lg"
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
