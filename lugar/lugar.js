const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const direccion = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com//latlon.php?location=${direccion}`,
        timeout: 10000,
        headers: {
            'x-rapidapi-key': '3254f70b04msh7020c8d75ceb6a8p120f05jsnb686570fd47d'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error('No data');
    }

    const data = resp.data.Results[0];

    return {
        direccion: data.name,
        lat: data.lat,
        lng: data.lon
    };
};

module.exports = {
    getLugarLatLng
};