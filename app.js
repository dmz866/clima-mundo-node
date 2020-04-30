const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

clima.getInfo(argv.direccion).then(r => {
        console.log(r)
    })
    .catch(e => {
        console.log(e);
    });