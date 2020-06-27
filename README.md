<img src="https://repository-images.githubusercontent.com/246740885/8ee3ec00-6e8c-11ea-863e-f5e3f3edbf99" align="center"></img>
<h1 align="center">Semana Omnistack 10 🚀</h1>
<p align="center">Projeto <strong>DevRadar</strong></p>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
  <a aria-label="Desafios" href="DESAFIOS.md">
  	<img src="https://img.shields.io/badge/desafios-OK-blueviolet"></img>
  </a>
  <a aria-label="Completo" href="https://rocketseat.com.br/week-10/aulas#4">
    <img src="https://img.shields.io/badge/OmniStack-done-green?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
</p>

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
### Cors
Instalação do cors
```
yarn add cors
```
