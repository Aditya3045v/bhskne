import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import PrincipalDesk from "./pages/PrincipalDesk";
import PrincipalTenure from "./pages/PrincipalTenure";
import TeachingStaff from "./pages/TeachingStaff";
import NonTeachingStaff from "./pages/NonTeachingStaff";
import Library from "./pages/Library";
import Laboratories from "./pages/Laboratories";
import Departments from "./pages/Departments";
import Courses from "./pages/Courses";
import AcademicCalendar from "./pages/AcademicCalendar";
import TimeTable from "./pages/TimeTable";
import Admission from "./pages/Admission";
import CLC from "./pages/CLC";
import Results from "./pages/Results";
import Scholarships from "./pages/Scholarships";
import PhotoGallery from "./pages/PhotoGallery";
import VideoGallery from "./pages/VideoGallery";
import Notices from "./pages/Notices";
import ExamResults from "./pages/ExamResults";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import RTI from "./pages/RTI";
import NAAC from "./pages/NAAC";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      suspense: true,
    },
  },
});

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Auth Routes */}
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                
                {/* Admin Route */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute requireAdmin>
                      <Admin />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Protected Routes */}
                <Route 
                  path="/admission" 
                  element={
                    <ProtectedRoute>
                      <Admission />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/results" 
                  element={
                    <ProtectedRoute>
                      <Results />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Public Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/principal-desk" element={<PrincipalDesk />} />
                <Route path="/principal-tenure" element={<PrincipalTenure />} />
                <Route path="/teaching-staff" element={<TeachingStaff />} />
                <Route path="/non-teaching-staff" element={<NonTeachingStaff />} />
                <Route path="/library" element={<Library />} />
                <Route path="/laboratories" element={<Laboratories />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/academic-calendar" element={<AcademicCalendar />} />
                <Route path="/time-table" element={<TimeTable />} />
                <Route path="/clc" element={<CLC />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/photo-gallery" element={<PhotoGallery />} />
                <Route path="/video-gallery" element={<VideoGallery />} />
                <Route path="/notices" element={<Notices />} />
                <Route path="/exam-results" element={<ExamResults />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/government-schemes" element={<GovernmentSchemes />} />
                <Route path="/rti" element={<RTI />} />
                <Route path="/naac" element={<NAAC />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
