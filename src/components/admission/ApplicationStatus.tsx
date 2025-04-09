
import React from "react";
import { CheckCircle, Clock, AlertCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApplicationStatusProps {
  status: string;
  className?: string;
}

export const ApplicationStatus: React.FC<ApplicationStatusProps> = ({ 
  status, 
  className 
}) => {
  const getStatusConfig = () => {
    switch (status.toLowerCase()) {
      case 'approved':
        return {
          icon: <CheckCircle className="h-4 w-4" />,
          text: 'Approved',
          bgColor: 'bg-green-100',
          textColor: 'text-green-800'
        };
      case 'pending':
        return {
          icon: <Clock className="h-4 w-4" />,
          text: 'Under Review',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800'
        };
      case 'rejected':
        return {
          icon: <XCircle className="h-4 w-4" />,
          text: 'Rejected',
          bgColor: 'bg-red-100',
          textColor: 'text-red-800'
        };
      case 'in-process':
        return {
          icon: <AlertCircle className="h-4 w-4" />,
          text: 'In Process',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800'
        };
      default:
        return {
          icon: <Clock className="h-4 w-4" />,
          text: status,
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800'
        };
    }
  };

  const { icon, text, bgColor, textColor } = getStatusConfig();

  return (
    <div className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
      bgColor,
      textColor,
      className
    )}>
      {icon}
      <span className="ml-1">{text}</span>
    </div>
  );
};
