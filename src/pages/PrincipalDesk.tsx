
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";
import { Quote } from "lucide-react";

const PrincipalDesk = () => {
  return (
    <PageLayout 
      title="Principal's Desk" 
      description="Message from the Principal of Balika Madhya Vidyalaya"
    >
      <div className="w-full">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 h-12 w-12 text-school-blue opacity-10" />
                <p className="text-lg text-gray-700 italic mb-6 relative z-10">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="text-right text-school-blue font-medium">— Nelson Mandela</p>
              </div>
              
              <h2 className="text-2xl font-bold text-school-blue-dark mb-4">Dear Students, Parents, and Well-wishers,</h2>
              
              <p className="mb-4 text-gray-700">
                It gives me immense pleasure to welcome you all to Balika Madhya Vidyalaya, formerly known as Marwari College, Kishanganj. As the Principal of this esteemed institution, I take great pride in our rich legacy of providing quality education to young women for over five decades.
              </p>
              
              <p className="mb-4 text-gray-700">
                At Balika Madhya Vidyalaya, we believe in nurturing not just academic excellence but also character, ethics, and values that prepare our students for life beyond college. Our focus remains on providing a holistic educational experience that empowers our students to face the challenges of the modern world with confidence and competence.
              </p>
              
              <p className="mb-4 text-gray-700">
                Our dedicated faculty members are committed to creating a conducive learning environment where students can explore, question, and grow. We strive to foster critical thinking, creativity, and innovation through a blend of traditional and modern pedagogical approaches.
              </p>
              
              <p className="mb-4 text-gray-700">
                We understand that education is not merely about acquiring knowledge but also about developing skills, attitudes, and values that help students become responsible citizens and leaders. Our curriculum, therefore, extends beyond textbooks to include extracurricular activities, community service, and life skills development.
              </p>
              
              <p className="mb-4 text-gray-700">
                As we move forward, we remain committed to our mission of providing quality education that is accessible to all sections of society. With modern infrastructure, qualified faculty, and a conducive learning environment, we strive to bring out the best in every student.
              </p>
              
              <p className="mb-4 text-gray-700">
                I invite all stakeholders – students, parents, alumni, and community members – to join us in our mission of empowering young women and building a brighter future. Together, we can create an educational ecosystem that nurtures talent, promotes excellence, and contributes to the development of our society and nation.
              </p>
              
              <p className="mb-6 text-gray-700">
                Thank you for your trust and support. I look forward to working with you all to take Balika Madhya Vidyalaya to greater heights.
              </p>
              
              <div className="mt-8">
                <p className="font-semibold text-school-blue-dark">Warm regards,</p>
                <h3 className="text-xl font-bold text-school-blue-dark mt-2">Sunita Kumari</h3>
                <p className="text-gray-700">Principal</p>
                <p className="text-gray-700">Balika Madhya Vidyalaya, Kishanganj</p>
              </div>
            </div>
            
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="sticky top-24">
                <div className="relative mb-6">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-school-blue-light opacity-20 rounded-tr-3xl"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img
                      src="/lovable-uploads/22e8ca9b-e051-4c51-9951-b2ed2544e349.png"
                      alt="Sunita Kumari - Principal"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-school-blue opacity-20 rounded-bl-3xl"></div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-school-blue-dark mb-4">Principal Profile</h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Name</span>
                      <span className="font-semibold">Sunita Kumari</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Qualification</span>
                      <span className="font-semibold">M.Sc., B.Ed.</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Experience</span>
                      <span className="font-semibold">20+ Years</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Email</span>
                      <span className="font-semibold text-sm">principal@balikavidyalaya.edu</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-school-blue-dark mt-6 mb-2">Office Hours</h4>
                  <p className="text-gray-700 text-sm">Monday to Friday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-700 text-sm">Saturday: 10:00 AM - 1:00 PM</p>
                  
                  <h4 className="font-semibold text-school-blue-dark mt-6 mb-2">For Appointments</h4>
                  <p className="text-gray-700 text-sm">Contact Principal's Office: +91 9876543210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrincipalDesk;
