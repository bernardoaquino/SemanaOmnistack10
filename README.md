# Semana OmniStack 10
Semana OmniStack 10.0 - Rocketseat 🚀

## 13/01 - Conhecendo a OmniStack
Criação da aplicação DevRadar

### Chocolatey
[Chocolatey - Gerenciador de pacotes para Windows](https://chocolatey.org/install)

### NodeJS
[NodeJS - Instalação via Gerenciador de Pacotes para Windows](https://nodejs.org/pt-br/download/package-manager/#windows)

### Yarn
[Yarn - Gerenciador de pacotes](https://yarnpkg.com/pt-BR/)

### IDE - Visual Studio Code
[VSCode](https://code.visualstudio.com/)

## 14/01 - Criando a base da aplicação
### Criação do Workspace
```
mkdir semanaomnistack10
mkdir backend
cd backend
yarn init -y(Não realizar perguntas sobre o projeto)
yarn add express
code .
```
### Executar o arquivo criado
```
node index.js
```
### Executar o arquivo criado com atualização automática
Instalação do nodemon
```
yarn add nodemon -D(Dependência de Desenvolvimento)
```
Executar o nodemon
```
yarn nodemon index.js
```

### Insomnia
[Insomnia - Ferramenta para testar as rotas](https://insomnia.rest/)

### MongoBD
[MongoDB - Atlas](https://www.mongodb.com/cloud/atlas)
* Criar um cluster
* Criar um usuário e senha para acessar o banco(Database Access)
* Liberar os Ips para acessarem a base de dados(Network Access)
* Conectar com o cluster(connect your application)
* Copiar a connection string
* Instalar o mongoose(Biblioteca que da acesso do Node com a base de dados Mongo)
```
yarn add mongoose
```

### Axios
Instalação do axios
```
yarn add axios
```
