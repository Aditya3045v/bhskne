import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ApplicationForm } from '@/components/ApplicationForm';
import { ApplicationsList } from '@/components/ApplicationsList';
import { useAuth } from '@/hooks/useAuth';

export default function ApplicationsPage() {
  const [showForm, setShowForm] = useState(false);
  const { user, isAdmin } = useAuth();

  if (!user) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please Sign In</h1>
          <p className="text-gray-600">
            You need to be signed in to access the applications.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-8">
        {!isAdmin && (
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">School Applications</h1>
            <Button onClick={() => setShowForm(!showForm)}>
              {showForm ? 'View Applications' : 'New Application'}
            </Button>
          </div>
        )}

        {!isAdmin && showForm ? (
          <ApplicationForm />
        ) : (
          <ApplicationsList />
        )}
      </div>
    </div>
  );
} 