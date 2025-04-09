import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { format } from 'date-fns';
import type { StudentApplication } from '@/hooks/useApplications';

interface ApplicationDetailsProps {
  application: StudentApplication | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationDetails({ application, isOpen, onClose }: ApplicationDetailsProps) {
  if (!application) return null;

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PPP');
    } catch (error) {
      return dateString;
    }
  };

  const renderField = (label: string, value: string | null) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-sm text-gray-900">{value || 'Not provided'}</p>
    </div>
  );

  const renderDocument = (label: string, url: string | null) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          View Document
        </a>
      ) : (
        <p className="text-sm text-gray-900">Not uploaded</p>
      )}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Application Details</DialogTitle>
          <DialogDescription>
            Submitted on {formatDate(application.created_at)}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            {renderField('Student Name', application.student_name)}
            {renderField('Date of Birth', formatDate(application.dob))}
            {renderField('Gender', application.gender)}
            {renderField('Category', application.category)}
            {renderField('Nationality', application.nationality)}
            {renderField('Religion', application.religion)}
            {renderField('Address', application.address)}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            {renderField('Mobile', application.mobile)}
            {renderField('Email', application.email)}
            {renderField('Emergency Contact', application.emergency_contact)}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Parent Information</h3>
            {renderField('Father\'s Name', application.father_name)}
            {renderField('Father\'s Occupation', application.father_occupation)}
            {renderField('Mother\'s Name', application.mother_name)}
            {renderField('Mother\'s Occupation', application.mother_occupation)}
            {renderField('Mother\'s Mobile', application.mother_mobile)}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Academic Information</h3>
            {renderField('Last School', application.last_school)}
            {renderField('Last Class', application.last_class)}
            {renderField('Applying for Class', application.applying_for_class)}
            {renderField('Academic Year', application.academic_year)}
            {renderField('Medical Conditions', application.medical_conditions)}
          </div>

          <div className="col-span-full space-y-6">
            <h3 className="text-lg font-semibold">Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {renderDocument('Photo', application.photo_url)}
              {renderDocument('Birth Certificate', application.birth_certificate_url)}
              {renderDocument('Last Class Marksheet', application.marksheet_url)}
            </div>
          </div>

          <div className="col-span-full">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Application Status</p>
              <p className={
                application.status === 'approved'
                  ? 'text-green-600'
                  : application.status === 'rejected'
                  ? 'text-red-600'
                  : 'text-yellow-600'
              }>
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 