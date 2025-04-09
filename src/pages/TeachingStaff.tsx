import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, BookOpen, UserRound, Award, GraduationCap } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Sample data
const facultyMembers = {
  arts: [{
    id: 1,
    name: "Binod Kumar Sah",
    designation: "Bihar Executive Teacher",
    department: "Computer Science",
    qualification: "MCA",
    experience: "10 years",
    email: "binod.sah@balikavidyalaya.edu",
    phone: "+91 9876543210",
    specialization: "Programming & Database Management",
    image: "/lovable-uploads/Screenshot%202025-04-08%20173959.png"
  }, {
    id: 2,
    name: "Alok Kumar",
    designation: "Assistant Professor",
    department: "Political Science",
    qualification: "M.A., B.Ed.",
    experience: "7 years",
    email: "alok.kumar@balikavidyalaya.edu",
    phone: "+91 9876543211",
    specialization: "Indian Political System",
    image: "/lovable-uploads/Screenshot%202025-04-08%20172104.png"
  }, {
    id: 3,
    name: "Deepa Jha",
    designation: "Assistant Professor",
    department: "Music",
    qualification: "Post Graduate in Music",
    experience: "10 years",
    email: "deepa.jha@balikavidyalaya.edu",
    phone: "+91 9876543212",
    specialization: "Classical Vocal Music",
    image: "/lovable-uploads/53e1e6f9-8fac-46e7-a3c9-d1e46ade4645.png"
  }],
  tenth: [{
    id: 1,
    name: "Meena Kumari Pandey",
    designation: "Dance Teacher",
    department: "Dance",
    qualification: "PG",
    experience: "8 years",
    email: "meena.pandey@balikavidyalaya.edu",
    phone: "+91 9876543215",
    specialization: "Classical Dance",
    image: "/lovable-uploads/66526aa4-327f-44a9-a7fd-d6fc744394a1.png"
  }, {
    id: 2,
    name: "Uday Kumar Das",
    designation: "Social Science Teacher",
    department: "Social Science",
    qualification: "MA",
    experience: "6 years",
    email: "uday.das@balikavidyalaya.edu",
    phone: "+91 9876543216",
    specialization: "History & Civics",
    image: "/lovable-uploads/f4b797cd-5fa4-43ed-98e3-c3c9e9c2b307.png"
  }, {
    id: 3,
    name: "Manish Kumar Sah",
    designation: "Social Science Teacher",
    department: "Social Science",
    qualification: "PG",
    experience: "9 years",
    email: "manish.sah@balikavidyalaya.edu",
    phone: "+91 9876543217",
    specialization: "Geography & Economics",
    image: "/lovable-uploads/d76de51f-3de3-468b-8131-80160370f63e.png"
  }]
};

const TeachingStaff = () => {
  return (
    <PageLayout title="Teaching Staff" description="Meet our dedicated faculty members across different departments">
      <div className="w-full">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 max-w-screen-2xl">
          <div className="mb-8">
            <p className="text-gray-700">
              Our school takes pride in having highly qualified and dedicated faculty members who are experts in their respective fields. 
              Our teaching staff is committed to providing quality education and mentoring students to achieve academic excellence and develop critical thinking skills.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Tabs defaultValue="arts" className="w-full">
              <div className="p-4 bg-gray-50 border-b">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="arts">+2 Teachers</TabsTrigger>
                  <TabsTrigger value="tenth">10th Teachers</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="arts" className="p-4">
                <h3 className="text-xl font-bold text-school-blue-dark mb-6">Teachers of +2</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {facultyMembers.arts.map(faculty => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tenth" className="p-4">
                <h3 className="text-xl font-bold text-school-blue-dark mb-6">10th Teachers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {facultyMembers.tenth.map(faculty => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Faculty Statistics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-school-blue">{Object.values(facultyMembers).flat().length}</div>
                <p className="text-gray-600">Total Faculty Members</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-school-blue">70%</div>
                <p className="text-gray-600">Ph.D. Holders</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-school-blue">12+</div>
                <p className="text-gray-600">Average Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-school-blue">45+</div>
                <p className="text-gray-600">Research Publications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

const FacultyCard = ({
  faculty
}: {
  faculty: typeof facultyMembers.arts[0];
}) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col">
        <div className="w-full sm:w-1/3 md:w-full lg:w-1/3 xl:w-full h-60 sm:h-auto">
          <div className="relative h-full">
            <AspectRatio ratio={3/4} className="h-full">
              <img 
                src={faculty.image} 
                alt={faculty.name} 
                className="w-full h-full object-cover object-center" 
              />
            </AspectRatio>
          </div>
        </div>
        <div className="w-full sm:w-2/3 md:w-full lg:w-2/3 xl:w-full p-4">
          <h4 className="text-lg font-bold text-school-blue-dark">{faculty.name}</h4>
          <p className="text-sm text-gray-600">{faculty.designation}</p>
          <p className="text-xs bg-school-blue-light text-white inline-block px-2 py-0.5 rounded-full mt-1">
            {faculty.department}
          </p>
          
          <div className="mt-3 space-y-1">
            <div className="flex items-center text-sm">
              <GraduationCap className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-gray-700">{faculty.qualification}</span>
            </div>
            <div className="flex items-center text-sm">
              <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-gray-700">{faculty.specialization}</span>
            </div>
            <div className="flex items-center text-sm">
              <Award className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-gray-700">{faculty.experience} experience</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 text-gray-500 mr-2" />
              <a href={`mailto:${faculty.email}`} className="text-school-blue hover:underline">
                {faculty.email}
              </a>
            </div>
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 text-gray-500 mr-2" />
              <a href={`tel:${faculty.phone}`} className="text-school-blue hover:underline">
                {faculty.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingStaff;
