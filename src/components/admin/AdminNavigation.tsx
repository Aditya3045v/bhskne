
import React from "react";
import { cn } from "@/lib/utils";
import { Link, LinkIcon, FileText, Users, MessageSquare, Settings } from "lucide-react";

interface AdminNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const AdminNavigation: React.FC<AdminNavigationProps> = ({ 
  activeTab, 
  setActiveTab 
}) => {
  const navItems = [
    {
      id: "links",
      name: "Important Links",
      icon: <Link className="h-5 w-5" />,
    },
    {
      id: "applications",
      name: "Admission Applications",
      icon: <FileText className="h-5 w-5" />,
    },
  ];
  
  return (
    <div className="space-y-4">
      <div className="font-medium text-sm text-muted-foreground mb-2">
        Admin Dashboard
      </div>
      <nav className="grid gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
              activeTab === item.id
                ? "bg-school-blue text-white"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};
