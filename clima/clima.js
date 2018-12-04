const axios = require('axios');

const getTemp = async(lat, lng) => {

    let key = '500c0ab1ece9b54e86de8fc4a23973f1';
    //await espera a que el axios regrese algo, lo que sea que regrese lo mete en resp
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${key}`);

    if (resp.data.code === '400') {
        //Disparamos el reject de la promesa que se genera con el async
        //throw new Error termina la ejecucion, no hace falta el return
        throw new Error(`No hay resultado para las cordenadas`);
    }

    //No es necesario el else porque el throw no llegaria aqui
    let temp = resp.data.main.temp;
    return temp;

    //console.log(JSON.stringify(resp.data, undefined, 2)); retorna un json

}

module.exports = {
    getTemp
}