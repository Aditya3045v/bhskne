
import React from "react";
import PageLayout from "@/components/layout/PageLayout";

const Scholarships = () => {
  return (
    <PageLayout 
      title="Scholarships" 
      description="Scholarship opportunities for students at Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-4">Scholarship Opportunities</h2>
        <p className="text-gray-700 mb-8">
          Information about various scholarship opportunities will be available soon.
        </p>
      </div>
    </PageLayout>
  );
};

export default Scholarships;
