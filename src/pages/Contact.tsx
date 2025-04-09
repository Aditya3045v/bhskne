
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout 
      title="Contact Us" 
      description="Get in touch with Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Contact Information</h3>
            <Separator className="mb-6" />
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-school-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Address</h4>
                  <p className="text-gray-600">
                    Balika Madhya Vidyalaya,<br />
                    Main Road, Near Railway Station,<br />
                    Kishanganj, Bihar - 855107
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-school-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Phone</h4>
                  <p className="text-gray-600">+91 9876543200 (Office)</p>
                  <p className="text-gray-600">+91 9876543201 (Principal)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-school-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Email</h4>
                  <p className="text-gray-600">info@balikavidyalaya.edu</p>
                  <p className="text-gray-600">principal@balikavidyalaya.edu</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-school-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Office Hours</h4>
                  <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Closed on Sundays and Public Holidays</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe className="h-5 w-5 text-school-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-school-blue-dark">Website</h4>
                  <p className="text-gray-600">www.balikavidyalaya.edu</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Send Us a Message</h3>
            <Separator className="mb-6" />
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-school-blue text-white px-4 py-2 rounded-md hover:bg-school-blue-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-bold text-school-blue-dark mb-4">How to Reach Us</h3>
          <Separator className="mb-6" />
          
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.698201891422!2d87.94525391438814!3d26.12561048192991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e54946ea270ddb%3A0x4878405ef5200724!2sKishanganj%2C%20Bihar!5e0!3m2!1sen!2sin!4v1654782456781!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">By Road</h4>
              <p className="text-sm text-gray-600">
                The school is located near the Railway Station and is easily accessible by road. Local buses and auto-rickshaws are available from various parts of the city.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">By Rail</h4>
              <p className="text-sm text-gray-600">
                Kishanganj Railway Station is just 1 km away from the school. Regular trains connect Kishanganj to major cities like Patna, Kolkata, and Delhi.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-school-blue-dark mb-2">By Air</h4>
              <p className="text-sm text-gray-600">
                The nearest airport is Bagdogra Airport, approximately 70 km away. Taxis and buses are available from the airport to Kishanganj.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Admission Enquiries</h3>
            <Separator className="mb-4" />
            <p className="text-gray-600 mb-4">
              For admission-related queries, please contact our Admission Office:
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 9876543214<br />
              <strong>Email:</strong> admissions@balikavidyalaya.edu<br />
              <strong>Timing:</strong> Monday to Friday, 10 AM - 4 PM
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Fee Payment</h3>
            <Separator className="mb-4" />
            <p className="text-gray-600 mb-4">
              For fee payment and related queries, please contact our Accounts Office:
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 9876543218<br />
              <strong>Email:</strong> accounts@balikavidyalaya.edu<br />
              <strong>Timing:</strong> Monday to Friday, 10 AM - 2 PM
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Examination Cell</h3>
            <Separator className="mb-4" />
            <p className="text-gray-600 mb-4">
              For examination-related queries, please contact our Examination Cell:
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 9876543216<br />
              <strong>Email:</strong> exam@balikavidyalaya.edu<br />
              <strong>Timing:</strong> Monday to Friday, 10 AM - 4 PM
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
