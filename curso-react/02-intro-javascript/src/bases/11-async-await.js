//ASYNC AWAIT

const getImagePromesa = (promesa = new Promise((resolve, reject) => {
    resolve('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
})) => {
  return promesa
}

getImagePromesa().then(console.log);

//******************** */
//Esto es lo mismo que lo de arriba pero mas sencillo con async
//El async es una funcion que retorna una promesa

const getImageAsync = async () => {//async es una funcion que retorna una promesa
    return 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
}
console.log(getImageAsync()); //En la consola aparece una promesa
getImageAsync().then(console.log);//En la consola aparece la url

//******************** */
//ASYNC AWAIT con await

//Siempre que se use await se debe usar async dentro de la funcion

try {
    const getImages = async() => {
        const api_key = '1IzPMLPEMST3bs74PEsViQfKFW2XHJXl';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);//
        const {data} = await response.json();
    
        const {url} = data.images.original;
    
        console.log(url);
    
        const img = document.createElement('img');
    
        img.src = url;
    
        document.body.append(img);
    
    }

    getImages();
} catch (error) {
    // manejo del error
    console.log(error);
}

