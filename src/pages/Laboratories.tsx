import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Beaker, Atom, Microscope, Laptop, Calculator, TestTube, Clock, Users, BadgeCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Laboratories = () => {
  // Sample data for lab facilities
  const labFacilities = {
    physics: {
      name: "Physics Laboratory",
      description: "Our state-of-the-art Physics laboratory is equipped with modern apparatus and instruments for conducting experiments related to mechanics, optics, electricity, magnetism, and modern physics.",
      equipment: [
        "Cathode Ray Oscilloscope (CRO)",
        "Optical Bench Setup",
        "Spectrometers",
        "Wave Motion Apparatus",
        "Electrical Circuit Boards",
        "Magnetism Kits",
        "Digital Multi-meters",
        "Laser Demonstration Kit",
        "Universal Gravitational Constant Apparatus",
        "Young's Modulus Apparatus"
      ],
      capacity: "40 students",
      incharge: "Dr. Sanjay Verma",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    chemistry: {
      name: "Chemistry Laboratory",
      description: "Our Chemistry laboratory provides facilities for conducting experiments in inorganic, organic, and physical chemistry. The lab is equipped with modern apparatus, chemicals, and safety equipment.",
      equipment: [
        "Spectrophotometer",
        "pH Meters",
        "Conductivity Meter",
        "Digital Balance",
        "Distillation Units",
        "Calorimeters",
        "Titration Setup",
        "Chemical Reagents and Compounds",
        "Fume Hood",
        "Organic Chemistry Setup"
      ],
      capacity: "35 students",
      incharge: "Dr. Anita Patel",
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    biology: {
      name: "Biology Laboratory",
      description: "Our Biology laboratory offers comprehensive facilities for studying botany, zoology, and environmental science. The lab is equipped with microscopes, specimens, models, and other resources for practical learning.",
      equipment: [
        "Compound Microscopes",
        "Dissection Microscopes",
        "Biological Specimens",
        "Anatomical Models",
        "Herbarium",
        "Microtome",
        "Centrifuge",
        "Incubator",
        "Autoclave",
        "Plant Growth Chamber"
      ],
      capacity: "30 students",
      incharge: "Dr. Meera Jha",
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    computer: {
      name: "Computer Laboratory",
      description: "Our Computer laboratory provides students with access to modern computing resources for learning programming, web development, database management, and other IT skills. The lab is equipped with high-performance computers, software, and internet connectivity.",
      equipment: [
        "Desktop Computers (40 units)",
        "Networking Equipment",
        "Laser Printers",
        "Scanners",
        "Projector and Screen",
        "Software (Programming Languages, Office Suite, Graphics Design)",
        "Internet Connectivity (High-Speed Broadband)",
        "Server Systems",
        "UPS Power Backup",
        "Interactive Smart Board"
      ],
      capacity: "40 students",
      incharge: "Prof. Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1558346547-4513a89df618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    mathematics: {
      name: "Mathematics Laboratory",
      description: "Our Mathematics laboratory is designed to make abstract mathematical concepts tangible through models, charts, and interactive learning tools. The lab facilitates practical understanding of geometry, trigonometry, calculus, and other mathematical disciplines.",
      equipment: [
        "Geometric Models",
        "Mathematical Charts and Tools",
        "Calculators (Scientific and Graphing)",
        "Mathematical Software",
        "Abacus Sets",
        "Trigonometric Models",
        "Algebra Tiles",
        "Statistical Analysis Tools",
        "Smart Board for Interactive Learning",
        "Mathematics Learning Kits"
      ],
      capacity: "30 students",
      incharge: "Prof. Deepak Singh",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  };

  const getLabIcon = (labType: string) => {
    switch (labType) {
      case "physics":
        return <Atom className="h-5 w-5" />;
      case "chemistry":
        return <Beaker className="h-5 w-5" />;
      case "biology":
        return <Microscope className="h-5 w-5" />;
      case "computer":
        return <Laptop className="h-5 w-5" />;
      case "mathematics":
        return <Calculator className="h-5 w-5" />;
      default:
        return <TestTube className="h-5 w-5" />;
    }
  };

  return (
    <PageLayout
      title="Laboratories"
      description="Explore our well-equipped laboratories for practical learning and research"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-gray-700">
            Balika Madhya Vidyalaya is proud to offer state-of-the-art laboratory facilities for science, computer, and 
            mathematics education. Our laboratories are designed to provide hands-on learning experiences that complement 
            theoretical knowledge, fostering a deeper understanding of concepts and principles.
          </p>
          <p className="text-gray-700 mt-3">
            Each laboratory is managed by qualified staff and equipped with modern equipment and resources to facilitate 
            practical learning, experimentation, and research. Our laboratories adhere to safety standards and are regularly 
            updated to incorporate the latest technological advancements in respective fields.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <Tabs defaultValue="physics">
            <div className="bg-gray-50 p-4 border-b">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {Object.keys(labFacilities).map(lab => (
                  <TabsTrigger key={lab} value={lab} className="flex items-center">
                    {getLabIcon(lab)}
                    <span className="ml-2 hidden md:inline">{(labFacilities as any)[lab].name}</span>
                    <span className="ml-2 md:hidden">{lab.charAt(0).toUpperCase() + lab.slice(1)}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {Object.keys(labFacilities).map(lab => (
              <TabsContent key={lab} value={lab} className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img 
                      src={(labFacilities as any)[lab].image} 
                      alt={(labFacilities as any)[lab].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center mb-4">
                      {getLabIcon(lab)}
                      <h3 className="text-xl font-bold text-school-blue-dark ml-2">{(labFacilities as any)[lab].name}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {(labFacilities as any)[lab].description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-school-blue mb-2">Equipment & Resources</h4>
                        <ul className="space-y-1 text-gray-700">
                          {(labFacilities as any)[lab].equipment.slice(0, 5).map((item: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-school-blue mb-2">Additional Equipment</h4>
                        <ul className="space-y-1 text-gray-700">
                          {(labFacilities as any)[lab].equipment.slice(5).map((item: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                        <Users className="h-5 w-5 text-school-blue mr-2" />
                        <div>
                          <h5 className="text-xs text-gray-500">Capacity</h5>
                          <p className="font-medium text-gray-800">{(labFacilities as any)[lab].capacity}</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                        <BadgeCheck className="h-5 w-5 text-school-blue mr-2" />
                        <div>
                          <h5 className="text-xs text-gray-500">Lab In-charge</h5>
                          <p className="font-medium text-gray-800">{(labFacilities as any)[lab].incharge}</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                        <Clock className="h-5 w-5 text-school-blue mr-2" />
                        <div>
                          <h5 className="text-xs text-gray-500">Working Hours</h5>
                          <p className="font-medium text-gray-800">9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Laboratory Facilities Overview</h3>
            <Separator className="mb-4" />
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-2xl font-bold text-school-blue">5</h4>
                  <p className="text-sm text-gray-600">Laboratories</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-2xl font-bold text-school-blue">175</h4>
                  <p className="text-sm text-gray-600">Capacity</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-2xl font-bold text-school-blue">12</h4>
                  <p className="text-sm text-gray-600">Lab Staff</p>
                </div>
              </div>
              
              <h4 className="font-semibold text-school-blue mt-4 mb-2">Common Facilities in All Labs:</h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>Safety Equipment</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>First Aid Kit</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>Demonstration Area</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>Storage Cabinets</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>Whiteboard/Projector</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>Reference Materials</span>
                </li>
              </ul>
              
              <h4 className="font-semibold text-school-blue mt-4 mb-2">Recent Upgrades:</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>New spectrophotometer in Chemistry Lab (2022)</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>Upgraded computers with latest software (2021)</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>Digital oscilloscopes in Physics Lab (2022)</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mr-2"></span>
                  <span>High-resolution microscopes in Biology Lab (2023)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Laboratory Safety & Policies</h3>
            <Separator className="mb-4" />
            
            <div className="space-y-4">
              <h4 className="font-semibold text-school-blue mb-2">General Safety Rules:</h4>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Always wear appropriate safety gear (lab coats, safety glasses, gloves) as required.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Follow all instructions given by lab instructors or stated in lab manuals.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>No food, drinks, or unauthorized materials allowed in laboratories.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Report any accidents, spills, or equipment malfunctions immediately.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">5.</span>
                  <span>Know the location of emergency equipment (fire extinguishers, eyewash stations, etc.).</span>
                </li>
              </ul>
              
              <h4 className="font-semibold text-school-blue mt-4 mb-2">Laboratory Usage Policies:</h4>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Labs are accessible only during scheduled class hours or with prior permission.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Students must sign in and out when using laboratories outside class hours.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Equipment and materials must not be removed from laboratories without authorization.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Students are responsible for cleaning their workstations after use.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">5.</span>
                  <span>Damage to equipment due to negligence may result in penalties.</span>
                </li>
              </ul>
              
              <div className="bg-school-blue/10 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-school-blue-dark mb-2">Emergency Contacts:</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Lab Coordinator:</span> +91 9876543250</p>
                  <p><span className="font-medium">Emergency Medical:</span> +91 9876543251</p>
                  <p><span className="font-medium">Security Office:</span> +91 9876543252</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-school-blue-dark mb-6">Laboratory Schedule for Current Semester</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-school-blue text-white">
                  <th className="border px-4 py-2 text-left">Laboratory</th>
                  <th className="border px-4 py-2 text-left">Monday</th>
                  <th className="border px-4 py-2 text-left">Tuesday</th>
                  <th className="border px-4 py-2 text-left">Wednesday</th>
                  <th className="border px-4 py-2 text-left">Thursday</th>
                  <th className="border px-4 py-2 text-left">Friday</th>
                  <th className="border px-4 py-2 text-left">Saturday</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border px-4 py-2 font-medium">Physics Lab</td>
                  <td className="border px-4 py-2">Class XI (9-11 AM)<br/>Class XII (2-4 PM)</td>
                  <td className="border px-4 py-2">B.Sc I (9-12 PM)</td>
                  <td className="border px-4 py-2">Class XI (2-4 PM)</td>
                  <td className="border px-4 py-2">B.Sc II (9-12 PM)</td>
                  <td className="border px-4 py-2">Class XII (9-11 AM)<br/>B.Sc III (2-5 PM)</td>
                  <td className="border px-4 py-2">Maintenance</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2 font-medium">Chemistry Lab</td>
                  <td className="border px-4 py-2">B.Sc I (9-12 PM)</td>
                  <td className="border px-4 py-2">Class XI (9-11 AM)<br/>Class XII (2-4 PM)</td>
                  <td className="border px-4 py-2">B.Sc II (9-12 PM)</td>
                  <td className="border px-4 py-2">Class XI (2-4 PM)</td>
                  <td className="border px-4 py-2">B.Sc III (9-12 PM)</td>
                  <td className="border px-4 py-2">Class XII (9-11 AM)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-2 font-medium">Biology Lab</td>
                  <td className="border px-4 py-2">Class XII (9-11 AM)</td>
                  <td className="border px-4 py-2">B.Sc II (2-5 PM)</td>
                  <td className="border px-4 py-2">Class XI (9-11 AM)<br/>B.Sc I (2-5 PM)</td>
                  <td className="border px-4 py-2">B.Sc III (9-12 PM)</td>
                  <td className="border px-4 py-2">Class XI (2-4 PM)</td>
                  <td className="border px-4 py-2">B.Sc I (9-12 PM)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2 font-medium">Computer Lab</td>
                  <td className="border px-4 py-2">BCA I (9-12 PM)<br/>Class XI (2-4 PM)</td>
                  <td className="border px-4 py-2">Class XII (9-11 AM)<br/>BCA II (2-5 PM)</td>
                  <td className="border px-4 py-2">BCA III (9-12 PM)</td>
                  <td className="border px-4 py-2">Class XI (9-11 AM)<br/>BCA I (2-5 PM)</td>
                  <td className="border px-4 py-2">BCA II (9-12 PM)<br/>Class XII (2-4 PM)</td>
                  <td className="border px-4 py-2">Open for Projects</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-2 font-medium">Mathematics Lab</td>
                  <td className="border px-4 py-2">Class XI (2-4 PM)</td>
                  <td className="border px-4 py-2">B.Sc II (9-11 AM)</td>
                  <td className="border px-4 py-2">Class XII (9-11 AM)<br/>B.Sc I (2-4 PM)</td>
                  <td className="border px-4 py-2">B.Sc III (2-4 PM)</td>
                  <td className="border px-4 py-2">Class XI (9-11 AM)</td>
                  <td className="border px-4 py-2">Class XII (11 AM-1 PM)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            * This schedule is subject to change. Please check the notice board for any updates.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Laboratories;
