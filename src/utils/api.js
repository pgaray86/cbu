import Axios from "axios";

const apiManager = 'mobileint';
const apiKey = `512a5d273a311602bf0f`;

export function getToken() {
    const url = `https://${apiManager}.swissmedical.com.ar/cl/api-smg/v0/auth-login`;
    const data = {
        "apiKey": apiKey,
        "username": "30500031960",
        "password": "sigma1",
        "device": {
            "bloqueado": true,
            "recordar": true,
            "deviceid": "mobile-seguros-device-id",
            "messagingid": "EsteEsElIDDeMensajeria",
            "devicename": "Juauei 0.8 Mate"
        }
    };

    return Axios({
        method: 'post',
        url,
        data
    })
}

export function consultaCBU(cuit,cbu) {
    const url = `https://mobilepre.swissmedical.com.ar:443/serv/api-smg/V1/consulta/cbu`;
    const data = {
      "cuit": cuit,
      "cbu":cbu
        }  

    return Axios({
        method: 'post',
        url,
        data,
        headers: {           
            'content-type': 'application/json'
        }
    })
};

export function saveData(data, token) {
    const url = `https://${apiManager}.swissmedical.com.ar/api-smg/v1/ov/prospectos`;

    return Axios({
        method: 'post',
        url,
        data,
        headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json'
        }
    })
}