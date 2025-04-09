
import React from "react";
import PageLayout from "@/components/layout/PageLayout";

const CLC = () => {
  return (
    <PageLayout 
      title="College Leaving Certificate" 
      description="Information about College Leaving Certificate (CLC)"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-4">College Leaving Certificate</h2>
        <p className="text-gray-700 mb-8">
          Information about applying for and obtaining a College Leaving Certificate will be available soon.
        </p>
      </div>
    </PageLayout>
  );
};

export default CLC;
