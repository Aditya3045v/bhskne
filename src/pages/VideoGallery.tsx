
import React from "react";
import PageLayout from "@/components/layout/PageLayout";

const VideoGallery = () => {
  return (
    <PageLayout 
      title="Video Gallery" 
      description="Video gallery of events and activities at Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-4">Video Gallery</h2>
        <p className="text-gray-700 mb-8">
          Videos from various events and activities will be available soon.
        </p>
      </div>
    </PageLayout>
  );
};

export default VideoGallery;
