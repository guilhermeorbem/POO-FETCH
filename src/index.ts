import fetch from "node-fetch";

const urlApi = "https://randomuser.me/api/?nat=br"

fetch(urlApi, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
        for (const result of data.results) {
            console.log(result.gender);
            console.log(result.name.first)
        }
    })
    .catch(error => console.log('error', error));
