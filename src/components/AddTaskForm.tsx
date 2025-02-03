import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

export const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (addTask && title) {
      await addTask({ title });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Digite uma nova tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </div>
    </form>
  );
};