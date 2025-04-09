
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";

const RefundPolicy = () => {
  return (
    <PageLayout 
      title="Refund Policy" 
      description="Our policy regarding refunds and cancellations"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-school-blue-dark mb-4">Refund Policy</h2>
          <Separator className="mb-6" />
          
          <p className="text-gray-700 mb-4">
            Last updated: June 1, 2023
          </p>
          
          <p className="text-gray-700 mb-4">
            Balika Madhya Vidyalaya is committed to ensuring fair and transparent fee structures and refund policies. This document outlines our refund policy for various fees and payments made to the institution.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Admission Fee Refund</h3>
          
          <p className="text-gray-700 mb-4">
            The admission fee is non-refundable under normal circumstances. However, in the following exceptional cases, a refund may be considered:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>If a student is unable to join the institution due to medical reasons (supported by valid medical certificates)</li>
            <li>If a student has paid the fee but is unable to secure admission due to not meeting the eligibility criteria</li>
            <li>If the institution is unable to provide admission despite collecting the fee</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            In these cases, the admission fee may be refunded after deducting an administrative charge of 10%.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Tuition Fee Refund</h3>
          
          <p className="text-gray-700 mb-4">
            Refund of tuition fees will be governed by the following schedule:
          </p>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Withdrawal Timeframe</th>
                  <th className="border border-gray-300 px-4 py-2">Refund Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Before commencement of classes</td>
                  <td className="border border-gray-300 px-4 py-2">90% of tuition fee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Within 15 days of commencement of classes</td>
                  <td className="border border-gray-300 px-4 py-2">80% of tuition fee</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">16-30 days after commencement of classes</td>
                  <td className="border border-gray-300 px-4 py-2">50% of tuition fee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">After 30 days of commencement of classes</td>
                  <td className="border border-gray-300 px-4 py-2">No refund</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Hostel Fee Refund</h3>
          
          <p className="text-gray-700 mb-4">
            Refund of hostel fees will be governed by the following schedule:
          </p>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Withdrawal Timeframe</th>
                  <th className="border border-gray-300 px-4 py-2">Refund Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Before occupying the hostel</td>
                  <td className="border border-gray-300 px-4 py-2">90% of hostel fee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Within 15 days of occupying the hostel</td>
                  <td className="border border-gray-300 px-4 py-2">70% of hostel fee</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">16-30 days after occupying the hostel</td>
                  <td className="border border-gray-300 px-4 py-2">40% of hostel fee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">After 30 days of occupying the hostel</td>
                  <td className="border border-gray-300 px-4 py-2">No refund</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Examination Fee Refund</h3>
          
          <p className="text-gray-700 mb-4">
            Examination fees are generally non-refundable. However, in case a student is unable to appear for an examination due to medical reasons (supported by valid medical certificates), 50% of the examination fee may be refunded or adjusted against future examination fees.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Miscellaneous Fee Refund</h3>
          
          <p className="text-gray-700 mb-4">
            Fees for miscellaneous services such as library, transportation, etc., will be refunded on a pro-rata basis for the unused period.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Refund Process</h3>
          
          <p className="text-gray-700 mb-4">
            To request a refund, students must:
          </p>
          
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <li>Submit a written application to the Accounts Office stating the reason for withdrawal/refund</li>
            <li>Attach all relevant supporting documents</li>
            <li>Submit the original fee receipt</li>
            <li>Provide bank account details for refund transfer</li>
          </ol>
          
          <p className="text-gray-700 mb-4">
            The refund process typically takes 15-30 working days from the date of receiving a complete application with all required documents.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Mode of Refund</h3>
          
          <p className="text-gray-700 mb-4">
            All refunds will be processed through bank transfer to the bank account provided by the student/parent in the refund application form. Cash refunds are not permitted.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Force Majeure</h3>
          
          <p className="text-gray-700 mb-4">
            In case of closure of the institution due to force majeure events (natural disasters, pandemics, government orders, etc.), the institution will follow the guidelines issued by relevant regulatory authorities regarding fee refunds.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Changes to This Policy</h3>
          
          <p className="text-gray-700 mb-4">
            Balika Madhya Vidyalaya reserves the right to modify this refund policy at any time. Any changes will be effective immediately upon posting on the website. Students are advised to regularly check for updates.
          </p>
          
          <h3 className="text-lg font-semibold text-school-blue-dark mt-6 mb-3">Contact Us</h3>
          
          <p className="text-gray-700 mb-4">
            For any queries regarding the refund policy, please contact:
          </p>
          
          <p className="text-gray-700 mb-4">
            Accounts Office<br />
            Balika Madhya Vidyalaya<br />
            Main Road, Near Railway Station<br />
            Kishanganj, Bihar - 855107<br />
            Email: accounts@balikavidyalaya.edu<br />
            Phone: +91 9876543218
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default RefundPolicy;
