import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, BookOpen, UserRound, Award } from "lucide-react";

// Sample data
const facultyMembers = {
  arts: [{
    id: 1,
    name: "Binod Kumar Sah",
    designation: "Bihar Executive Teacher",
    department: "Computer Science",
    qualification: "MCA",
    experience: "8 years",
    email: "binod.sah@balikavidyalaya.edu",
    phone: "+91 9876543210",
    specialization: "Programming & Database Management",
    image: "/lovable-uploads/e48ba2af-8e57-4307-a41f-b4dc4c3f60f0.png"
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
    image: "/lovable-uploads/38751591-4ab2-4805-918a-58b741c7734d.png"
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
  }]
};

const TeachingStaff = () => {
  return <PageLayout title="Teaching Staff" description="Meet our dedicated faculty members across different departments">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-gray-700">
            Our college takes pride in having highly qualified and dedicated faculty members who are experts in their respective fields. 
            Our teaching staff is committed to providing quality education and mentoring students to achieve academic excellence and develop critical thinking skills.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Tabs defaultValue="arts">
            <div className="p-4 bg-gray-50 border-b">
              <TabsList className="grid grid-cols-1">
                <TabsTrigger value="arts">Arts Faculty</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="arts" className="p-4">
              <h3 className="text-xl font-bold text-school-blue-dark mb-6">Faculty of Arts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facultyMembers.arts.map(faculty => <FacultyCard key={faculty.id} faculty={faculty} />)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Faculty Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-school-blue">45+</div>
              <p className="text-gray-600">Research Publications</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>;
};

const FacultyCard = ({
  faculty
}: {
  faculty: typeof facultyMembers.arts[0];
}) => {
  return <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover object-center" />
        </div>
        <div className="col-span-2 p-4">
          <h4 className="text-lg font-bold text-school-blue-dark">{faculty.name}</h4>
          <p className="text-sm text-gray-600">{faculty.designation}</p>
          <p className="text-xs bg-school-blue-light text-white inline-block px-2 py-0.5 rounded-full mt-1">
            {faculty.department}
          </p>
          
          <div className="mt-3 space-y-1">
            <div className="flex items-center text-sm">
              <UserRound className="h-4 w-4 text-gray-500 mr-2" />
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
    </div>;
};

export default TeachingStaff;
