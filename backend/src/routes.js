const { Router } = require('express'); //Importar algo específico do express, utilizar chaves
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Flag Async pode demorar para responder
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
// routes.delete('/devs', DevController.destroy);
// routes.put('/devs', DevController.updateOne);

routes.get('/search', SearchController.index);

module.exports = routes; //Exportando o objeto routes para que a aplicação tenha acesso