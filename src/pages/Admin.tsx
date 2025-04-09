import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import PageLayout from "@/components/layout/PageLayout";
import { AdminNavigation } from "@/components/admin/AdminNavigation";
import { AdminApplicationsList } from "@/components/admin/AdminApplicationsList";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Link, Plus, Pencil, Trash, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LinkItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  category: string;
  priority?: number;
  is_active?: boolean;
}

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("links");
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');
  const [currentLink, setCurrentLink] = useState<LinkItem | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    category: 'General',
    priority: 0,
    is_active: true
  });
  
  const categories = [
    "General",
    "Academics",
    "Admission",
    "Examination",
    "Student Resources",
    "NAAC",
    "Other"
  ];
  
  // Check if user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        navigate("/sign-in");
        return;
      }
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
          
        if (error) throw error;
        
        const isUserAdmin = data?.role === 'admin';
        setIsAdmin(isUserAdmin);
        
        if (!isUserAdmin) {
          navigate("/");
          toast({
            title: "Access Denied",
            description: "You don't have permission to access the admin area.",
            variant: "destructive",
          });
        }
      } catch (err) {
        console.error("Error checking admin status:", err);
        setIsAdmin(false);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    
    checkAdminStatus();
  }, [user, navigate]);
  
  // Fetch links
  useEffect(() => {
    if (isAdmin && activeTab === "links") {
      fetchLinks();
    }
  }, [isAdmin, activeTab]);
  
  const fetchLinks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('important_links')
        .select('*')
        .order('priority', { ascending: false });
        
      if (error) throw error;
      
      setLinks(data as LinkItem[]);
    } catch (error: any) {
      toast({
        title: "Error fetching links",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleAddLink = () => {
    setDialogMode('add');
    setFormData({
      title: '',
      url: '',
      description: '',
      category: 'General',
      priority: 0,
      is_active: true
    });
  };
  
  const handleEditLink = (link: LinkItem) => {
    setDialogMode('edit');
    setCurrentLink(link);
    setFormData({
      title: link.title,
      url: link.url,
      description: link.description || '',
      category: link.category,
      priority: link.priority || 0,
      is_active: link.is_active !== false
    });
  };
  
  const handleDeleteLink = async (id: string) => {
    if (!confirm("Are you sure you want to delete this link?")) return;
    
    try {
      const { error } = await supabase
        .from('important_links')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      toast({
        title: "Link deleted",
        description: "The link has been successfully deleted.",
      });
      
      // Update local state
      setLinks(links.filter(link => link.id !== id));
    } catch (error: any) {
      toast({
        title: "Error deleting link",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const handleSubmit = async () => {
    try {
      if (dialogMode === 'add') {
        const { data, error } = await supabase
          .from('important_links')
          .insert({
            title: formData.title,
            url: formData.url,
            description: formData.description || null,
            category: formData.category,
            priority: formData.priority,
            is_active: formData.is_active
          })
          .select()
          .single();
          
        if (error) throw error;
        
        toast({
          title: "Link added",
          description: "The link has been successfully added.",
        });
        
        setLinks([data as LinkItem, ...links]);
      } else if (dialogMode === 'edit' && currentLink) {
        const { error } = await supabase
          .from('important_links')
          .update({
            title: formData.title,
            url: formData.url,
            description: formData.description || null,
            category: formData.category,
            priority: formData.priority,
            is_active: formData.is_active
          })
          .eq('id', currentLink.id);
          
        if (error) throw error;
        
        toast({
          title: "Link updated",
          description: "The link has been successfully updated.",
        });
        
        // Update local state
        const updatedLinks = links.map(link => 
          link.id === currentLink.id 
            ? { ...link, ...formData } 
            : link
        );
        setLinks(updatedLinks);
      }
    } catch (error: any) {
      toast({
        title: `Error ${dialogMode === 'add' ? 'adding' : 'updating'} link`,
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  if (loading) {
    return (
      <PageLayout title="Admin Dashboard" description="Manage your school website">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <p className="text-lg text-gray-500">Loading...</p>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
  
  if (!user || !isAdmin) {
    return null; // User is redirected by useEffect
  }
  
  return (
    <PageLayout title="Admin Dashboard" description="Manage your school website">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
          {/* Sidebar */}
          <div className="md:border-r pr-6">
            <AdminNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          
          {/* Main Content */}
          <div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="links" className="mt-0">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-2xl">Important Links</CardTitle>
                      <CardDescription>
                        Manage important links that appear on the website.
                      </CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={handleAddLink}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add New Link
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            {dialogMode === 'add' ? 'Add New Link' : 'Edit Link'}
                          </DialogTitle>
                          <DialogDescription>
                            Fill in the details to {dialogMode === 'add' ? 'add a new link' : 'update the link'}.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                              id="title"
                              value={formData.title}
                              onChange={(e) => setFormData({...formData, title: e.target.value})}
                              placeholder="Enter link title"
                            />
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="url">URL</Label>
                            <Input
                              id="url"
                              value={formData.url}
                              onChange={(e) => setFormData({...formData, url: e.target.value})}
                              placeholder="https://example.com"
                            />
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="description">Description (Optional)</Label>
                            <Textarea
                              id="description"
                              value={formData.description}
                              onChange={(e) => setFormData({...formData, description: e.target.value})}
                              placeholder="Brief description of the link"
                            />
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="category">Category</Label>
                            <Select
                              value={formData.category}
                              onValueChange={(value) => setFormData({...formData, category: value})}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="priority">Priority</Label>
                            <Input
                              id="priority"
                              type="number"
                              value={formData.priority.toString()}
                              onChange={(e) => setFormData({...formData, priority: parseInt(e.target.value) || 0})}
                            />
                            <p className="text-xs text-muted-foreground">
                              Higher numbers will appear first
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="is_active"
                              checked={formData.is_active}
                              onCheckedChange={(checked) => setFormData({...formData, is_active: checked})}
                            />
                            <Label htmlFor="is_active">Active</Label>
                          </div>
                        </div>
                        
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button type="submit" onClick={handleSubmit}>
                              {dialogMode === 'add' ? 'Add Link' : 'Update Link'}
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-8 p-4 bg-muted text-muted-foreground text-sm font-medium">
                        <div className="col-span-3">Title</div>
                        <div className="col-span-1">Category</div>
                        <div className="col-span-1">Priority</div>
                        <div className="col-span-1">Status</div>
                        <div className="col-span-2 text-right">Actions</div>
                      </div>
                      
                      {links.length === 0 ? (
                        <div className="p-6 text-center text-muted-foreground">
                          No links found. Add your first link using the button above.
                        </div>
                      ) : (
                        <div className="divide-y">
                          {links.map((link) => (
                            <div key={link.id} className="grid grid-cols-8 p-4 items-center">
                              <div className="col-span-3 font-medium">
                                <div className="flex items-center space-x-2">
                                  <Link className="h-4 w-4 text-muted-foreground" />
                                  <div>
                                    <div>{link.title}</div>
                                    <a 
                                      href={link.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="text-xs text-muted-foreground hover:underline flex items-center"
                                    >
                                      {link.url.substring(0, 30)}
                                      {link.url.length > 30 ? '...' : ''}
                                      <ExternalLink className="h-3 w-3 ml-1" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-span-1">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {link.category}
                                </span>
                              </div>
                              <div className="col-span-1">{link.priority || 0}</div>
                              <div className="col-span-1">
                                {link.is_active !== false ? (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Active
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    Inactive
                                  </span>
                                )}
                              </div>
                              <div className="col-span-2 flex justify-end space-x-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm" onClick={() => handleEditLink(link)}>
                                      <Pencil className="h-4 w-4 mr-1" />
                                      Edit
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    {/* Same content as Add dialog, but with edit values */}
                                    <DialogHeader>
                                      <DialogTitle>
                                        Edit Link
                                      </DialogTitle>
                                      <DialogDescription>
                                        Update the link details.
                                      </DialogDescription>
                                    </DialogHeader>
                                    
                                    {/* Same form fields as above */}
                                    <div className="grid gap-4 py-4">
                                      {/* ...form fields... */}
                                    </div>
                                    
                                    <DialogFooter>
                                      <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                      </DialogClose>
                                      <DialogClose asChild>
                                        <Button type="submit" onClick={handleSubmit}>
                                          Update Link
                                        </Button>
                                      </DialogClose>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() => handleDeleteLink(link.id)}
                                >
                                  <Trash className="h-4 w-4 mr-1" />
                                  Delete
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="applications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Admission Applications</CardTitle>
                    <CardDescription>
                      View and manage student admission applications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AdminApplicationsList />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Admin;
