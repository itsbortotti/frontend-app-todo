import React from 'react';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="task-item">
      <span>{task.title}</span>
      <span>{task.completed ? '✅' : '❌'}</span>
    </div>
  );
};