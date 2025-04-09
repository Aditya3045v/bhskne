
import React from "react";
import PageLayout from "@/components/layout/PageLayout";

const ExamResults = () => {
  return (
    <PageLayout 
      title="Examination Results" 
      description="Detailed examination results for students at Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-4">Examination Results</h2>
        <p className="text-gray-700 mb-8">
          Detailed examination results will be available soon.
        </p>
      </div>
    </PageLayout>
  );
};

export default ExamResults;
