//Fetch API - Ya viene con el navegador

// Vamos a usar GIPHY API
//https://developers.giphy.com

const api_key = '1IzPMLPEMST3bs74PEsViQfKFW2XHJXl';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

//https://api.giphy.com/v1/gifs/random?api_key=1IzPMLPEMST3bs74PEsViQfKFW2XHJXl

peticion
    .then( resp => resp.json() ) //Convierte la respuesta en un objeto json
    .then( ({data}) => {
        const {url} = data.images.original;//Desestructuramos la respuesta

        const img = document.createElement('img');//Creamos un elemento img

        img.src = url;//Le asignamos la url de la imagen

        document.body.append( img );//  Agregamos la imagen al body
    })

    .catch( console.warn );//En caso de error


