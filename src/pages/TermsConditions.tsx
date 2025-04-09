
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";

const TermsConditions = () => {
  return (
    <PageLayout 
      title="Terms & Conditions" 
      description="Terms and conditions for using our website and services"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-school-blue-dark mb-4">Terms and Conditions</h2>
          <Separator className="mb-6" />
          
          <p className="text-gray-700 mb-4">
            Last updated: June 1, 2023
          </p>
          
          <p className="text-gray-700 mb-4">
            Please read these Terms and Conditions carefully before using the website operated by Balika Madhya Vidyalaya.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Acceptance of Terms</h3>
          
          <p className="text-gray-700 mb-4">
            By accessing or using our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Use License</h3>
          
          <p className="text-gray-700 mb-4">
            Permission is granted to temporarily download one copy of the materials on Balika Madhya Vidyalaya's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Balika Madhya Vidyalaya at any time.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Disclaimer</h3>
          
          <p className="text-gray-700 mb-4">
            The materials on Balika Madhya Vidyalaya's website are provided on an 'as is' basis. Balika Madhya Vidyalaya makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <p className="text-gray-700 mb-4">
            Further, Balika Madhya Vidyalaya does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Limitations</h3>
          
          <p className="text-gray-700 mb-4">
            In no event shall Balika Madhya Vidyalaya or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Balika Madhya Vidyalaya's website, even if Balika Madhya Vidyalaya or a Balika Madhya Vidyalaya authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Accuracy of Materials</h3>
          
          <p className="text-gray-700 mb-4">
            The materials appearing on Balika Madhya Vidyalaya's website could include technical, typographical, or photographic errors. Balika Madhya Vidyalaya does not warrant that any of the materials on its website are accurate, complete, or current. Balika Madhya Vidyalaya may make changes to the materials contained on its website at any time without notice.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Links</h3>
          
          <p className="text-gray-700 mb-4">
            Balika Madhya Vidyalaya has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Balika Madhya Vidyalaya of the site. Use of any such linked website is at the user's own risk.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Modifications</h3>
          
          <p className="text-gray-700 mb-4">
            Balika Madhya Vidyalaya may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Governing Law</h3>
          
          <p className="text-gray-700 mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Bihar, India.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Contact Us</h3>
          
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          
          <p className="text-gray-700 mb-4">
            Balika Madhya Vidyalaya<br />
            Main Road, Near Railway Station<br />
            Kishanganj, Bihar - 855107<br />
            Email: legal@balikavidyalaya.edu<br />
            Phone: +91 9876543200
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsConditions;
