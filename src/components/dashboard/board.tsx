import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { stages } from '@/data/stages';
import { BoardColumn } from './board-column';
import { CompactJobCard } from './compact-job-card';
import { useState } from 'react';
import { type Job } from '@/types';

export function Board() {
  const [stagesWithJobs, setStagesWithJobs] = useState(stages);
  
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 8,
      },
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    
    if (!over) return;
    
    const jobId = active.id;
    const fromStage = active.data.current?.stage;
    const toStage = over.id;
    
    if (fromStage === toStage) return;
    
    setStagesWithJobs(currentStages => {
      const newStages = [...currentStages];
      
      // Find and remove job from source stage
      const fromStageIndex = newStages.findIndex(s => s.title === fromStage);
      const [movedJob] = newStages[fromStageIndex].jobs.splice(
        newStages[fromStageIndex].jobs.findIndex(job => job.id === jobId),
        1
      );
      
      // Add job to target stage
      const toStageIndex = newStages.findIndex(s => s.title === toStage);
      newStages[toStageIndex].jobs.push(movedJob);
      
      return newStages;
    });
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex gap-8 overflow-x-auto pb-6">
        {stagesWithJobs.map((stage) => (
          <BoardColumn
            key={stage.title}
            id={stage.title}
            title={stage.title}
            count={stage.jobs.length}
          >
            {stage.jobs.map((job) => (
              <CompactJobCard 
                key={job.id} 
                id={job.id}
                stage={stage.title}
                {...job} 
              />
            ))}
          </BoardColumn>
        ))}
      </div>
    </DndContext>
  );
}