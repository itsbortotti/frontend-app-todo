import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchTasks, removeTask as removeTaskApi, createTask as createTaskApi, updateTaskStatus } from '../services/taskService';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (taskData: { title: string }) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
  toggleTaskCompletion: (id: string, completed: boolean) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };

    loadTasks();
  }, []);

  const addTask = async (taskData: { title: string }) => {
    const newTask = await createTaskApi(taskData);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = async (id: string, completed: boolean) => {
    await updateTaskStatus(id, completed);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed } : task))
    );
  };

  const removeTask = async (id: string) => {
    await removeTaskApi(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTaskCompletion }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};