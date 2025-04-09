
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/AuthContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Admission from '@/pages/Admission';
import ApplicationsPage from '@/pages/applications';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import NotFound from '@/pages/NotFound';
import Departments from '@/pages/Departments';
import TeachingStaff from '@/pages/TeachingStaff';
import NonTeachingStaff from '@/pages/NonTeachingStaff';
import Courses from '@/pages/Courses';
import PrincipalDesk from '@/pages/PrincipalDesk';
import PrincipalTenure from '@/pages/PrincipalTenure';
import Laboratories from '@/pages/Laboratories';
import Library from '@/pages/Library';
import TimeTable from '@/pages/TimeTable';
import AcademicCalendar from '@/pages/AcademicCalendar';
import Scholarships from '@/pages/Scholarships';
import GovernmentSchemes from '@/pages/GovernmentSchemes';
import Results from '@/pages/Results';
import ExamResults from '@/pages/ExamResults';
import Notices from '@/pages/Notices';
import PhotoGallery from '@/pages/PhotoGallery';
import VideoGallery from '@/pages/VideoGallery';
import NAAC from '@/pages/NAAC';
import RTI from '@/pages/RTI';
import CLC from '@/pages/CLC';
import TermsConditions from '@/pages/TermsConditions';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import RefundPolicy from '@/pages/RefundPolicy';
import Admin from '@/pages/Admin';

import './App.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <ErrorBoundary>
            <main className="min-h-screen bg-gray-50">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/applications" element={<ApplicationsPage />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/teaching-staff" element={<TeachingStaff />} />
                <Route path="/non-teaching-staff" element={<NonTeachingStaff />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/principal-desk" element={<PrincipalDesk />} />
                <Route path="/principal-tenure" element={<PrincipalTenure />} />
                <Route path="/laboratories" element={<Laboratories />} />
                <Route path="/library" element={<Library />} />
                <Route path="/time-table" element={<TimeTable />} />
                <Route path="/academic-calendar" element={<AcademicCalendar />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/government-schemes" element={<GovernmentSchemes />} />
                <Route path="/results" element={<Results />} />
                <Route path="/exam-results" element={<ExamResults />} />
                <Route path="/notices" element={<Notices />} />
                <Route path="/photo-gallery" element={<PhotoGallery />} />
                <Route path="/video-gallery" element={<VideoGallery />} />
                <Route path="/naac" element={<NAAC />} />
                <Route path="/rti" element={<RTI />} />
                <Route path="/clc" element={<CLC />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Toaster />
          </ErrorBoundary>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
