
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as LucideLink, ExternalLink } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

interface LinkItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  category: string;
  priority?: number;
}

export const ImportantLinks: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchLinks() {
      try {
        setLoading(true);
        setError(null);
        
        const { data, error } = await supabase
          .from('important_links')
          .select('*')
          .eq('is_active', true)
          .order('priority', { ascending: false });

        if (error) throw error;
        
        setLinks(data as LinkItem[]);
      } catch (error: any) {
        console.error('Error fetching links:', error);
        setError(error.message || 'Failed to load important links');
        toast({
          title: 'Error fetching links',
          description: error.message,
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }

    fetchLinks();
  }, []);

  const categorizedLinks: Record<string, LinkItem[]> = {};
  
  links.forEach(link => {
    if (!categorizedLinks[link.category]) {
      categorizedLinks[link.category] = [];
    }
    categorizedLinks[link.category].push(link);
  });

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold text-school-blue-dark mb-4 flex items-center">
        <LucideLink className="h-5 w-5 mr-2" />
        Important Links
      </h3>
      
      {loading ? (
        <div className="py-8 text-center text-gray-500">Loading links...</div>
      ) : error ? (
        <div className="py-4 text-center">
          <p className="text-amber-600 mb-2">Temporarily unavailable</p>
          <p className="text-sm text-gray-500">Important links will be available soon.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {Object.entries(categorizedLinks).map(([category, categoryLinks]) => (
            <div key={category} className="space-y-2">
              <h4 className="font-medium text-gray-700">{category}</h4>
              <ul className="space-y-2">
                {categoryLinks.map(link => (
                  <li key={link.id} className="bg-white rounded-md shadow-sm p-3 hover:shadow-md transition-shadow duration-200">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:text-school-blue-dark"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium text-gray-800">{link.title}</h5>
                          {link.description && (
                            <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                          )}
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {Object.keys(categorizedLinks).length === 0 && !error && (
            <div className="text-center py-4 text-gray-500">No links available</div>
          )}
        </div>
      )}
    </div>
  );
};
