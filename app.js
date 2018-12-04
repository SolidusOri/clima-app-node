const color = require('colors');
const argv = require('./config/yargs').miArgv;
const api = require('./lugar/lugar');
const temperatura = require('./clima/clima');

//console.log(argv.direccion);

let getTiempo = async(direccion) => {
    try {
        let locacion = await api.getLugarLatLng(direccion);
        let temp = await temperatura.getTemp(locacion.lat, locacion.lng);

        return `El clima para ${locacion.direccion} es de: ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getTiempo(argv.direccion).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
});


/*
api.getLugarLatLng(argv.direccion).then(resp => {
    console.log('direccion'.green, resp.direccion);
    console.log('lat'.green, resp.lat);
    console.log('lng'.green, resp.lng);
    temp.getTemp(resp.lat, resp.lng).then(respTemp => {
        console.log('temperatura'.green, respTemp.temp);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});
*/