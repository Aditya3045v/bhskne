
import React from "react";
import PageLayout from "@/components/layout/PageLayout";

const AcademicCalendar = () => {
  return (
    <PageLayout 
      title="Academic Calendar" 
      description="Academic calendar for Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-4">Academic Calendar</h2>
        <p className="text-gray-700 mb-8">
          The academic calendar for the current academic year will be available soon.
        </p>
      </div>
    </PageLayout>
  );
};

export default AcademicCalendar;
