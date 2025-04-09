
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <PageLayout 
      title="Privacy Policy" 
      description="Learn how we collect, use, and protect your information"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-school-blue-dark mb-4">Privacy Policy</h2>
          <Separator className="mb-6" />
          
          <p className="text-gray-700 mb-4">
            Last updated: June 1, 2023
          </p>
          
          <p className="text-gray-700 mb-4">
            Balika Madhya Vidyalaya ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website or interact with our services.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Information We Collect</h3>
          
          <p className="text-gray-700 mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Fill out a form on our website</li>
            <li>Apply for admission</li>
            <li>Register for an event</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us via email or phone</li>
            <li>Participate in surveys or feedback forms</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            The personal information we may collect includes:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Date of birth and gender</li>
            <li>Educational records and academic history</li>
            <li>Payment information</li>
            <li>Device information and IP address</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">How We Use Your Information</h3>
          
          <p className="text-gray-700 mb-4">
            We may use the information we collect for various purposes, including:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Providing and maintaining our services</li>
            <li>Processing admission applications</li>
            <li>Communicating with you about our programs, events, and updates</li>
            <li>Responding to your inquiries and requests</li>
            <li>Analyzing usage patterns to improve our website and services</li>
            <li>Complying with legal obligations</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Information Sharing</h3>
          
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to outside parties 
            except in the following circumstances:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>With your consent</li>
            <li>To comply with legal requirements, such as a law, regulation, or court order</li>
            <li>To protect our rights, property, or safety, or the rights, property, or safety of others</li>
            <li>With service providers who assist us in operating our website and conducting our business</li>
            <li>In connection with a merger, sale, or acquisition</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Data Security</h3>
          
          <p className="text-gray-700 mb-4">
            We implement appropriate security measures to protect your personal information from 
            unauthorized access, alteration, disclosure, or destruction. However, no method of 
            transmission over the Internet or electronic storage is 100% secure, and we cannot 
            guarantee absolute security.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Cookies and Tracking Technologies</h3>
          
          <p className="text-gray-700 mb-4">
            We may use cookies and similar tracking technologies to collect information about how you 
            interact with our website. You can set your browser to refuse all or some browser cookies, 
            but this may affect your ability to access certain features of our website.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Children's Privacy</h3>
          
          <p className="text-gray-700 mb-4">
            Our website is not intended for children under the age of 13. We do not knowingly collect 
            personal information from children under 13. If you are a parent or guardian and believe 
            that your child has provided us with personal information, please contact us so that we 
            can delete such information.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Changes to This Privacy Policy</h3>
          
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
            advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Contact Us</h3>
          
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          
          <p className="text-gray-700 mb-4">
            Balika Madhya Vidyalaya<br />
            Main Road, Near Railway Station<br />
            Kishanganj, Bihar - 855107<br />
            Email: privacy@balikavidyalaya.edu<br />
            Phone: +91 9876543200
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
