# Frontend - Todo App

Este projeto é o frontend da aplicação Todo App, desenvolvido em React com TypeScript. Ele permite a criação, visualização, edição e exclusão de tarefas.

## **Configuração do Ambiente**
--------------------------------------------------------------------------------------------------------  
### **Requisitos**

- Node.js (v18 ou superior)
- Yarn ou npm para gerenciamento de pacotes
- Docker e Docker Compose (opcional, para execução em container)

--------------------------------------------------------------------------------------------------------  
### **Instalação**

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd frontend

2.	Instale as dependências:
    yarn install

3.	Configure as variáveis de ambiente no arquivo .env:
    REACT_APP_API_URL=http://localhost:4000

--------------------------------------------------------------------------------------------------------    
### **Comandos**
Iniciar o Servidor de Desenvolvimento
    yarn start

Compilar para Produção
    yarn build

Executar Servidor em Produção
    serve -s build

--------------------------------------------------------------------------------------------------------  
### **Docker**

Build e Execução
	1.	Certifique-se de que o Docker esteja em execução.
	2.	Na raiz do projeto, execute:
        docker-compose up --build
    
    3.  Parar os Containers
        docker-compose down --volumes --remove-orphans

--------------------------------------------------------------------------------------------------------  
### **Estrutura do Projeto**
src
 ├── index.tsx         // Ponto de entrada da aplicação React
 ├── App.tsx           // Componente principal da aplicação
 ├── components        // Componentes reutilizáveis (TaskList, AddTaskForm, etc.)
 ├── context           // Gerenciamento de estado com Context API
 ├── services          // Serviços de comunicação com a API
 