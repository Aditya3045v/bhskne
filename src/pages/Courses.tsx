
import React from "react";
import PageLayout from "@/components/layout/PageLayout";

const Courses = () => {
  return (
    <PageLayout 
      title="Courses" 
      description="Academic courses offered at Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-4">Our Courses</h2>
        <p className="text-gray-700 mb-8">
          Information about our academic courses will be available soon.
        </p>
      </div>
    </PageLayout>
  );
};

export default Courses;
