
import React from "react";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PrincipalMessage = () => {
  return (
    <section className="py-16 bg-school-gray-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-school-blue"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-school-blue-dark"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Principal Image */}
          <div className="md:order-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-school-blue-light opacity-20 rounded-tr-3xl"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/lovable-uploads/230b4c0a-c4c4-4bd4-bea4-277f472d2fb5.png"
                  alt="Principal"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-school-blue opacity-20 rounded-bl-3xl"></div>
            </div>
          </div>
          
          {/* Message Content */}
          <div className="md:order-1">
            <div className="mb-6">
              <h3 className="text-school-blue text-lg font-medium">From the Principal's Desk | प्रधानाचार्य की कलम से</h3>
              <h2 className="text-3xl font-bold text-school-blue-dark mt-2">सुनीता कुमारी</h2>
              <Separator className="w-24 h-1 bg-school-blue mt-4 mb-6" />
            </div>
            
            {/* Tabs for English and Hindi content */}
            <div className="mb-6">
              <div className="flex space-x-4 border-b">
                <button 
                  id="english-tab" 
                  className="px-4 py-2 border-b-2 border-school-blue text-school-blue font-medium"
                  onClick={(e) => {
                    document.getElementById('english-content')?.classList.remove('hidden');
                    document.getElementById('hindi-content')?.classList.add('hidden');
                    e.currentTarget.classList.add('border-school-blue', 'text-school-blue');
                    document.getElementById('hindi-tab')?.classList.remove('border-school-blue', 'text-school-blue');
                    document.getElementById('hindi-tab')?.classList.add('border-transparent', 'text-gray-500');
                  }}
                >
                  English
                </button>
                <button 
                  id="hindi-tab" 
                  className="px-4 py-2 border-b-2 border-transparent text-gray-500"
                  onClick={(e) => {
                    document.getElementById('hindi-content')?.classList.remove('hidden');
                    document.getElementById('english-content')?.classList.add('hidden');
                    e.currentTarget.classList.add('border-school-blue', 'text-school-blue');
                    document.getElementById('english-tab')?.classList.remove('border-school-blue', 'text-school-blue');
                    document.getElementById('english-tab')?.classList.add('border-transparent', 'text-gray-500');
                  }}
                >
                  हिंदी
                </button>
              </div>
            </div>
            
            {/* English Content */}
            <div id="english-content" className="relative">
              <Quote className="absolute -top-4 -left-4 h-10 w-10 text-school-blue opacity-20" />
              <p className="text-gray-700 text-lg mb-6 relative z-10">
                It is my privilege to lead an institution with such a rich legacy. At Balika Madhya Vidyalaya, 
                we believe in nurturing not just academic excellence but also character, ethics, and values that 
                prepare our students for life beyond school.
              </p>
              <p className="text-gray-700 mb-6">
                Our focus remains on providing quality education that is accessible to all sections of society. 
                With dedicated faculty, modern infrastructure, and a conducive learning environment, we strive to 
                bring out the best in every student.
              </p>
              <p className="text-gray-700 mb-8">
                I invite all stakeholders – students, parents, and community members – to join us in our mission 
                of empowering young minds and building a brighter future.
              </p>
              
              <Button className="bg-school-blue hover:bg-school-blue-dark text-white">
                Read Full Message
              </Button>
            </div>
            
            {/* Hindi Content */}
            <div id="hindi-content" className="relative hidden">
              <Quote className="absolute -top-4 -left-4 h-10 w-10 text-school-blue opacity-20" />
              <p className="text-gray-700 text-lg mb-6 relative z-10 font-normal">
                इतने समृद्ध विरासत वाले संस्थान का नेतृत्व करना मेरा सौभाग्य है। बालिका मध्य विद्यालय में, 
                हम न केवल शैक्षणिक उत्कृष्टता बल्कि चरित्र, नैतिकता और मूल्यों को भी पोषित करने में विश्वास रखते हैं जो 
                हमारे छात्रों को स्कूल से परे जीवन के लिए तैयार करते हैं।
              </p>
              <p className="text-gray-700 mb-6 font-normal">
                हमारा ध्यान समाज के सभी वर्गों के लिए सुलभ गुणवत्तापूर्ण शिक्षा प्रदान करने पर बना रहता है। 
                समर्पित शिक्षकों, आधुनिक बुनियादी ढांचे और अनुकूल शिक्षण वातावरण के साथ, हम हर छात्र में 
                सर्वश्रेष्ठ निकालने का प्रयास करते हैं।
              </p>
              <p className="text-gray-700 mb-8 font-normal">
                मैं सभी हितधारकों – छात्रों, अभिभावकों और समुदाय के सदस्यों – को युवा दिमागों को सशक्त बनाने और 
                एक उज्जवल भविष्य बनाने के हमारे मिशन में हमारे साथ जुड़ने के लिए आमंत्रित करती हूं।
              </p>
              
              <Button className="bg-school-blue hover:bg-school-blue-dark text-white">
                पूरा संदेश पढ़ें
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
