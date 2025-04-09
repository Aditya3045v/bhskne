
import React from "react";
import PageLayout from "@/components/layout/PageLayout";

const Departments = () => {
  return (
    <PageLayout 
      title="Departments" 
      description="Academic departments at Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-4">Our Departments</h2>
        <p className="text-gray-700 mb-8">
          Information about our academic departments will be available soon.
        </p>
      </div>
    </PageLayout>
  );
};

export default Departments;
