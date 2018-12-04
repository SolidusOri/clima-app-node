//opcions nos permite ingresar parametros sin comandos
const miArgv = require('yargs').options({
    direccion: {
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima',
        alias: 'd'
    }
}).argv;

module.exports = {
    miArgv
}