const axios = require('axios');
const Dev = require('../models/Dev.js')
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');
// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) { //Função que estabele rota padrão(Request parâmetro que vem do Front-End e Response devolve uma respota para o cliente)
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username }); //Vou no banco e procuro se existe algum registro de dev com o github_username

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); //Aguardar o axios.get finalizar para devolver a resposta e ccontinuar o restante do código

            const { name = login, avatar_url, bio } = (apiResponse.data); //Se o nome não existir ele vai ser igual ao login

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

            // Filtrar as conexões que estão no máximo 10km de distância
            // e que o novo dev tenha pelo menos uma das tecnologias filtradas

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            )
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }

        return response.json(dev); //Envia JSON como resposta
    },

    //Desafio adicional!!!
    // async updateOne(request, response) { //nome, avatar, bio, techs
    //     const { _id } = request.query;
    //     const { name, avatar_url, bio, techs } = request.body;

    //     const techsArray = parseStringAsArray(techs);

    //     dev = await Dev.updateOne({
    //         _id: _id
    //     },
    //         {
    //             name: name,
    //             avatar_url: avatar_url,
    //             bio: bio,
    //             techs: techsArray,
    //         },
    //     );

    //     return response.json(dev);
    // },

    // async destroy(request, response) {
    //     const { _id } = request.query;

    //     dev = await Dev.deleteOne({
    //         _id: _id,
    //     });

    //     return response.json(dev);
    // },
};