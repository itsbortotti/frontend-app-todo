import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { FiCheck, FiX, FiTrash } from 'react-icons/fi';

const TaskList: React.FC = () => {
  const { tasks, toggleTaskCompletion, removeTask } = useTaskContext();

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          <span className={task.completed ? 'text-decoration-line-through' : ''}>
            {task.title}
          </span>
          <div>
            <button
              className={`btn btn-sm ${task.completed ? 'btn-warning' : 'btn-success'} me-2`}
              onClick={() => toggleTaskCompletion(task.id, !task.completed)}
            >
              {task.completed ? <FiX /> : <FiCheck />}
            </button>
            <button className="btn btn-sm btn-danger" onClick={() => removeTask(task.id)}>
              <FiTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;