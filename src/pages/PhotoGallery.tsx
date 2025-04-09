
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";

const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/40eaffbf-0200-4d42-a0ff-ab6329bb5020.png",
    alt: "School front building",
    title: "School Entrance",
    description: "The main entrance of our school building",
  },
  {
    id: 2,
    src: "/lovable-uploads/e39b0f47-1d91-4966-a2ac-b8b11b8c3357.png",
    alt: "Media workshop with students",
    title: "Media Workshop",
    description: "Students participating in a media workshop conducted by Mrs. Tharanga Nanayakkara",
  },
  {
    id: 3,
    src: "/lovable-uploads/c6d6b769-e1f5-4a4a-bb8a-d3f53733ccbb.png",
    alt: "Students during meditation session",
    title: "Meditation Session",
    description: "Students practicing meditation as part of our holistic education approach",
  },
  {
    id: 4,
    src: "/lovable-uploads/ecb16fa6-13b7-4f96-b0da-7c63562e7cca.png",
    alt: "School building",
    title: "School Building",
    description: "One of our modern school buildings",
  },
  {
    id: 5,
    src: "/lovable-uploads/0b4646f5-0447-4903-ace4-cc5da62626a2.png",
    alt: "School building exterior",
    title: "School Exterior",
    description: "The exterior view of our historic school building",
  },
];

const PhotoGallery = () => {
  return (
    <PageLayout 
      title="Photo Gallery" 
      description="Photo gallery of events and activities at Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-6">School Campus & Activities</h2>
        <Separator className="mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-school-blue-dark">{image.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default PhotoGallery;
