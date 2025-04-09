import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Home, Info, Users, Building2, GraduationCap, UserSquare, Image, Bell, Contact, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import AuthButtons from "@/components/AuthButtons";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useIsMobile } from "@/hooks/use-mobile";

type MenuItem = {
  label: string;
  href: string;
};

type MenuSection = {
  label: string;
  icon: React.ReactNode;
  items: MenuItem[];
};

const menuItems: MenuSection[] = [{
  label: "About",
  icon: <Info className="h-4 w-4" />,
  items: [{
    label: "About Us",
    href: "/about"
  }, {
    label: "Principal's Desk",
    href: "/principal-desk"
  }, {
    label: "Principal Tenure",
    href: "/principal-tenure"
  }]
}, {
  label: "Administration",
  icon: <Users className="h-4 w-4" />,
  items: [{
    label: "Teaching Staff",
    href: "/teaching-staff"
  }, {
    label: "Non-Teaching Staff",
    href: "/non-teaching-staff"
  }]
}, {
  label: "Infrastructure",
  icon: <Building2 className="h-4 w-4" />,
  items: [{
    label: "Library",
    href: "/library"
  }, {
    label: "Laboratories",
    href: "/laboratories"
  }]
}, {
  label: "Academics",
  icon: <GraduationCap className="h-4 w-4" />,
  items: [{
    label: "Departments",
    href: "/departments"
  }, {
    label: "Courses",
    href: "/courses"
  }, {
    label: "Academic Calendar",
    href: "/academic-calendar"
  }, {
    label: "Time Table",
    href: "/time-table"
  }]
}, {
  label: "Student Corner",
  icon: <UserSquare className="h-4 w-4" />,
  items: [{
    label: "CLC",
    href: "/clc"
  }, {
    label: "Results",
    href: "/results"
  }, {
    label: "Scholarships",
    href: "/scholarships"
  }]
}, {
  label: "Gallery",
  icon: <Image className="h-4 w-4" />,
  items: [{
    label: "Photo Gallery",
    href: "/photo-gallery"
  }, {
    label: "Video Gallery",
    href: "/video-gallery"
  }]
}, {
  label: "Notice Board",
  icon: <Bell className="h-4 w-4" />,
  items: [{
    label: "Notices",
    href: "/notices"
  }, {
    label: "Exam Results",
    href: "/exam-results"
  }]
}, {
  label: "Contact",
  icon: <Contact className="h-4 w-4" />,
  items: [{
    label: "Contact Us",
    href: "/contact"
  }]
}];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();
  const isMobile = useIsMobile();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false);
        return;
      }
      try {
        const { data, error } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        if (error) throw error;
        setIsAdmin(data?.role === 'admin');
      } catch (err) {
        console.error("Error checking admin status:", err);
        setIsAdmin(false);
      }
    };
    checkAdminStatus();
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300", 
      scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md")}>
      
      {/* Title Bar with School Name, Logo and School Codes */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* School Logo and Name */}
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center">
                <img src="/lovable-uploads/d989607e-e409-4385-8b22-f2e6db658098.png" alt="Balika Madhya Vidyalaya Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <h1 className="text-center md:text-left font-semibold text-sm md:text-xl">बालिका उच्च विद्यालय - डूमरिया, किशनगंज, बिहार</h1>
              </div>
            </div>
            
            {/* School Codes */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2 mt-2 md:mt-0 text-xs md:text-sm">
              <div className="bg-gray-100 px-2 py-1 rounded">
                <span className="font-semibold">UDISE:</span> 10082109404
              </div>
              <div className="bg-gray-100 px-2 py-1 rounded">
                <span className="font-semibold">INTER CODE:</span> 93036
              </div>
              <div className="bg-gray-100 px-2 py-1 rounded">
                <span className="font-semibold">MATRIC CODE:</span> 13009
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <div className="bg-school-blue-dark py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-white hover:bg-school-blue-light rounded-md flex items-center" onClick={closeDropdowns}>
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              
              {menuItems.map((section, index) => (
                <div key={index} className="relative group">
                  <button 
                    className="px-3 py-2 text-sm font-medium text-white hover:bg-school-blue-light rounded-md flex items-center" 
                    onClick={() => toggleDropdown(index)} 
                    onKeyDown={e => {
                      if (e.key === "Escape") closeDropdowns();
                    }}
                  >
                    {section.icon}
                    <span className="ml-1">{section.label}</span>
                    <ChevronDown className="h-4 w-4 ml-0.5" />
                  </button>

                  {activeDropdown === index && (
                    <div 
                      className="dropdown-menu absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50" 
                      onMouseLeave={closeDropdowns}
                    >
                      {section.items.map((item, itemIndex) => (
                        <Link 
                          key={itemIndex} 
                          to={item.href} 
                          onClick={closeDropdowns} 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-school-gray-light hover:text-school-blue-dark font-medium"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link to="/admission">
                <Button variant="default" className="bg-white hover:bg-gray-100 text-school-blue-dark">
                  Apply for Admission
                </Button>
              </Link>
                
              {isAdmin && (
                <Link to="/admin" className="px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md flex items-center ml-2" onClick={closeDropdowns}>
                  <Shield className="h-4 w-4 mr-1" />
                  Admin
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <Link to="/" className="mr-2 text-white">
                <Home className="h-5 w-5" />
              </Link>
              <button 
                className="p-2 rounded-md text-white" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            
            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-2 max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-school-gray-light rounded-md flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
              
              <Link to="/admission" className="bg-school-blue text-white px-3 py-2 text-sm font-medium rounded-md flex items-center justify-center" onClick={() => setMobileMenuOpen(false)}>
                Apply for Admission
              </Link>
              
              {isAdmin && (
                <Link to="/admin" className="px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                </Link>
              )}
              
              {menuItems.map((section, index) => (
                <div key={index} className="relative">
                  <button 
                    className="w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-school-gray-light rounded-md flex items-center justify-between" 
                    onClick={() => toggleDropdown(index)}
                  >
                    <div className="flex items-center">
                      {section.icon}
                      <span className="ml-2">{section.label}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  </button>

                  {activeDropdown === index && (
                    <div className="pl-10 py-1 space-y-1 border-l-2 border-school-blue-light ml-4 mt-1">
                      {section.items.map((item, itemIndex) => (
                        <Link 
                          key={itemIndex} 
                          to={item.href} 
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-school-gray-light rounded-md" 
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex space-x-2 pt-2 border-t border-gray-100 mt-2">
                <AuthButtons />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
