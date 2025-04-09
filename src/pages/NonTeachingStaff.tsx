
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Mail, Phone, BadgeCheck, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Sample data
const staffMembers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    designation: "Administrative Officer",
    department: "Administration",
    experience: "18 years",
    email: "ramesh.kumar@balikavidyalaya.edu",
    phone: "+91 9876543230",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Sunita Singh",
    designation: "Library Assistant",
    department: "Library",
    experience: "12 years",
    email: "sunita.singh@balikavidyalaya.edu",
    phone: "+91 9876543231",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Rajendra Prasad",
    designation: "Accounts Officer",
    department: "Accounts",
    experience: "15 years",
    email: "rajendra.prasad@balikavidyalaya.edu",
    phone: "+91 9876543232",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Priya Sharma",
    designation: "Office Assistant",
    department: "Administration",
    experience: "5 years",
    email: "priya.sharma@balikavidyalaya.edu",
    phone: "+91 9876543233",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 5,
    name: "Mohan Lal",
    designation: "Lab Assistant",
    department: "Science Laboratories",
    experience: "10 years",
    email: "mohan.lal@balikavidyalaya.edu",
    phone: "+91 9876543234",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 6,
    name: "Anita Kumari",
    designation: "Computer Operator",
    department: "Computer Lab",
    experience: "7 years",
    email: "anita.kumari@balikavidyalaya.edu",
    phone: "+91 9876543235",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 7,
    name: "Suresh Yadav",
    designation: "Electrician",
    department: "Maintenance",
    experience: "14 years",
    email: "suresh.yadav@balikavidyalaya.edu",
    phone: "+91 9876543236",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 8,
    name: "Neeta Gupta",
    designation: "Hostel Warden",
    department: "Hostel",
    experience: "9 years",
    email: "neeta.gupta@balikavidyalaya.edu",
    phone: "+91 9876543237",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  }
];

// Group staff by department
const departmentGroups = staffMembers.reduce((groups, staff) => {
  const department = staff.department;
  if (!groups[department]) {
    groups[department] = [];
  }
  groups[department].push(staff);
  return groups;
}, {} as Record<string, typeof staffMembers>);

const NonTeachingStaff = () => {
  return (
    <PageLayout 
      title="Non-Teaching Staff" 
      description="Meet our dedicated non-teaching staff who keep the institution running smoothly"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-gray-700">
            Our non-teaching staff plays a crucial role in the smooth functioning of our institution. 
            From administrative tasks to laboratory assistance, library management, and maintenance, 
            these dedicated individuals work tirelessly behind the scenes to support our educational mission.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {Object.entries(departmentGroups).map(([department, staff]) => (
              <div key={department} className="mb-10">
                <h3 className="text-xl font-bold text-school-blue-dark mb-4">{department} Department</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {staff.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
                      <div className="flex">
                        <div className="w-1/3">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <h4 className="text-lg font-bold text-school-blue-dark">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.designation}</p>
                          
                          <div className="mt-3 space-y-1">
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-gray-700">{member.experience} experience</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Mail className="h-4 w-4 text-gray-500 mr-2" />
                              <a href={`mailto:${member.email}`} className="text-school-blue hover:underline truncate">
                                {member.email}
                              </a>
                            </div>
                            <div className="flex items-center text-sm">
                              <Phone className="h-4 w-4 text-gray-500 mr-2" />
                              <a href={`tel:${member.phone}`} className="text-school-blue hover:underline">
                                {member.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="bg-school-blue-dark text-white p-4">
                <h3 className="text-lg font-bold">Staff Information</h3>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold text-school-blue-dark mb-2">Department Overview</h4>
                <div className="space-y-2 mb-6">
                  {Object.entries(departmentGroups).map(([department, staff]) => (
                    <div key={department} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">{department}</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                        {staff.length} staff
                      </span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <h4 className="font-semibold text-school-blue-dark mb-2">Working Hours</h4>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="text-gray-900">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="text-gray-900">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="text-gray-900">Closed</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <h4 className="font-semibold text-school-blue-dark mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">admin@balikavidyalaya.edu</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">+91 9876543200</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <BadgeCheck className="h-5 w-5 text-green-500 mr-2" />
                    <h4 className="font-semibold text-gray-800">Staff Achievements</h4>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Our non-teaching staff has been recognized for excellence in administration. 
                    The team received the "Best Administrative Staff" award from the Education 
                    Department of Bihar in 2022.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NonTeachingStaff;
