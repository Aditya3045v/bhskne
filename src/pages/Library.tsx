
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, BookMarked, Building, Info, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Library = () => {
  return (
    <PageLayout 
      title="Library" 
      description="Explore our well-equipped library with extensive collection of books and digital resources"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-school-blue-dark mb-4">About Our Library</h2>
            <p className="mb-4 text-gray-700">
              The central library of Balika Madhya Vidyalaya is a spacious, well-lit facility spread over 10,000 square feet. 
              Established in 1970, our library has grown to become one of the largest academic libraries in the region, 
              housing over 50,000 books, periodicals, journals, and digital resources.
            </p>
            <p className="mb-4 text-gray-700">
              Our library is designed to provide a conducive environment for reading, research, and academic pursuits. 
              With separate sections for reference books, textbooks, periodicals, and digital resources, the library caters 
              to the diverse needs of our students and faculty members.
            </p>
            <p className="mb-6 text-gray-700">
              The library is fully computerized with an integrated library management system that allows for easy search, 
              access, and management of resources. Our digital section provides access to e-books, online journals, and 
              research databases, enabling students to stay updated with the latest developments in their fields of study.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg flex">
                <BookOpen className="h-8 w-8 text-school-blue mr-3" />
                <div>
                  <h3 className="font-semibold text-school-blue-dark">50,000+ Books</h3>
                  <p className="text-sm text-gray-600">Comprehensive collection across subjects</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex">
                <Users className="h-8 w-8 text-school-blue mr-3" />
                <div>
                  <h3 className="font-semibold text-school-blue-dark">200+ Seating Capacity</h3>
                  <p className="text-sm text-gray-600">Spacious reading areas</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex">
                <BookMarked className="h-8 w-8 text-school-blue mr-3" />
                <div>
                  <h3 className="font-semibold text-school-blue-dark">100+ Journals</h3>
                  <p className="text-sm text-gray-600">National and international publications</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex">
                <Building className="h-8 w-8 text-school-blue mr-3" />
                <div>
                  <h3 className="font-semibold text-school-blue-dark">10,000 sq ft</h3>
                  <p className="text-sm text-gray-600">Modern facility with dedicated sections</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Library Reading Area" 
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-school-blue-dark mb-3">Library Information</h3>
                <Separator className="mb-4" />
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-school-blue mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Working Hours</h4>
                      <p className="text-sm text-gray-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-sm text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-school-blue mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Staff</h4>
                      <p className="text-sm text-gray-600">Chief Librarian: Dr. Rajesh Kumar</p>
                      <p className="text-sm text-gray-600">Assistant Librarians: 3</p>
                      <p className="text-sm text-gray-600">Library Assistants: 5</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-school-blue mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Contact</h4>
                      <p className="text-sm text-gray-600">Email: library@balikavidyalaya.edu</p>
                      <p className="text-sm text-gray-600">Phone: +91 9876543240</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-school-blue-dark text-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 mr-3" />
                <h3 className="text-lg font-bold">Library Awards</h3>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70 mr-2"></span>
                  <span>Best College Library Award (2020) - Bihar Library Association</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70 mr-2"></span>
                  <span>Digital Innovation Excellence (2021) - Education Department</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70 mr-2"></span>
                  <span>Heritage Collection Preservation Award (2019)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-school-blue-dark mb-6">Library Services</h2>
          
          <Tabs defaultValue="circulation">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="circulation">Circulation</TabsTrigger>
              <TabsTrigger value="digital">Digital Resources</TabsTrigger>
              <TabsTrigger value="reference">Reference Section</TabsTrigger>
              <TabsTrigger value="special">Special Collections</TabsTrigger>
            </TabsList>
            
            <TabsContent value="circulation" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-school-blue-dark mb-3">Circulation Services</h3>
                <p className="mb-4 text-gray-700">
                  Our circulation department handles the check-out, check-in, renewal, and reservation of library materials. 
                  Students and faculty members can borrow books for specified periods based on the following policies:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-school-blue text-white p-3">
                      <h4 className="font-semibold">For Students</h4>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>Books: Up to 3 books for 14 days</li>
                        <li>Magazines: Up to 2 for 7 days</li>
                        <li>Reference Materials: In-library use only</li>
                        <li>Fine for late return: ₹5 per day</li>
                        <li>Renewal: Twice, subject to no reservation</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-school-blue text-white p-3">
                      <h4 className="font-semibold">For Faculty</h4>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>Books: Up to 10 books for 30 days</li>
                        <li>Journals: Up to 5 for 14 days</li>
                        <li>Reference Materials: Up to 2 for 7 days</li>
                        <li>Fine for late return: ₹10 per day</li>
                        <li>Renewal: Twice, subject to no reservation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-2">
                  The circulation desk is open during all library hours. Members need to present their ID cards for borrowing materials.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="digital" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-school-blue-dark mb-3">Digital Resources</h3>
                <p className="mb-4 text-gray-700">
                  Our library provides access to a wide range of digital resources, including e-books, e-journals, online databases, 
                  and multimedia materials. Our digital section is equipped with computers and high-speed internet for accessing these resources.
                </p>
                
                <h4 className="font-semibold text-school-blue mb-2">Available Digital Resources:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">E-Journals & Databases</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>JSTOR</li>
                      <li>IEEE Xplore</li>
                      <li>ScienceDirect</li>
                      <li>ProQuest</li>
                      <li>EBSCO Host</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">E-Books Platforms</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Kindle Academic</li>
                      <li>Google Books</li>
                      <li>Project Gutenberg</li>
                      <li>Oxford Scholarship Online</li>
                      <li>Cambridge Core</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Open Access Resources</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Directory of Open Access Journals</li>
                      <li>arXiv.org</li>
                      <li>Open Library</li>
                      <li>PubMed Central</li>
                      <li>ERIC</li>
                    </ul>
                  </div>
                </div>
                
                <h4 className="font-semibold text-school-blue mb-2">Digital Facilities:</h4>
                <ul className="text-gray-700 mb-4 space-y-1">
                  <li>• 30 computer workstations with internet access</li>
                  <li>• Printing and scanning facilities</li>
                  <li>• Wi-Fi connectivity throughout the library</li>
                  <li>• Digital resource training sessions for new users</li>
                </ul>
                
                <p className="text-gray-700">
                  Access to these resources is available to all registered students and faculty members. 
                  Remote access is also provided through institutional login credentials.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="reference" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-school-blue-dark mb-3">Reference Section</h3>
                <p className="mb-4 text-gray-700">
                  The Reference Section houses a comprehensive collection of encyclopedias, dictionaries, handbooks, 
                  yearbooks, atlases, and other reference materials. These materials are for in-library use only and 
                  cannot be borrowed.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-school-blue mb-2">Reference Collection:</h4>
                    <ul className="text-gray-700 space-y-1 mb-4">
                      <li>• General and Subject Encyclopedias</li>
                      <li>• Dictionaries in multiple languages</li>
                      <li>• Handbooks and Manuals</li>
                      <li>• Statistical Yearbooks</li>
                      <li>• Bibliographies and Indexes</li>
                      <li>• Maps and Atlases</li>
                      <li>• Government Publications</li>
                    </ul>
                    
                    <h4 className="font-semibold text-school-blue mb-2">Reference Services:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Information Retrieval Assistance</li>
                      <li>• Research Guidance</li>
                      <li>• Citation and Bibliography Help</li>
                      <li>• Subject-specific Reference Support</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Notable Reference Collections</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-school-blue-dark">Encyclopedia Britannica</h5>
                        <p className="text-sm text-gray-600">Complete 32-volume set with annual updates</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-school-blue-dark">Oxford English Dictionary</h5>
                        <p className="text-sm text-gray-600">20-volume complete set</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-school-blue-dark">Handbook of Chemistry and Physics</h5>
                        <p className="text-sm text-gray-600">Standard reference for scientific data</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-school-blue-dark">World Atlas Collection</h5>
                        <p className="text-sm text-gray-600">Historic and contemporary atlases</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-school-blue-dark">Census of India Publications</h5>
                        <p className="text-sm text-gray-600">Comprehensive demographic data</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  The Reference Section is staffed by specialized librarians who can assist with locating information, 
                  researching topics, and navigating reference materials. Research consultation services are available 
                  by appointment.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="special" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-school-blue-dark mb-3">Special Collections</h3>
                <p className="mb-4 text-gray-700">
                  Our library houses several special collections that are valuable resources for research and historical studies. 
                  These collections are maintained in controlled environments to preserve the materials for future generations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="border rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Historical Documents" 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-school-blue-dark mb-2">Historical Archives</h4>
                      <p className="text-sm text-gray-700">
                        Collection of historical documents, manuscripts, and photographs related to the history of 
                        Kishanganj and the surrounding region. Includes records dating back to the early 20th century.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Rare Books" 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-school-blue-dark mb-2">Rare Book Collection</h4>
                      <p className="text-sm text-gray-700">
                        Over 500 rare and antiquarian books, including first editions, limited prints, and books of 
                        historical significance. Special focus on works related to Bihar's cultural heritage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Thesis Collection" 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-school-blue-dark mb-2">Thesis Repository</h4>
                      <p className="text-sm text-gray-700">
                        Collection of theses and dissertations submitted by faculty members and research scholars. 
                        Provides valuable research insights across various disciplines.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-school-blue mb-3">Access and Usage Policies:</h4>
                <ul className="text-gray-700 mb-4 space-y-1">
                  <li>• Special collections are accessible by appointment only</li>
                  <li>• Visitors must register and provide identification</li>
                  <li>• Materials must be handled with provided gloves</li>
                  <li>• No food, drinks, or bags allowed in the special collections area</li>
                  <li>• Photography may be permitted with prior approval</li>
                  <li>• Research assistance available from specialized librarians</li>
                </ul>
                
                <p className="text-gray-700">
                  For access to these special collections, please contact the Chief Librarian at least 48 hours in advance.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-school-blue-dark mb-6">Library Rules and Regulations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-school-blue-dark mb-3">General Rules</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">1.</span>
                  <span>Library membership is mandatory for borrowing books.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">2.</span>
                  <span>Members must produce their ID cards at the entrance and when borrowing books.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">3.</span>
                  <span>Strict silence must be observed in the library.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">4.</span>
                  <span>Mobile phones must be kept in silent mode within the library premises.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">5.</span>
                  <span>No food or beverages are allowed in the library.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">6.</span>
                  <span>Personal belongings should be kept at the property counter near the entrance.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">7.</span>
                  <span>Damaging library materials will result in penalties and disciplinary action.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-school-blue-dark mb-3">Book Borrowing Rules</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">1.</span>
                  <span>Books should be returned on or before the due date.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">2.</span>
                  <span>Late returns will incur fines as per the library policy.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">3.</span>
                  <span>Books can be renewed twice if there is no reservation for them.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">4.</span>
                  <span>Reference books, rare books, and periodicals cannot be borrowed.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">5.</span>
                  <span>Lost or damaged books must be replaced or compensated as per library policy.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">6.</span>
                  <span>Borrowing privileges may be suspended for repeated violations of library rules.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-school-blue font-bold mr-2">7.</span>
                  <span>All borrowed materials must be returned before semester examinations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Library;
