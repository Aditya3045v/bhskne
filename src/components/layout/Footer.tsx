import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
const Footer = () => {
  return <footer className="bg-school-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-school-blue-dark font-bold text-lg">+2 बालिका मध्य विद्यालय</span>
              </div>
              <h3 className="text-xl font-bold">Balika Madhya Vidyalaya</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Formerly Marwari College, Kishanganj. Providing quality education since 1968.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="hover:text-school-blue-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-school-blue-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-school-blue-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-school-blue-light transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white hover:underline">
                  About College
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-sm text-gray-300 hover:text-white hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-sm text-gray-300 hover:text-white hover:underline">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/notices" className="text-sm text-gray-300 hover:text-white hover:underline">
                  Notices
                </Link>
              </li>
              <li>
                <Link to="/photo-gallery" className="text-sm text-gray-300 hover:text-white hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies and Government Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Policies & Info</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-white hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-sm text-gray-300 hover:text-white hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-sm text-gray-300 hover:text-white hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/government-schemes" className="text-sm text-gray-300 hover:text-white hover:underline">
                  Government Schemes
                </Link>
              </li>
              <li>
                <Link to="/rti" className="text-sm text-gray-300 hover:text-white hover:underline">
                  RTI
                </Link>
              </li>
              <li>
                <Link to="/naac" className="text-sm text-gray-300 hover:text-white hover:underline">
                  NAAC
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-school-blue-light shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Balika Madhya Vidyalaya, College Road, Kishanganj, Bihar - 855107
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-school-blue-light shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-gray-300 hover:text-white hover:underline">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-school-blue-light shrink-0" />
                <a href="mailto:info@balikavidyalaya.edu" className="text-sm text-gray-300 hover:text-white hover:underline">
                  info@balikavidyalaya.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Balika Madhya Vidyalaya. All Rights Reserved.</p>
          <p className="mt-2">
            Developed and Maintained by IT Department, Balika Madhya Vidyalaya
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;