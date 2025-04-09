import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useApplications } from '@/hooks/useApplications';
import { useAuth } from '@/hooks/useAuth';
import type { StudentApplication } from '@/hooks/useApplications';
import { ApplicationDetails } from '@/components/ApplicationDetails';

export function ApplicationsList() {
  const [applications, setApplications] = useState<StudentApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<StudentApplication | null>(null);
  const { getApplications, updateApplicationStatus } = useApplications();
  const { isAdmin } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await getApplications();
      if (data) {
        setApplications(data);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: StudentApplication['status']) => {
    try {
      await updateApplicationStatus(id, status);
      await fetchApplications(); // Refresh the list
      toast({
        title: "Success",
        description: "Application status updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update application status",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading applications...</div>;
  }

  if (!applications.length) {
    return <div>No applications found.</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        {isAdmin ? 'All Applications' : 'Your Applications'}
      </h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Academic Year</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>{application.student_name}</TableCell>
                <TableCell>{application.applying_for_class}</TableCell>
                <TableCell>{application.academic_year}</TableCell>
                <TableCell>
                  {isAdmin ? (
                    <Select
                      defaultValue={application.status}
                      onValueChange={(value) => 
                        handleStatusChange(
                          application.id,
                          value as StudentApplication['status']
                        )
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <span className={
                      application.status === 'approved'
                        ? 'text-green-600'
                        : application.status === 'rejected'
                        ? 'text-red-600'
                        : 'text-yellow-600'
                    }>
                      {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedApplication(application)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ApplicationDetails
        application={selectedApplication}
        isOpen={!!selectedApplication}
        onClose={() => setSelectedApplication(null)}
      />
    </div>
  );
} 