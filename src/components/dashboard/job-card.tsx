import { formatDate } from '@/lib/utils';
import { Calendar, FileText, Link, Users } from 'lucide-react';
import { Button } from '../ui/button';

interface JobCardProps {
  company: string;
  position: string;
  deadline: Date;
  matchRate: number;
  connections: number;
  requiredDocs: Array<'cv' | 'cover_letter' | 'recommendations'>;
  status: 'not_started' | 'in_progress' | 'submitted' | 'interview';
  notes?: string;
  docsLink?: string;
}

const statusColors = {
  not_started: 'bg-gray-100',
  in_progress: 'bg-blue-100',
  submitted: 'bg-green-100',
  interview: 'bg-purple-100',
};

const statusLabels = {
  not_started: 'Not Started',
  in_progress: 'In Progress',
  submitted: 'Submitted',
  interview: 'Interview',
};

export function JobCard({
  company,
  position,
  deadline,
  matchRate,
  connections,
  requiredDocs,
  status,
  notes,
  docsLink,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{position}</h3>
          <p className="text-gray-600">{company}</p>
        </div>
        <div className={`px-3 py-1 rounded-full ${statusColors[status]}`}>
          {statusLabels[status]}
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {formatDate(deadline)}
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {connections} connections
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {requiredDocs.includes('cv') && (
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
            <FileText className="w-4 h-4 mr-1" /> CV
          </div>
        )}
        {requiredDocs.includes('cover_letter') && (
          <div className="flex items-center bg-green-50 px-2 py-1 rounded">
            <FileText className="w-4 h-4 mr-1" /> Cover Letter
          </div>
        )}
        {requiredDocs.includes('recommendations') && (
          <div className="flex items-center bg-purple-50 px-2 py-1 rounded">
            <FileText className="w-4 h-4 mr-1" /> Recommendations
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-sm font-medium">Match Rate</div>
          <div className="bg-green-100 px-2 py-1 rounded-full text-sm">
            {matchRate}%
          </div>
        </div>
        {docsLink && (
          <Button variant="outline" size="sm" className="flex items-center">
            <Link className="w-4 h-4 mr-1" />
            View Docs
          </Button>
        )}
      </div>

      {notes && (
        <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded">
          {notes}
        </div>
      )}
    </div>
  );
}