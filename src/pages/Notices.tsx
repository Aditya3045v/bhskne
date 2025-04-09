import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Calendar, 
  Search, 
  Filter, 
  Download, 
  Clock,
  CheckSquare, 
  AlertCircle, 
  CalendarDays, 
  BookOpen, 
  Megaphone 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Notices = () => {
  return (
    <PageLayout title="Notices" description="Important notices and announcements from Balika Madhya Vidyalaya">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="academics">Academics</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="exams">Exams</TabsTrigger>
                <TabsTrigger value="others">Others</TabsTrigger>
              </TabsList>
              <div className="relative max-w-md w-full">
                <Input type="search" placeholder="Search notices..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>
            <Separator className="my-4" />
            <TabsContent value="all" className="space-y-4">
              {/* Sample Notice Items - Replace with actual data */}
              <NoticeItem 
                title="Regarding the upcoming Annual Sports Day"
                category="events"
                date="2024-03-15"
                description="The Annual Sports Day will be held on March 22nd. All students are encouraged to participate."
              />
              <NoticeItem 
                title="Holiday on account of Holi"
                category="others"
                date="2024-03-10"
                description="The school will remain closed on March 18th for Holi."
              />
              <NoticeItem 
                title="Revised Exam Schedule for Class X"
                category="exams"
                date="2024-03-05"
                description="The exam schedule for Class X has been revised. Please check the updated schedule."
              />
              {/* Add more NoticeItem components here */}
            </TabsContent>
            {/* Add TabsContent for other categories (academics, events, exams, others) */}
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

interface NoticeItemProps {
  title: string;
  category: string;
  date: string;
  description: string;
}

const NoticeItem: React.FC<NoticeItemProps> = ({ title, category, date, description }) => {
  const categoryIcons: { [key: string]: React.ReactNode } = {
    academics: <BookOpen className="mr-2 h-4 w-4 text-blue-500" />,
    events: <Megaphone className="mr-2 h-4 w-4 text-orange-500" />,
    exams: <CheckSquare className="mr-2 h-4 w-4 text-purple-500" />,
    others: <FileText className="mr-2 h-4 w-4 text-gray-500" />,
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <div className="flex items-center mb-2">
        {categoryIcons[category] || <FileText className="mr-2 h-4 w-4 text-gray-500" />}
        <Badge variant="secondary">{category.toUpperCase()}</Badge>
        <span className="ml-auto text-sm text-gray-500">
          <CalendarDays className="mr-1 h-4 w-4 inline-block" />
          {date}
        </span>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {/* Add a "Read More" link if needed */}
    </div>
  );
};

export default Notices;
