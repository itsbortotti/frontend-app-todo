# Dockerfile atualizado
FROM node:20-alpine

# Crie o diretório de trabalho
WORKDIR /app

# Copie os arquivos package.json e yarn.lock
COPY package.json yarn.lock ./

# Instale as dependências usando Yarn (não precisa instalar o Yarn novamente)
RUN yarn install --frozen-lockfile

# Copie o restante do projeto
COPY . .

# Execute o build
RUN yarn build

# Exponha a porta
EXPOSE 3000

# Inicie o aplicativo
CMD ["yarn", "start"]