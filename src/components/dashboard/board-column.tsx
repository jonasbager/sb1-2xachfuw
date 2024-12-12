import { useDroppable } from '@dnd-kit/core';
import { type ReactNode } from 'react';

interface BoardColumnProps {
  id: string;
  title: string;
  count: number;
  children: ReactNode;
}

export function BoardColumn({ id, title, count, children }: BoardColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div 
      ref={setNodeRef}
      className="flex flex-col min-w-[320px] max-w-[320px]"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-sm text-foreground">{title}</h3>
        <span className="bg-secondary text-muted-foreground text-xs font-medium px-2 py-0.5 rounded-full">
          {count}
        </span>
      </div>
      <div className={`flex flex-col gap-3 p-0.5 rounded-lg transition-colors ${
        isOver ? 'bg-secondary/50' : ''
      }`}>
        {children}
      </div>
    </div>
  );
}