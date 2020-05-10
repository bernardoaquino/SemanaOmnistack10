const express = require("express"); //Importando o express
const mongoose = require("mongoose"); //Importando o mongoose(possibilita o node ter comunicação com uma base de dados mongo)
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

const app = express(); //Chamando express
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-seh6q.mongodb.net/week10?retryWrites=true&w=majority",
  {
    //String de conexão
    useNewUrlParser: true, //Parâmetros para retirar o aviso
    useUnifiedTopology: true, //Parâmetros para retirar o aviso
    useCreateIndex: true,
  }
);

app.use(cors());
app.use(express.json()); //Express entender requições de um corpo com formato JSON - Tem que vir antes das rotas
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Param: req.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

// app.post('/users', (request, response) => { //Função que estabele rota padrão(Request parâmetro que vem do Front-End e Response devolve uma respota para o cliente)
//     console.log(request.body);
//     return response.json({ message: 'Hello Omnistack'}); //Envia JSON como resposta
// });

app.listen(3333); //Definindo localhost com porta padrão
