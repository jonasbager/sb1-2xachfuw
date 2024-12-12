import { formatDate } from '@/lib/utils';
import { useDraggable } from '@dnd-kit/core';
import { Calendar, FileText, Users } from 'lucide-react';

interface CompactJobCardProps {
  id: string;
  stage: string;
  company: string;
  position: string;
  deadline: Date;
  matchRate: number;
  connections: number;
  requiredDocs: Array<'cv' | 'cover_letter' | 'recommendations'>;
}

export function CompactJobCard({
  id,
  stage,
  company,
  position,
  deadline,
  matchRate,
  connections,
  requiredDocs,
}: CompactJobCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    data: {
      stage,
    },
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`group bg-white rounded-lg border border-border p-4 hover:shadow-sm transition-all cursor-grab active:cursor-grabbing ${
        isDragging ? 'shadow-lg opacity-50' : ''
      }`}
    >
      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {position}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{company}</p>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(deadline)}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {connections}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {requiredDocs.map((doc) => (
              <div
                key={doc}
                className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center ring-2 ring-white"
                title={doc.replace('_', ' ')}
              >
                <FileText className="w-3.5 h-3.5 text-foreground" />
              </div>
            ))}
          </div>
          <div className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-700">
            {matchRate}%
          </div>
        </div>
      </div>
    </div>
  );
}