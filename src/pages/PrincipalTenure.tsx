
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";
import { Trophy } from "lucide-react";

const PrincipalTenure = () => {
  // Sample data for past principals
  const pastPrincipals = [
    {
      id: 1,
      name: "Dr. Rajendra Kumar",
      period: "2015-2022",
      qualification: "Ph.D. in Education, M.A.",
      achievements: [
        "Led the college through NAAC accreditation with 'A' grade",
        "Established new science laboratories",
        "Initiated digital learning program",
        "Expanded campus infrastructure with new academic block"
      ],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Dr. Meena Sharma",
      period: "2008-2015",
      qualification: "Ph.D. in Physics, M.Sc.",
      achievements: [
        "Introduced vocational courses",
        "Established computer laboratory",
        "Initiated annual science exhibition",
        "Strengthened alumni association"
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Prof. Anil Mishra",
      period: "2000-2008",
      qualification: "M.Phil., M.A. in History",
      achievements: [
        "Established college library with over 10,000 books",
        "Started NSS unit in the college",
        "Initiated student welfare programs",
        "Improved college infrastructure"
      ],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Dr. Suresh Kumar",
      period: "1990-2000",
      qualification: "Ph.D. in Economics, M.A.",
      achievements: [
        "Expanded college from 5 departments to 12",
        "Established college magazine",
        "Organized first inter-college cultural festival",
        "Improved sports facilities"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Prof. Lakshmi Devi",
      period: "1980-1990",
      qualification: "M.A. in Literature",
      achievements: [
        "First female principal of the institution",
        "Established women's empowerment programs",
        "Started scholarship for underprivileged students",
        "Initiated community outreach programs"
      ],
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Dr. Ramesh Prasad",
      period: "1968-1980",
      qualification: "Ph.D. in Sanskrit, M.A.",
      achievements: [
        "Founding principal of the institution",
        "Established the core departments",
        "Secured initial government affiliations",
        "Laid foundation for college infrastructure"
      ],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const currentPrincipal = {
    name: "Sunita Kumari",
    period: "2022-Present",
    qualification: "M.Sc., B.Ed.",
    achievements: [
      "Digitization of administrative processes",
      "Launched online learning platform",
      "Renovation of historical college buildings",
      "Established international academic collaborations"
    ],
    image: "/lovable-uploads/22e8ca9b-e051-4c51-9951-b2ed2544e349.png"
  };

  return (
    <PageLayout 
      title="Principal's Tenure" 
      description="History of leadership at Balika Madhya Vidyalaya through the tenures of our distinguished principals"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-school-blue-dark mb-6">Current Principal</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <img 
                  src={currentPrincipal.image} 
                  alt={currentPrincipal.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:col-span-2 p-6">
                <h3 className="text-xl font-bold text-school-blue-dark">{currentPrincipal.name}</h3>
                <p className="text-sm bg-school-blue text-white inline-block px-3 py-1 rounded-full mt-2">{currentPrincipal.period}</p>
                <p className="mt-2 text-gray-600">{currentPrincipal.qualification}</p>
                
                <h4 className="font-semibold text-school-blue mt-4 mb-2 flex items-center">
                  <Trophy className="h-5 w-5 mr-2" /> 
                  Key Achievements
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {currentPrincipal.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-school-blue-dark mb-6">Past Principals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastPrincipals.map((principal) => (
            <div key={principal.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <div className="grid grid-cols-3 h-full">
                <div className="col-span-1">
                  <img 
                    src={principal.image} 
                    alt={principal.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="col-span-2 p-4">
                  <h3 className="text-lg font-bold text-school-blue-dark">{principal.name}</h3>
                  <p className="text-xs bg-gray-200 text-gray-800 inline-block px-2 py-0.5 rounded-full mt-1">{principal.period}</p>
                  <p className="mt-1 text-gray-600 text-sm">{principal.qualification}</p>
                  
                  <Separator className="my-3" />
                  
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold text-school-blue mb-1">Notable Contributions:</h4>
                    <ul className="list-disc pl-5 space-y-0.5 text-gray-700 text-sm">
                      {principal.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                      {principal.achievements.length > 2 && (
                        <li className="text-school-blue cursor-pointer">+ {principal.achievements.length - 2} more achievements</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Timeline of Institutional Growth</h3>
          <div className="relative">
            <div className="absolute h-full w-0.5 bg-school-blue-light left-0 top-0"></div>
            
            <div className="space-y-8">
              {[...pastPrincipals].reverse().map((principal, index) => (
                <div key={principal.id} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-school-blue-dark border-4 border-white"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-school-blue-dark">{principal.period}</h4>
                    <p className="text-gray-700">{principal.name}</p>
                    <p className="text-gray-600 text-sm mt-1">{principal.achievements[0]}</p>
                  </div>
                </div>
              ))}
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-school-blue border-4 border-white"></div>
                <div>
                  <h4 className="text-lg font-semibold text-school-blue-dark">Present</h4>
                  <p className="text-gray-700">{currentPrincipal.name}</p>
                  <p className="text-gray-600 text-sm mt-1">{currentPrincipal.achievements[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrincipalTenure;
