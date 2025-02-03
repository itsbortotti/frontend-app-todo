import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import { AddTaskForm } from './components/AddTaskForm';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-4 bg-white rounded" style={{ width: '400px' }}>
          <h1 className="text-center mb-4">Task App</h1>
          <AddTaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;