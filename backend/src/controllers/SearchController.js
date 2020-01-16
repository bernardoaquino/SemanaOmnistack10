const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        //Buscar todos os devs num raio 10km
        //Filtrar por tecnologia
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({ //Para ter filtro tem que ter um objeto
            techs: { //Objeto porque pode ter vários filtros
                $in: techsArray, //Encontrar se o usuário tem as tecnologias que estão dentro de techsArray
            },
            location: { //Encontrar todos os usuários que estão perto do ponto em uma distância máxima de 10Km
                $near: { //Encontrar objetos perto de uma localização
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        
        return response.json({ devs });
    }
}