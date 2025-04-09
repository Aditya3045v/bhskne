
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <PageLayout 
      title="About College" 
      description="Learn about the history and achievements of Balika Madhya Vidyalaya, Kishanganj"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-school-blue-dark mb-4">Our History</h2>
            <p className="mb-4 text-gray-700">
              Balika Madhya Vidyalaya, formerly known as Marwari College, was established in 1968 with the vision to provide quality education to girls in Kishanganj and surrounding areas. Founded by a group of visionary educators and philanthropists, the institution has grown from humble beginnings into a premier educational institution in Bihar.
            </p>
            <p className="mb-4 text-gray-700">
              The college began with just a handful of students and limited resources, but with dedication and commitment to educational excellence, it has expanded to serve thousands of students over the years. The transition from Marwari College to Balika Madhya Vidyalaya marked a significant milestone in our journey, reflecting our focused mission on women's education and empowerment.
            </p>
            
            <h2 className="text-2xl font-bold text-school-blue-dark mb-4 mt-8">Our Vision</h2>
            <p className="mb-4 text-gray-700">
              To become a center of excellence in education that empowers young women with knowledge, skills, and values to become responsible citizens and leaders who contribute meaningfully to society and the nation.
            </p>
            
            <h2 className="text-2xl font-bold text-school-blue-dark mb-4 mt-8">Our Mission</h2>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>To provide quality education that is affordable and accessible to all sections of society</li>
              <li>To foster intellectual growth and critical thinking among students</li>
              <li>To promote ethical values, cultural awareness, and social responsibility</li>
              <li>To encourage innovation, research, and continuous learning</li>
              <li>To prepare students for successful careers and meaningful lives</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-school-blue-dark mb-4 mt-8">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-school-blue">Excellence</h3>
                <p className="text-sm text-gray-700">Pursuing the highest standards in teaching and learning</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-school-blue">Integrity</h3>
                <p className="text-sm text-gray-700">Adhering to strong moral principles and ethical standards</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-school-blue">Inclusivity</h3>
                <p className="text-sm text-gray-700">Embracing diversity and ensuring equal opportunities for all</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-school-blue">Innovation</h3>
                <p className="text-sm text-gray-700">Encouraging creativity and progressive thinking</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-bold text-school-blue-dark mb-4">Key Facts</h3>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Established</span>
                  <span className="font-semibold">1968</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Campus Area</span>
                  <span className="font-semibold">10 Acres</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Student Strength</span>
                  <span className="font-semibold">2,500+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Faculty Members</span>
                  <span className="font-semibold">120+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Courses Offered</span>
                  <span className="font-semibold">15+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Libraries</span>
                  <span className="font-semibold">2</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Labs</span>
                  <span className="font-semibold">8</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-school-blue p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Accreditations</h3>
              <Separator className="mb-4 bg-white/20" />
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold">NAAC Accredited</h4>
                  <p className="text-sm text-white/80">Grade 'A' with CGPA 3.21</p>
                </li>
                <li>
                  <h4 className="font-semibold">UGC Recognition</h4>
                  <p className="text-sm text-white/80">Under Section 2(f) & 12(B)</p>
                </li>
                <li>
                  <h4 className="font-semibold">ISO Certified</h4>
                  <p className="text-sm text-white/80">ISO 9001:2015 Quality Management</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
