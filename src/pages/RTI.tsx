
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";
import { FileText, Clock, Download, Info } from "lucide-react";

const RTI = () => {
  return (
    <PageLayout 
      title="Right to Information (RTI)" 
      description="Information and guidelines for filing RTI applications"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-gray-700">
            The Right to Information Act, 2005 empowers citizens to request information from public authorities. 
            As a public institution, Balika Madhya Vidyalaya is committed to transparency and providing 
            information to citizens as per the provisions of the RTI Act.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">RTI Officers</h3>
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">Public Information Officer (PIO)</h4>
              <div className="space-y-1">
                <p className="text-gray-700"><span className="font-medium">Name:</span> Dr. Anil Kumar</p>
                <p className="text-gray-700"><span className="font-medium">Designation:</span> Administrative Officer</p>
                <p className="text-gray-700"><span className="font-medium">Phone:</span> +91 9876543221</p>
                <p className="text-gray-700"><span className="font-medium">Email:</span> pio@balikavidyalaya.edu</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">Assistant Public Information Officer (APIO)</h4>
              <div className="space-y-1">
                <p className="text-gray-700"><span className="font-medium">Name:</span> Mrs. Kavita Singh</p>
                <p className="text-gray-700"><span className="font-medium">Designation:</span> Office Superintendent</p>
                <p className="text-gray-700"><span className="font-medium">Phone:</span> +91 9876543222</p>
                <p className="text-gray-700"><span className="font-medium">Email:</span> apio@balikavidyalaya.edu</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">First Appellate Authority</h4>
              <div className="space-y-1">
                <p className="text-gray-700"><span className="font-medium">Name:</span> Dr. Meena Jha</p>
                <p className="text-gray-700"><span className="font-medium">Designation:</span> Principal</p>
                <p className="text-gray-700"><span className="font-medium">Phone:</span> +91 9876543201</p>
                <p className="text-gray-700"><span className="font-medium">Email:</span> principal@balikavidyalaya.edu</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">How to File an RTI Application</h3>
          <Separator className="mb-6" />
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">1</div>
              <div>
                <h4 className="font-semibold text-school-blue-dark">Prepare Your Application</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Write your application in English or Hindi, clearly mentioning the information you are seeking. 
                  There is no prescribed format for RTI application, but it should contain all necessary details.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">2</div>
              <div>
                <h4 className="font-semibold text-school-blue-dark">Pay the Application Fee</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Attach the application fee of ₹10 in the form of Indian Postal Order (IPO) or Demand Draft (DD) in favor of "Principal, Balika Madhya Vidyalaya" payable at Kishanganj. 
                  Applicants belonging to BPL category are exempted from paying the fee (proof of BPL status must be attached).
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">3</div>
              <div>
                <h4 className="font-semibold text-school-blue-dark">Submit Your Application</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Submit your application in person at the college office or send it by post to the Public Information Officer 
                  at the following address:<br /><br />
                  Public Information Officer,<br />
                  Balika Madhya Vidyalaya,<br />
                  Main Road, Near Railway Station,<br />
                  Kishanganj, Bihar - 855107
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">4</div>
              <div>
                <h4 className="font-semibold text-school-blue-dark">Receive Response</h4>
                <p className="text-sm text-gray-700 mt-1">
                  The PIO will respond to your application within 30 days from the date of receipt. 
                  If the information concerns the life or liberty of a person, it will be provided within 48 hours.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-school-blue-light flex items-center justify-center text-white font-bold mr-3 mt-0.5">5</div>
              <div>
                <h4 className="font-semibold text-school-blue-dark">File an Appeal (if necessary)</h4>
                <p className="text-sm text-gray-700 mt-1">
                  If you are not satisfied with the response or do not receive a response within the stipulated time, 
                  you can file an appeal with the First Appellate Authority within 30 days.
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
              Download RTI Application Form
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">RTI Fee Structure</h3>
            <Separator className="mb-4" />
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-school-blue-dark">Application Fee</h4>
                <p className="text-gray-700 mt-1">₹10 per application</p>
              </div>
              
              <div>
                <h4 className="font-medium text-school-blue-dark">Information Cost</h4>
                <ul className="list-disc list-inside space-y-1 mt-1 text-gray-700">
                  <li>₹2 per page (A4 or A3 size paper)</li>
                  <li>Actual cost for larger size paper</li>
                  <li>Actual cost for samples, models, etc.</li>
                  <li>₹50 per CD/DVD</li>
                  <li>As fixed price for printed publications or at the price of such publication</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-school-blue-dark">Inspection of Records</h4>
                <p className="text-gray-700 mt-1">No fee for the first hour; ₹5 for each subsequent hour (or fraction thereof)</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-yellow-800">BPL Exemption</h5>
                    <p className="text-sm text-yellow-700">
                      Persons belonging to Below Poverty Line (BPL) category are exempted from paying the application fee. 
                      They must provide a copy of their BPL card or certificate with the application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Timeline for RTI Response</h3>
            <Separator className="mb-4" />
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-school-blue mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-school-blue-dark">General Information</h4>
                  <p className="text-gray-700 mt-1">30 days from the date of receipt of application</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-school-blue mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-school-blue-dark">Information Concerning Life or Liberty</h4>
                  <p className="text-gray-700 mt-1">48 hours from the time of receipt of application</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-school-blue mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-school-blue-dark">Information from Third Party</h4>
                  <p className="text-gray-700 mt-1">40 days from the date of receipt of application (10 additional days for seeking third party's views)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-school-blue mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-school-blue-dark">First Appeal</h4>
                  <p className="text-gray-700 mt-1">30 days from the date of receipt of appeal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-school-blue mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-school-blue-dark">Second Appeal (to Information Commission)</h4>
                  <p className="text-gray-700 mt-1">Must be filed within 90 days from the date of decision of First Appellate Authority or from the date when decision was to be made</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Information Disclosed Under Section 4(1)(b)</h3>
          <Separator className="mb-6" />
          
          <p className="text-gray-700 mb-4">
            As required under Section 4(1)(b) of the RTI Act, 2005, the following information about Balika Madhya Vidyalaya is available for public access:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Particulars of Organization, Functions and Duties</a>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Powers and Duties of Officers and Employees</a>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Decision Making Process</a>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Norms for Discharge of Functions</a>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Rules, Regulations, Instructions, Manuals and Records</a>
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Public Information Officers</a>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Budget and Financial Information</a>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Subsidy Programs and Beneficiaries</a>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Faculty and Staff Details</a>
                </li>
                <li className="flex items-start">
                  <FileText className="h-4 w-4 text-school-blue mr-2 mt-1" />
                  <a href="#" className="text-school-blue hover:underline">Monthly Remuneration Received by Officers and Employees</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="#" 
              className="bg-school-blue text-white px-4 py-2 rounded hover:bg-school-blue-dark transition-colors text-sm"
            >
              View All Section 4(1)(b) Information
            </a>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">RTI Statistics</h3>
          <Separator className="mb-6" />
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Year</th>
                  <th className="border border-gray-300 px-4 py-2">RTI Applications Received</th>
                  <th className="border border-gray-300 px-4 py-2">Applications Disposed</th>
                  <th className="border border-gray-300 px-4 py-2">First Appeals</th>
                  <th className="border border-gray-300 px-4 py-2">Second Appeals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2022-23</td>
                  <td className="border border-gray-300 px-4 py-2">58</td>
                  <td className="border border-gray-300 px-4 py-2">56</td>
                  <td className="border border-gray-300 px-4 py-2">4</td>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">2021-22</td>
                  <td className="border border-gray-300 px-4 py-2">42</td>
                  <td className="border border-gray-300 px-4 py-2">41</td>
                  <td className="border border-gray-300 px-4 py-2">3</td>
                  <td className="border border-gray-300 px-4 py-2">0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2020-21</td>
                  <td className="border border-gray-300 px-4 py-2">35</td>
                  <td className="border border-gray-300 px-4 py-2">35</td>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">Common RTI Topics</h4>
              <ul className="mt-2 text-left text-sm text-gray-700 space-y-1">
                <li>Admission Process and Criteria</li>
                <li>Examination Results and Evaluation</li>
                <li>Faculty Recruitment and Qualifications</li>
                <li>Infrastructure and Facilities</li>
                <li>Budget Allocation and Utilization</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">Quarterly RTI Reports</h4>
              <div className="mt-2 space-y-1">
                <a href="#" className="text-school-blue hover:underline block text-sm">
                  <FileText className="h-3 w-3 inline-block mr-1" />
                  January - March 2023
                </a>
                <a href="#" className="text-school-blue hover:underline block text-sm">
                  <FileText className="h-3 w-3 inline-block mr-1" />
                  April - June 2023
                </a>
                <a href="#" className="text-school-blue hover:underline block text-sm">
                  <FileText className="h-3 w-3 inline-block mr-1" />
                  July - September 2022
                </a>
                <a href="#" className="text-school-blue hover:underline block text-sm">
                  <FileText className="h-3 w-3 inline-block mr-1" />
                  October - December 2022
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark">Important Links</h4>
              <div className="mt-2 space-y-1">
                <a href="https://rti.gov.in" target="_blank" rel="noopener noreferrer" className="text-school-blue hover:underline block text-sm">
                  RTI Portal
                </a>
                <a href="https://cic.gov.in" target="_blank" rel="noopener noreferrer" className="text-school-blue hover:underline block text-sm">
                  Central Information Commission
                </a>
                <a href="https://sic.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-school-blue hover:underline block text-sm">
                  Bihar State Information Commission
                </a>
                <a href="#" className="text-school-blue hover:underline block text-sm">
                  RTI Act, 2005 (Full Text)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RTI;
