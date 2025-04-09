
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";
import { FileText, Award, Download, Calendar, Star, Info, ExternalLink } from "lucide-react";

const NAAC = () => {
  return (
    <PageLayout 
      title="NAAC Accreditation" 
      description="Information about our NAAC accreditation, SSR, and quality initiatives"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-gray-700">
            Balika Madhya Vidyalaya is committed to maintaining high standards of quality education. 
            Our institution is accredited by the National Assessment and Accreditation Council (NAAC), 
            which is an autonomous body established by the University Grants Commission (UGC) to assess 
            and accredit institutions of higher education in India.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">NAAC Accreditation Status</h3>
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-gray-300 mr-1" />
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <h4 className="font-semibold text-school-blue-dark text-lg">Grade B++</h4>
              <p className="text-sm text-gray-600 mt-1">CGPA: 2.92</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-school-blue-dark mb-2">Accreditation Cycle</h4>
              <p className="text-gray-700">3rd Cycle</p>
              <p className="text-sm text-gray-600 mt-1">Previous: 'B+' (2nd Cycle, 2016)</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-school-blue-dark mb-2">Validity Period</h4>
              <p className="text-gray-700">March 15, 2022 to March 14, 2027</p>
              <p className="text-sm text-gray-600 mt-1">5 Years</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Award className="h-6 w-6 text-yellow-500 mr-2" />
              <div>
                <h4 className="font-semibold text-school-blue-dark">Accreditation Certificate</h4>
                <p className="text-sm text-gray-600">NAAC/A&A/3rd Cycle/GBG-029/2022</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <a 
                href="#" 
                className="bg-school-blue text-white px-3 py-1.5 rounded text-sm hover:bg-school-blue-dark transition-colors inline-flex items-center"
              >
                <Download className="h-4 w-4 mr-1" />
                Download Certificate
              </a>
              <a 
                href="#" 
                className="bg-white border border-school-blue text-school-blue px-3 py-1.5 rounded text-sm hover:bg-gray-50 transition-colors inline-flex items-center"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                View on NAAC Website
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Criterion-wise Grade Points</h3>
            <Separator className="mb-6" />
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Criteria I: Curricular Aspects</span>
                  <span className="text-school-blue font-medium">3.01</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-school-blue h-2.5 rounded-full" style={{ width: '60.2%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Criteria II: Teaching-Learning and Evaluation</span>
                  <span className="text-school-blue font-medium">3.15</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-school-blue h-2.5 rounded-full" style={{ width: '63%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Criteria III: Research, Innovations and Extension</span>
                  <span className="text-school-blue font-medium">2.76</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-school-blue h-2.5 rounded-full" style={{ width: '55.2%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Criteria IV: Infrastructure and Learning Resources</span>
                  <span className="text-school-blue font-medium">2.85</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-school-blue h-2.5 rounded-full" style={{ width: '57%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Criteria V: Student Support and Progression</span>
                  <span className="text-school-blue font-medium">3.05</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-school-blue h-2.5 rounded-full" style={{ width: '61%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Criteria VI: Governance, Leadership and Management</span>
                  <span className="text-school-blue font-medium">2.82</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-school-blue h-2.5 rounded-full" style={{ width: '56.4%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Criteria VII: Institutional Values and Best Practices</span>
                  <span className="text-school-blue font-medium">2.85</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-school-blue h-2.5 rounded-full" style={{ width: '57%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="text-school-blue hover:underline text-sm inline-flex items-center"
              >
                <FileText className="h-4 w-4 mr-1" />
                View Detailed Assessment Report
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Self Study Report (SSR)</h3>
            <Separator className="mb-6" />
            
            <div className="space-y-4">
              <p className="text-gray-700">
                The Self Study Report (SSR) is a comprehensive document that provides detailed information about our institution's 
                academic and administrative functioning. It was prepared as part of the NAAC accreditation process and covers all 
                seven criteria of assessment.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-school-blue-dark mb-2">SSR Submission Details</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-600">Date of Submission:</div>
                  <div className="font-medium">August 15, 2021</div>
                  
                  <div className="text-gray-600">IIQA Submission Date:</div>
                  <div className="font-medium">June 10, 2021</div>
                  
                  <div className="text-gray-600">Peer Team Visit:</div>
                  <div className="font-medium">February 15-17, 2022</div>
                  
                  <div className="text-gray-600">Result Declaration:</div>
                  <div className="font-medium">March 15, 2022</div>
                </div>
              </div>
              
              <h4 className="font-semibold text-school-blue-dark mt-4">Download SSR Documents</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <a 
                  href="#" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-school-blue mr-2" />
                  <div>
                    <h5 className="font-medium text-gray-800">Complete SSR</h5>
                    <p className="text-xs text-gray-500">PDF, 15.2 MB</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-school-blue mr-2" />
                  <div>
                    <h5 className="font-medium text-gray-800">Extended Profile</h5>
                    <p className="text-xs text-gray-500">PDF, 2.8 MB</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-school-blue mr-2" />
                  <div>
                    <h5 className="font-medium text-gray-800">Executive Summary</h5>
                    <p className="text-xs text-gray-500">PDF, 1.5 MB</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-school-blue mr-2" />
                  <div>
                    <h5 className="font-medium text-gray-800">DVV Clarifications</h5>
                    <p className="text-xs text-gray-500">PDF, 4.2 MB</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Quality Initiatives</h3>
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-school-blue-dark mb-3">Internal Quality Assurance Cell (IQAC)</h4>
              <p className="text-gray-700 mb-4">
                The Internal Quality Assurance Cell (IQAC) at Balika Madhya Vidyalaya plays a crucial role in developing a system for conscious, 
                consistent, and catalytic improvement in the overall performance of the institution. It works towards realizing the goals of quality 
                enhancement and sustenance.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-school-blue-dark mb-2">IQAC Composition</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span><strong>Chairperson:</strong> Dr. Meena Jha, Principal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span><strong>Coordinator:</strong> Dr. Anil Kumar, Associate Professor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span><strong>Members:</strong> Senior faculty members, Management representatives, Local society members, Student representatives, Alumni</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4">
                <h5 className="font-medium text-school-blue-dark mb-2">Recent IQAC Initiatives</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Implementation of Learning Management System (LMS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Faculty Development Programs on innovative teaching methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Student Feedback System enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Green Campus initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Research promotion activities</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-school-blue-dark mb-3">Best Practices</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-school-blue-dark">1. Digital Literacy Program</h5>
                  <p className="text-sm text-gray-700 mt-1">
                    A comprehensive program to enhance digital literacy among students and faculty members, particularly focusing on 
                    rural students and first-generation learners. The program includes basic computer skills, internet usage, digital 
                    resources for education, and cybersecurity awareness.
                  </p>
                  <a href="#" className="text-school-blue hover:underline text-xs mt-2 inline-block">
                    Read More
                  </a>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-school-blue-dark">2. Women Empowerment Initiatives</h5>
                  <p className="text-sm text-gray-700 mt-1">
                    Various programs and activities designed to empower female students, including skill development workshops, 
                    entrepreneurship training, awareness programs on women's rights, self-defense training, and counseling services.
                  </p>
                  <a href="#" className="text-school-blue hover:underline text-xs mt-2 inline-block">
                    Read More
                  </a>
                </div>
              </div>
              
              <h4 className="font-semibold text-school-blue-dark mt-6 mb-3">Distinctive Features</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-school-blue-dark">Holistic Education for Rural Girls</h5>
                <p className="text-sm text-gray-700 mt-1">
                  Balika Madhya Vidyalaya has been instrumental in providing quality education to girls from rural and 
                  economically weaker sections of society. Our distinctive approach combines academic excellence with 
                  personality development, cultural values, and life skills training.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Key elements include mentorship programs, financial support through scholarships, career guidance, and 
                  community outreach activities that allow students to contribute to social development.
                </p>
                <a href="#" className="text-school-blue hover:underline text-xs mt-2 inline-block">
                  Read More
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold text-school-blue-dark mb-3">Annual Quality Assurance Reports (AQAR)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <a 
                href="#" 
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText className="h-5 w-5 text-school-blue mr-2" />
                <div>
                  <h5 className="font-medium text-gray-800">AQAR 2022-23</h5>
                  <p className="text-xs text-gray-500">PDF, 3.5 MB</p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText className="h-5 w-5 text-school-blue mr-2" />
                <div>
                  <h5 className="font-medium text-gray-800">AQAR 2021-22</h5>
                  <p className="text-xs text-gray-500">PDF, 3.2 MB</p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText className="h-5 w-5 text-school-blue mr-2" />
                <div>
                  <h5 className="font-medium text-gray-800">AQAR 2020-21</h5>
                  <p className="text-xs text-gray-500">PDF, 3.0 MB</p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText className="h-5 w-5 text-school-blue mr-2" />
                <div>
                  <h5 className="font-medium text-gray-800">AQAR 2019-20</h5>
                  <p className="text-xs text-gray-500">PDF, 2.8 MB</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Feedback System</h3>
          <Separator className="mb-6" />
          
          <p className="text-gray-700 mb-4">
            Balika Madhya Vidyalaya has a structured feedback system to collect, analyze, and utilize feedback from various 
            stakeholders for continuous improvement in academic and administrative processes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">Feedback from Students</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Course Evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Faculty Evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Infrastructure and Facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Overall College Experience</span>
                </li>
              </ul>
              <div className="mt-3">
                <a 
                  href="#" 
                  className="text-school-blue hover:underline text-xs inline-flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Student Feedback Form
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">Feedback from Parents</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Academic Quality</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Campus Safety and Security</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Communication from College</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Overall Satisfaction</span>
                </li>
              </ul>
              <div className="mt-3">
                <a 
                  href="#" 
                  className="text-school-blue hover:underline text-xs inline-flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Parent Feedback Form
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">Feedback from Alumni & Employers</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Curriculum Relevance</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Skill Development</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Career Preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                  <span>Suggestions for Improvement</span>
                </li>
              </ul>
              <div className="mt-3 space-y-1">
                <a 
                  href="#" 
                  className="text-school-blue hover:underline text-xs inline-flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Alumni Feedback Form
                </a>
                <a 
                  href="#" 
                  className="text-school-blue hover:underline text-xs inline-flex items-center block"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Employer Feedback Form
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
              <div>
                <h5 className="font-semibold text-yellow-800">Feedback Analysis</h5>
                <p className="text-sm text-yellow-700">
                  The collected feedback is analyzed systematically, and the results are used for curriculum enhancement, 
                  teaching-learning improvements, and overall institutional development. The feedback analysis reports are 
                  presented to the IQAC and appropriate committees for action.
                </p>
                <div className="mt-2">
                  <a 
                    href="#" 
                    className="text-yellow-800 hover:underline text-xs inline-flex items-center"
                  >
                    <FileText className="h-3 w-3 mr-1" />
                    Download Latest Feedback Analysis Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">Future Plans & Initiatives</h3>
          <Separator className="mb-6" />
          
          <div className="space-y-4">
            <p className="text-gray-700">
              Based on the recommendations of the NAAC Peer Team and our internal quality assessment, Balika Madhya Vidyalaya 
              has outlined the following key areas for improvement and development:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-school-blue-dark mb-2">Academic Enhancement</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Introduction of skill-based and vocational courses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Enhancement of ICT-enabled teaching-learning methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Strengthening research activities among faculty and students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Expansion of e-learning resources</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-school-blue-dark mb-2">Infrastructure Development</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Modernization of laboratories and classrooms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Enhancement of library resources and digital library</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Improvement of sports facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Development of green campus initiatives</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-school-blue-dark mb-2">Student Support & Career Development</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Strengthening career counseling and placement services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Expansion of scholarship programs for needy students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Enhancement of soft skills and personality development programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Increasing industry-academia collaboration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-school-blue-dark mb-2">Governance & Administration</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Implementation of e-governance in all areas of administration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Regular faculty development programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Enhancement of alumni engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-school-blue mt-1.5 mr-2"></span>
                    <span>Strengthening of feedback mechanism</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="bg-school-blue text-white px-6 py-2 rounded hover:bg-school-blue-dark transition-colors inline-flex items-center"
              >
                <FileText className="h-4 w-4 mr-2" />
                View Strategic Plan (2022-2027)
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NAAC;
