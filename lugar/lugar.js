const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    //await espera a que el axios regrese algo, lo que sea que regrese lo mete en resp
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (resp.data.status === 'ZERO_RESULTS') {
        //Disparamos el reject de la promesa que se genera con el async
        //throw new Error termina la ejecucion, no hace falta el return
        throw new Error(`No hay resultado para la ciudad ${direccion}`);
    }

    //No es necesario el else porque el throw no llegaria aqui
    let location = resp.data.results[0];
    let cordenadas = location.geometry.location;
    return {
        direccion: location.formatted_address,
        lat: cordenadas.lat,
        lng: cordenadas.lng
    }

    //console.log(JSON.stringify(resp.data, undefined, 2)); retorna un json

}

module.exports = {
    getLugarLatLng
}