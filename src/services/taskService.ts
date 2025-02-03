import api from './api';

// Função para buscar todas as tarefas
export async function fetchTasks(): Promise<any[]> {
  const response = await api.get('/tasks');
  return response.data;
}

// Função para criar uma nova tarefa
export async function createTask(taskData: { title: string }): Promise<any> {
  const response = await api.post('/tasks', taskData);
  return response.data;
}

// Função para atualizar o status de uma tarefa
export async function updateTaskStatus(id: string, completed: boolean): Promise<void> {
  await api.patch(`/tasks/${id}`, { completed });
}

// Função para remover uma tarefa
export async function removeTask(id: string): Promise<void> {
  await api.delete(`/tasks/${id}`);
}