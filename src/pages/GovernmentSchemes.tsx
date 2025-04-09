
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar, ExternalLink, Info, Download } from "lucide-react";

const GovernmentSchemes = () => {
  return (
    <PageLayout 
      title="Government Schemes" 
      description="Information about various government schemes and initiatives for students"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-gray-700">
            Balika Madhya Vidyalaya facilitates various government schemes to support students in their educational journey. 
            These schemes provide financial assistance, scholarships, and other benefits to eligible students. 
            This page provides information about these schemes, eligibility criteria, and application process.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Post-Matric Scholarship Schemes</h3>
          <Separator className="mb-6" />
          
          <div className="space-y-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">Post-Matric Scholarship for SC Students</h4>
              <p className="text-gray-700 mt-2">
                A centrally sponsored scheme providing financial assistance to Scheduled Caste students studying at post-matriculation or post-secondary stage.
              </p>
              
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Eligibility:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>SC students</li>
                    <li>Family income below ₹2.5 lakh per annum</li>
                    <li>Pursuing post-matriculation courses</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Benefits:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>Course fees reimbursement</li>
                    <li>Maintenance allowance</li>
                    <li>Study tour charges</li>
                    <li>Thesis typing/printing charges</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Last Date:</h5>
                  <p className="text-sm text-gray-600 mt-1">October 31, 2023</p>
                  
                  <div className="mt-3 flex">
                    <a 
                      href="https://scholarships.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-school-blue hover:underline text-sm inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Apply Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">Post-Matric Scholarship for ST Students</h4>
              <p className="text-gray-700 mt-2">
                A centrally sponsored scheme providing financial assistance to Scheduled Tribe students studying at post-matriculation or post-secondary stage.
              </p>
              
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Eligibility:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>ST students</li>
                    <li>Family income below ₹2.5 lakh per annum</li>
                    <li>Pursuing post-matriculation courses</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Benefits:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>Course fees reimbursement</li>
                    <li>Maintenance allowance</li>
                    <li>Study tour charges</li>
                    <li>Thesis typing/printing charges</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Last Date:</h5>
                  <p className="text-sm text-gray-600 mt-1">October 31, 2023</p>
                  
                  <div className="mt-3 flex">
                    <a 
                      href="https://scholarships.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-school-blue hover:underline text-sm inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Apply Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">Post-Matric Scholarship for OBC Students</h4>
              <p className="text-gray-700 mt-2">
                A centrally sponsored scheme providing financial assistance to OBC students studying at post-matriculation or post-secondary stage.
              </p>
              
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Eligibility:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>OBC students</li>
                    <li>Family income below ₹1.5 lakh per annum</li>
                    <li>Pursuing post-matriculation courses</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Benefits:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>Course fees reimbursement</li>
                    <li>Maintenance allowance</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Last Date:</h5>
                  <p className="text-sm text-gray-600 mt-1">October 31, 2023</p>
                  
                  <div className="mt-3 flex">
                    <a 
                      href="https://scholarships.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-school-blue hover:underline text-sm inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Apply Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Merit-cum-Means Scholarship Schemes</h3>
          <Separator className="mb-6" />
          
          <div className="space-y-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">Central Sector Scheme of Scholarships for College and University Students</h4>
              <p className="text-gray-700 mt-2">
                A merit-based scholarship scheme to provide financial assistance to meritorious students from low income families.
              </p>
              
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Eligibility:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>Students who scored above 80% in 12th class</li>
                    <li>Family income below ₹6 lakh per annum</li>
                    <li>Pursuing regular degree courses</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Benefits:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>₹10,000 per annum</li>
                    <li>Fixed rate for entire course duration</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Last Date:</h5>
                  <p className="text-sm text-gray-600 mt-1">November 30, 2023</p>
                  
                  <div className="mt-3 flex">
                    <a 
                      href="https://scholarships.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-school-blue hover:underline text-sm inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Apply Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">Ishan Uday Scholarship Scheme for North Eastern Region</h4>
              <p className="text-gray-700 mt-2">
                A special scholarship scheme for students from North Eastern states to pursue higher studies outside their home state.
              </p>
              
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Eligibility:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>Students from North Eastern states</li>
                    <li>Family income below ₹8 lakh per annum</li>
                    <li>Admission in general degree courses</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Benefits:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>₹5,400 per month for hostellers</li>
                    <li>₹3,500 per month for day scholars</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Last Date:</h5>
                  <p className="text-sm text-gray-600 mt-1">September 30, 2023</p>
                  
                  <div className="mt-3 flex">
                    <a 
                      href="https://scholarships.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-school-blue hover:underline text-sm inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Apply Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Other Government Schemes</h3>
          <Separator className="mb-6" />
          
          <div className="space-y-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">Pragati Scholarship Scheme for Girl Students</h4>
              <p className="text-gray-700 mt-2">
                A scheme to provide assistance to girl students for pursuing technical education.
              </p>
              
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Eligibility:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>Girl students only</li>
                    <li>Family income below ₹8 lakh per annum</li>
                    <li>Admission in AICTE approved institutions</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Benefits:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>₹50,000 per annum</li>
                    <li>Tuition fee reimbursement up to ₹30,000</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Last Date:</h5>
                  <p className="text-sm text-gray-600 mt-1">September 30, 2023</p>
                  
                  <div className="mt-3 flex">
                    <a 
                      href="https://www.aicte-india.org" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-school-blue hover:underline text-sm inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Apply Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">National Means-cum-Merit Scholarship Scheme</h4>
              <p className="text-gray-700 mt-2">
                A scholarship scheme to award meritorious students of economically weaker sections to arrest their drop out at class VIII.
              </p>
              
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Eligibility:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>Students who have passed class VIII</li>
                    <li>Family income below ₹1.5 lakh per annum</li>
                    <li>Minimum 55% marks in class VII</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Benefits:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    <li>₹12,000 per annum</li>
                    <li>Scholarship from class IX to XII</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700">Last Date:</h5>
                  <p className="text-sm text-gray-600 mt-1">October 15, 2023</p>
                  
                  <div className="mt-3 flex">
                    <a 
                      href="https://scholarships.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-school-blue hover:underline text-sm inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Apply Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Application Process</h3>
            <Separator className="mb-4" />
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">1</div>
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Registration</h4>
                  <p className="text-sm text-gray-700">
                    Register on the National Scholarship Portal (NSP) at scholarships.gov.in or the respective scheme's website.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">2</div>
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Fill Application Form</h4>
                  <p className="text-sm text-gray-700">
                    Complete the application form with accurate information. Keep your Aadhaar number, bank account details, and educational documents ready.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">3</div>
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Document Upload</h4>
                  <p className="text-sm text-gray-700">
                    Upload all required documents such as income certificate, caste certificate, previous marksheets, and bank passbook.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">4</div>
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Institute Verification</h4>
                  <p className="text-sm text-gray-700">
                    Submit the application. Our institution will verify your details and approve your application.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">5</div>
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Final Approval & Disbursement</h4>
                  <p className="text-sm text-gray-700">
                    The concerned department will review and approve the application. The scholarship amount will be directly transferred to your bank account through DBT.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <a 
                href="#" 
                className="bg-school-blue text-white px-4 py-2 rounded hover:bg-school-blue-dark transition-colors text-sm inline-flex items-center"
              >
                <Download className="h-4 w-4 mr-1" />
                Download Application Guide
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Required Documents</h3>
            <Separator className="mb-4" />
            
            <div className="space-y-2">
              <p className="text-gray-700 mb-4">
                The following documents are generally required for most scholarship applications:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <span className="text-gray-700">Aadhaar Card</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <span className="text-gray-700">Income Certificate (issued by a competent authority)</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <span className="text-gray-700">Caste Certificate (for SC/ST/OBC scholarships)</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <span className="text-gray-700">Previous Academic Year Marksheets</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <span className="text-gray-700">Bonafide Student Certificate</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <span className="text-gray-700">Bank Passbook (first page showing account details)</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <span className="text-gray-700">Recent Passport Size Photograph</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <span className="text-gray-700">Domicile/Residence Certificate</span>
                </li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-yellow-800">Important Note</h5>
                    <p className="text-sm text-yellow-700">
                      Some schemes may require additional documents. Please check the specific requirements for the scholarship you are applying for. All documents should be self-attested.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Assistance & Support</h3>
          <Separator className="mb-6" />
          
          <p className="text-gray-700 mb-6">
            Our institution provides assistance to students in applying for various government schemes and scholarships. For any help regarding scholarship applications, you can contact:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">Scholarship Cell</h4>
              <p className="text-sm"><span className="font-medium">Contact Person:</span> Dr. Anita Sharma</p>
              <p className="text-sm"><span className="font-medium">Phone:</span> +91 9876543240</p>
              <p className="text-sm"><span className="font-medium">Email:</span> scholarship@balikavidyalaya.edu</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">SC/ST Cell</h4>
              <p className="text-sm"><span className="font-medium">Contact Person:</span> Prof. Ramesh Singh</p>
              <p className="text-sm"><span className="font-medium">Phone:</span> +91 9876543241</p>
              <p className="text-sm"><span className="font-medium">Email:</span> scst@balikavidyalaya.edu</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">Office Hours</h4>
              <p className="text-sm"><span className="font-medium">Monday to Friday:</span> 10:00 AM - 4:00 PM</p>
              <p className="text-sm"><span className="font-medium">Saturday:</span> 10:00 AM - 1:00 PM</p>
              <p className="text-sm"><span className="font-medium">Location:</span> Administrative Block, Room No. 10</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://scholarships.gov.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-school-blue text-white px-6 py-2 rounded hover:bg-school-blue-dark transition-colors inline-flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit National Scholarship Portal
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GovernmentSchemes;
