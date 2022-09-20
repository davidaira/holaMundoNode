const axios = require("axios")

const getRazas = async () => {
    const ruta = "https://dog.ceo/api/breeds/list/all"
    const resp = await axios.get(ruta)
    //console.log(resp)
    return Object.keys(resp.data.message);
}

module.exports = getRazas;