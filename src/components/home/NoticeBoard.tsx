import React from 'react';
import { ImportantLinks } from './ImportantLinks';

const NoticeBoard = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Notices Section */}
          <div>
            <h3 className="text-xl font-bold text-school-blue-dark mb-4">Latest Notices</h3>
            <ul className="space-y-3">
              <li className="bg-white rounded-md shadow-sm p-4 notice-highlight transition-shadow duration-200">
                <a href="#" className="block hover:text-school-blue-dark">
                  <h4 className="font-medium text-gray-800">Regarding Holiday on 26th January</h4>
                  <p className="text-sm text-gray-600 mt-1">Published: January 20, 2024</p>
                </a>
              </li>
              <li className="bg-white rounded-md shadow-sm p-4 notice-highlight transition-shadow duration-200">
                <a href="#" className="block hover:text-school-blue-dark">
                  <h4 className="font-medium text-gray-800">PTM for Classes 6-8</h4>
                  <p className="text-sm text-gray-600 mt-1">Published: January 18, 2024</p>
                </a>
              </li>
              <li className="bg-white rounded-md shadow-sm p-4 notice-highlight transition-shadow duration-200">
                <a href="#" className="block hover:text-school-blue-dark">
                  <h4 className="font-medium text-gray-800">Annual Sports Day Announcement</h4>
                  <p className="text-sm text-gray-600 mt-1">Published: January 15, 2024</p>
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a href="/notices" className="text-school-blue hover:underline">View All Notices</a>
            </div>
          </div>
          
          {/* Important Links Section */}
          <div>
            <ImportantLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
