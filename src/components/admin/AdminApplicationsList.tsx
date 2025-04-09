import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
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

type Application = {
  id: string;
  application_id: string;
  full_name: string;
  gender: string;
  applying_for_class: string;
  academic_year: number;
  status: string;
  submitted_at: string;
}

export const AdminApplicationsList: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
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
        app.application_id.toLowerCase().includes(query) ||
        app.full_name.toLowerCase().includes(query)
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
        .from('applications')
        .select('id, application_id, full_name, gender, applying_for_class, academic_year, status, submitted_at')
        .order('submitted_at', { ascending: false });
        
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
        .from('applications')
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

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      setUpdatingStatus(true);
      
      const { error } = await supabase
        .from('applications')
        .update({ 
          status,
          updated_at: new Date().toISOString()
        })
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
                <TableHead>Gender</TableHead>
                <TableHead>Academic Year</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.application_id}</TableCell>
                  <TableCell>{app.full_name}</TableCell>
                  <TableCell>Class {app.applying_for_class}</TableCell>
                  <TableCell className="capitalize">{app.gender}</TableCell>
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
                          onClick={() => handleViewDetails(app.id)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Application Details</DialogTitle>
                          <DialogDescription>
                            Application ID: {app.application_id}
                          </DialogDescription>
                        </DialogHeader>
                        
                        {selectedAppDetails && (
                          <div className="py-4 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                            {/* Status Update Section */}
                            <div className="border rounded-md p-4 space-y-3">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">Current Status:</h3>
                                <ApplicationStatus status={selectedAppDetails.status} />
                              </div>
                              
                              <div className="flex items-center space-x-3">
                                <p className="text-sm font-medium">Update Status:</p>
                                <Select
                                  disabled={updatingStatus}
                                  onValueChange={(value) => updateApplicationStatus(selectedAppDetails.id, value)}
                                  value={selectedAppDetails.status}
                                >
                                  <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="in-process">In Process</SelectItem>
                                    <SelectItem value="approved">Approved</SelectItem>
                                    <SelectItem value="rejected">Rejected</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            
                            {/* Personal Details */}
                            <div className="space-y-2">
                              <h3 className="text-lg font-semibold border-b pb-2">Personal Details</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <DetailItem label="Full Name" value={selectedAppDetails.full_name} />
                                <DetailItem label="Gender" value={selectedAppDetails.gender} capitalize />
                                <DetailItem 
                                  label="Date of Birth" 
                                  value={new Date(selectedAppDetails.date_of_birth).toLocaleDateString()} 
                                />
                                <DetailItem label="Age" value={`${selectedAppDetails.age} years`} />
                                <DetailItem label="Category" value={selectedAppDetails.category} capitalize />
                                <DetailItem label="Religion" value={selectedAppDetails.religion || "Not specified"} />
                                <DetailItem label="Nationality" value={selectedAppDetails.nationality} />
                              </div>
                              
                              {selectedAppDetails.photo_url && (
                                <div className="mt-4">
                                  <p className="text-sm font-medium mb-2">Student Photo:</p>
                                  <a 
                                    href={selectedAppDetails.photo_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                  >
                                    View Photo
                                  </a>
                                </div>
                              )}
                            </div>
                            
                            {/* Contact Details */}
                            <div className="space-y-2">
                              <h3 className="text-lg font-semibold border-b pb-2">Contact Details</h3>
                              <div className="grid grid-cols-1 gap-2">
                                <DetailItem 
                                  label="Address" 
                                  value={`${selectedAppDetails.address_line1}${
                                    selectedAppDetails.address_line2 ? `, ${selectedAppDetails.address_line2}` : ''
                                  }, ${selectedAppDetails.city}, ${selectedAppDetails.state}, ${selectedAppDetails.pincode}`} 
                                />
                              </div>
                            </div>
                            
                            {/* Family Details */}
                            <div className="space-y-2">
                              <h3 className="text-lg font-semibold border-b pb-2">Family Details</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <DetailItem label="Father's Name" value={selectedAppDetails.father_name} />
                                <DetailItem label="Father's Occupation" value={selectedAppDetails.father_occupation} />
                                <DetailItem label="Father's Mobile" value={selectedAppDetails.father_mobile} />
                                <DetailItem label="Mother's Name" value={selectedAppDetails.mother_name} />
                                <DetailItem label="Mother's Occupation" value={selectedAppDetails.mother_occupation} />
                                <DetailItem label="Mother's Mobile" value={selectedAppDetails.mother_mobile} />
                                <DetailItem label="Emergency Contact" value={selectedAppDetails.emergency_contact} />
                              </div>
                            </div>
                            
                            {/* Educational Details */}
                            <div className="space-y-2">
                              <h3 className="text-lg font-semibold border-b pb-2">Educational Details</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <DetailItem label="Previous School" value={selectedAppDetails.last_school} />
                                <DetailItem label="Previous Class" value={selectedAppDetails.last_class} />
                                <DetailItem label="Applying for Class" value={selectedAppDetails.applying_for_class} />
                                <DetailItem 
                                  label="Academic Year" 
                                  value={`${selectedAppDetails.academic_year}-${selectedAppDetails.academic_year + 1}`} 
                                />
                              </div>
                              
                              <div className="mt-4 space-y-2">
                                {selectedAppDetails.birth_certificate_url && (
                                  <div>
                                    <p className="text-sm font-medium">Birth Certificate:</p>
                                    <a 
                                      href={selectedAppDetails.birth_certificate_url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:underline"
                                    >
                                      View Document
                                    </a>
                                  </div>
                                )}
                                
                                {selectedAppDetails.marksheet_url && (
                                  <div>
                                    <p className="text-sm font-medium">Previous Marksheet:</p>
                                    <a 
                                      href={selectedAppDetails.marksheet_url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:underline"
                                    >
                                      View Document
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            {/* Other Details */}
                            {selectedAppDetails.medical_conditions && (
                              <div className="space-y-2">
                                <h3 className="text-lg font-semibold border-b pb-2">Medical Information</h3>
                                <p className="whitespace-pre-wrap text-sm">
                                  {selectedAppDetails.medical_conditions}
                                </p>
                              </div>
                            )}
                            
                            {/* Application Timeline */}
                            <div className="space-y-2">
                              <h3 className="text-lg font-semibold border-b pb-2">Application Timeline</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <DetailItem 
                                  label="Submitted On" 
                                  value={new Date(selectedAppDetails.submitted_at).toLocaleString()} 
                                />
                                <DetailItem 
                                  label="Last Updated" 
                                  value={new Date(selectedAppDetails.updated_at).toLocaleString()} 
                                />
                              </div>
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
