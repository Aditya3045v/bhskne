
import React from "react";
import PageLayout from "@/components/layout/PageLayout";

const TimeTable = () => {
  return (
    <PageLayout 
      title="Time Table" 
      description="Class time tables for Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-4">Class Time Tables</h2>
        <p className="text-gray-700 mb-8">
          The time tables for different classes will be available soon.
        </p>
      </div>
    </PageLayout>
  );
};

export default TimeTable;
