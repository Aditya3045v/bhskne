import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, AlertTriangle } from "lucide-react";
import { ApplicationStatus } from "./ApplicationStatus";
import { StudentApplication } from "@/hooks/useApplications";

export const ApplicationsList: React.FC = () => {
  const [applications, setApplications] = useState<StudentApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchApplications = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('student_applications')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        
        setApplications(data || []);
      } catch (err: any) {
        console.error("Error fetching applications:", err);
        setError(err.message || "Failed to load applications");
      } finally {
        setLoading(false);
      }
    };
    
    fetchApplications();
  }, [user]);

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Authentication Required</CardTitle>
          <CardDescription>
            Please sign in to view your applications.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Application Status</CardTitle>
          <CardDescription>
            Loading your applications...
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
            Error Loading Applications
          </CardTitle>
          <CardDescription>
            {error}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (applications.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Application Status</CardTitle>
          <CardDescription>
            You haven't submitted any applications yet.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Applications</CardTitle>
        <CardDescription>
          View the status of your submitted applications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Application ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Academic Year</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Applied</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="font-medium">{app.id.slice(0, 8)}</TableCell>
                <TableCell>{app.student_name}</TableCell>
                <TableCell>Class {app.applying_for_class}</TableCell>
                <TableCell>{app.academic_year}</TableCell>
                <TableCell>
                  <ApplicationStatus status={app.status as 'pending' | 'approved' | 'rejected'} />
                </TableCell>
                <TableCell>{new Date(app.created_at).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedApplication(app.id)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px]">
                      <DialogHeader>
                        <DialogTitle>Application Details</DialogTitle>
                        <DialogDescription>
                          Application ID: {app.id.slice(0, 8)}
                        </DialogDescription>
                      </DialogHeader>
                      {selectedApplication === app.id && (
                        <div className="grid grid-cols-2 gap-4 py-4">
                          <div>
                            <h4 className="font-semibold mb-2">Personal Information</h4>
                            <p><strong>Name:</strong> {app.student_name}</p>
                            <p><strong>Gender:</strong> {app.gender}</p>
                            <p><strong>Date of Birth:</strong> {new Date(app.dob).toLocaleDateString()}</p>
                            <p><strong>Category:</strong> {app.category}</p>
                            <p><strong>Nationality:</strong> {app.nationality}</p>
                            <p><strong>Religion:</strong> {app.religion}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Contact Information</h4>
                            <p><strong>Address:</strong> {app.address}</p>
                            <p><strong>Mobile:</strong> {app.mobile}</p>
                            <p><strong>Email:</strong> {app.email}</p>
                            <p><strong>Emergency Contact:</strong> {app.emergency_contact}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Family Information</h4>
                            <p><strong>Father's Name:</strong> {app.father_name}</p>
                            <p><strong>Father's Occupation:</strong> {app.father_occupation}</p>
                            <p><strong>Mother's Name:</strong> {app.mother_name}</p>
                            <p><strong>Mother's Occupation:</strong> {app.mother_occupation}</p>
                            <p><strong>Mother's Mobile:</strong> {app.mother_mobile}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Educational Information</h4>
                            <p><strong>Previous School:</strong> {app.last_school}</p>
                            <p><strong>Previous Class:</strong> {app.last_class}</p>
                            <p><strong>Applying for Class:</strong> {app.applying_for_class}</p>
                            <p><strong>Academic Year:</strong> {app.academic_year}</p>
                          </div>
                          {app.medical_conditions && (
                            <div className="col-span-2">
                              <h4 className="font-semibold mb-2">Medical Conditions</h4>
                              <p>{app.medical_conditions}</p>
                            </div>
                          )}
                          <div className="col-span-2">
                            <h4 className="font-semibold mb-2">Documents</h4>
                            {app.photo_url && (
                              <p><a href={app.photo_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Photo</a></p>
                            )}
                            {app.birth_certificate_url && (
                              <p><a href={app.birth_certificate_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Birth Certificate</a></p>
                            )}
                            {app.marksheet_url && (
                              <p><a href={app.marksheet_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Marksheet</a></p>
                            )}
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
