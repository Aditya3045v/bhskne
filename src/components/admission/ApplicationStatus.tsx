
import React, { useEffect, useState } from 'react';
import { useApplications, StudentApplication } from '@/hooks/useApplications';
import { Loader2, CheckCircle, XCircle, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface ApplicationStatusProps {
  status: 'pending' | 'approved' | 'rejected';
  className?: string;
}

export const ApplicationStatus: React.FC<ApplicationStatusProps> = ({ status, className }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'approved':
        return {
          icon: CheckCircle,
          text: 'Approved',
          color: 'text-green-500',
          bgColor: 'bg-green-50',
        };
      case 'rejected':
        return {
          icon: XCircle,
          text: 'Rejected',
          color: 'text-red-500',
          bgColor: 'bg-red-50',
        };
      default:
        return {
          icon: Clock,
          text: 'Under Review',
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-50',
        };
    }
  };

  const { icon: Icon, text, color, bgColor } = getStatusConfig();

  return (
    <div className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium",
      bgColor,
      color,
      className
    )}>
      <Icon className="w-4 h-4 mr-1" />
      {text}
    </div>
  );
};

export const ApplicationStatusComponent = () => {
  const { getApplications, isLoading } = useApplications();
  const [applications, setApplications] = useState<StudentApplication[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const data = await getApplications();
      if (data) {
        setApplications(data);
      }
    };

    fetchApplications();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">No applications found. Please submit an application first.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4">
      {applications.map((application) => (
        <div
          key={application.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <ApplicationStatus status={application.status} />
            </div>
            <span className="text-sm text-gray-500">
              Submitted on: {format(new Date(application.created_at), 'dd MMM yyyy')}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Student Name</p>
              <p className="font-medium">{application.student_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Father's Name</p>
              <p className="font-medium">{application.father_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Mother's Name</p>
              <p className="font-medium">{application.mother_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Applying for Class</p>
              <p className="font-medium">{application.applying_for_class}</p>
            </div>
          </div>

          {application.status === 'approved' && (
            <div className="mt-4">
              <button
                onClick={() => window.print()}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
              >
                Print Application
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
