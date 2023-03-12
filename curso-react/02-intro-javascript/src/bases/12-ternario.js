//Ternario

const isUserAuth = true;

const mensaje = isUserAuth ? 'Si esta autenticado' : 'No esta autenticado';

console.log(mensaje);

//Lo siguiente es un ejemplo si solo es validar una condición

const mensajeUser = isUserAuth && 'Si esta autenticado';//Como isUserAuth esta true, se ejecuta el mensaje
console.log(isUserAuth)
console.log(mensajeUser);