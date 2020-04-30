const axios = require('axios');
const lugar = require('../lugar/lugar');

const getClima = async(lat, lng) => {
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bb636bb02fbd8e5f5acb735a14c1c5fc`,
    });

    const resp = await instance.get();
    return resp.data.main.temp;
};

const getInfo = async(direccion) => {
    const data = await lugar.getLugarLatLng(direccion);
    const info = await getClima(data.lat, data.lng);

    return info;
};

module.exports = {
    getClima,
    getInfo
};