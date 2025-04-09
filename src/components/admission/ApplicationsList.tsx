
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
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
import { Eye, AlertTriangle, Clock, CheckCircle, XCircle } from "lucide-react";
import { ApplicationStatus } from "./ApplicationStatus";

type Application = {
  id: string;
  application_id: string;
  full_name: string;
  applying_for_class: string;
  academic_year: number;
  status: string;
  submitted_at: string;
}

export const ApplicationsList: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchApplications = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        
        // Get student_applications links
        const { data: linkData, error: linkError } = await supabase
          .from('student_applications')
          .select('application_id')
          .eq('user_id', user.id);
          
        if (linkError) throw linkError;
        
        if (linkData.length === 0) {
          setApplications([]);
          setLoading(false);
          return;
        }
        
        // Get application details
        const applicationIds = linkData.map(link => link.application_id);
        
        const { data: appData, error: appError } = await supabase
          .from('applications')
          .select('id, application_id, full_name, applying_for_class, academic_year, status, submitted_at')
          .in('id', applicationIds)
          .order('submitted_at', { ascending: false });
          
        if (appError) throw appError;
        
        setApplications(appData);
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
                <TableCell className="font-medium">{app.application_id}</TableCell>
                <TableCell>{app.full_name}</TableCell>
                <TableCell>Class {app.applying_for_class}</TableCell>
                <TableCell>{app.academic_year}-{app.academic_year + 1}</TableCell>
                <TableCell>
                  <ApplicationStatus status={app.status} />
                </TableCell>
                <TableCell>{new Date(app.submitted_at).toLocaleDateString()}</TableCell>
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
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Application Details</DialogTitle>
                        <DialogDescription>
                          Application ID: {app.application_id}
                        </DialogDescription>
                      </DialogHeader>
                      {selectedApplication === app.id && (
                        <ApplicationDetails id={app.id} />
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

const ApplicationDetails: React.FC<{ id: string }> = ({ id }) => {
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('applications')
          .select('*')
          .eq('id', id)
          .single();
          
        if (error) throw error;
        
        setDetails(data);
      } catch (err) {
        console.error("Error fetching application details:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDetails();
  }, [id]);
  
  if (loading) {
    return <div className="py-4">Loading details...</div>;
  }
  
  if (!details) {
    return <div className="py-4">Failed to load application details.</div>;
  }
  
  return (
    <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Status</h3>
        <ApplicationStatus status={details.status} />
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Personal Details</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm">
            <p className="text-muted-foreground">Name</p>
            <p>{details.full_name}</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Gender</p>
            <p>{details.gender}</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Date of Birth</p>
            <p>{new Date(details.date_of_birth).toLocaleDateString()}</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Age</p>
            <p>{details.age} years</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Category</p>
            <p>{details.category}</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Nationality</p>
            <p>{details.nationality}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Contact Details</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm col-span-2">
            <p className="text-muted-foreground">Address</p>
            <p>{details.address_line1}</p>
            {details.address_line2 && <p>{details.address_line2}</p>}
            <p>{details.city}, {details.state}, {details.pincode}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Educational Details</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm">
            <p className="text-muted-foreground">Previous School</p>
            <p>{details.last_school}</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Previous Class</p>
            <p>{details.last_class}</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Applying for Class</p>
            <p>{details.applying_for_class}</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Academic Year</p>
            <p>{details.academic_year}-{details.academic_year + 1}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Application Timeline</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm">
            <p className="text-muted-foreground">Submitted On</p>
            <p>{new Date(details.submitted_at).toLocaleString()}</p>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Last Updated</p>
            <p>{new Date(details.updated_at).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
