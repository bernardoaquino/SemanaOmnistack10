module.exports = function parseStringAsArray(arrayAsSring) {
   return arrayAsSring.split(',').map(tech => tech.trim()); //Remove espaçamento antes e depois de uma string); //Separar a string toda ves que tive uma ","
}