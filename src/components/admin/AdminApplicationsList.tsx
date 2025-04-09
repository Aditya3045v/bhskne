import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplicationStatus } from "../admission/ApplicationStatus";
import { Search, Eye, Filter, AlertTriangle, RefreshCw } from "lucide-react";
import { StudentApplication } from "@/hooks/useApplications";

export const AdminApplicationsList: React.FC = () => {
  const [applications, setApplications] = useState<StudentApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<StudentApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedAppDetails, setSelectedAppDetails] = useState<any>(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    if (!applications.length) return;
    
    let filtered = [...applications];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(app => 
        app.id.toLowerCase().includes(query) ||
        app.student_name.toLowerCase().includes(query) ||
        app.father_name.toLowerCase().includes(query) ||
        app.mother_name.toLowerCase().includes(query) ||
        app.applying_for_class.toLowerCase().includes(query)
      );
    }
    
    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(app => app.status === statusFilter);
    }
    
    setFilteredApplications(filtered);
  }, [searchQuery, statusFilter, applications]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('student_applications')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      setApplications(data || []);
      setFilteredApplications(data || []);
    } catch (err: any) {
      console.error("Error fetching applications:", err);
      toast({
        title: "Error",
        description: err.message || "Failed to load applications",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (id: string) => {
    setSelectedApplication(id);
    
    try {
      const { data, error } = await supabase
        .from('student_applications')
        .select('*')
        .eq('id', id)
        .single();
        
      if (error) throw error;
      
      setSelectedAppDetails(data);
    } catch (err: any) {
      console.error("Error fetching application details:", err);
      toast({
        title: "Error",
        description: err.message || "Failed to load application details",
        variant: "destructive",
      });
    }
  };

  const updateApplicationStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      setUpdatingStatus(true);
      
      const { error } = await supabase
        .from('student_applications')
        .update({ status })
        .eq('id', id);
        
      if (error) throw error;
      
      toast({
        title: "Status Updated",
        description: `Application status changed to ${status}`,
      });
      
      // Update local state
      setApplications(prev => prev.map(app => 
        app.id === id ? { ...app, status } : app
      ));
      
      if (selectedAppDetails) {
        setSelectedAppDetails({
          ...selectedAppDetails,
          status
        });
      }
    } catch (err: any) {
      console.error("Error updating application status:", err);
      toast({
        title: "Error",
        description: err.message || "Failed to update application status",
        variant: "destructive",
      });
    } finally {
      setUpdatingStatus(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Admission Applications</CardTitle>
          <CardDescription>
            Loading applications...
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Admission Applications</CardTitle>
            <CardDescription>
              Review and manage student admission applications
            </CardDescription>
          </div>
          <Button variant="outline" onClick={fetchApplications}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or application ID"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applications</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-process">In Process</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {filteredApplications.length === 0 ? (
          <div className="text-center py-10">
            <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium">No Applications Found</h3>
            <p className="text-muted-foreground mt-1">
              {searchQuery || statusFilter !== "all"
                ? "Try adjusting your search or filter criteria"
                : "There are no admission applications yet"}
            </p>
          </div>
        ) : (
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
              {filteredApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.id.slice(0, 8)}</TableCell>
                  <TableCell>{app.student_name}</TableCell>
                  <TableCell>Class {app.applying_for_class}</TableCell>
                  <TableCell>{app.academic_year}</TableCell>
                  <TableCell>
                    <ApplicationStatus status={app.status} />
                  </TableCell>
                  <TableCell>{new Date(app.created_at).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewDetails(app.id)}
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
                        
                        {selectedAppDetails && (
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
                            <div className="col-span-2 flex justify-end space-x-2 mt-4">
                              <Button
                                variant="destructive"
                                onClick={() => updateApplicationStatus(app.id, 'rejected')}
                                disabled={app.status === 'rejected'}
                              >
                                Reject
                              </Button>
                              <Button
                                variant="default"
                                onClick={() => updateApplicationStatus(app.id, 'approved')}
                                disabled={app.status === 'approved'}
                              >
                                Approve
                              </Button>
                            </div>
                          </div>
                        )}
                        
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setSelectedApplication(null)}>
                            Close
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

// Helper component for displaying details
const DetailItem: React.FC<{ 
  label: string; 
  value: string | number;
  capitalize?: boolean;
}> = ({ label, value, capitalize }) => (
  <div className="space-y-1">
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className={`text-sm font-medium ${capitalize ? 'capitalize' : ''}`}>{value || "N/A"}</p>
  </div>
);
