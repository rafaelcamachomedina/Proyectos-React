//Funciones
let nombre = "Fernando";

function saludar(nombre) {
  return `Hola, ${nombre}`;
}

console.log(saludar(nombre));

//No hacer funciones de la anterior manera

//Esta es la mejor manera de hacer funciones

const saludar2 = function (nombre) {
  return `Hola, ${nombre}`;
};

console.log(saludar2(nombre));

//Funciones de flecha

const saludar3 = (nombre) => {
  return `Hola, ${nombre}`;
};

console.log(saludar3(nombre));

//Funciones de flecha mas cortas

const saludar4 = (nombre) => `Hola, ${nombre}`; //Si solo es una linea de codigo no es necesario poner las llaves

console.log(saludar4(nombre));

//Funciones de flecha mas cortas y sin argumentos

const saludar5 = () => `Hola Mundo`; //Si solo es una linea de codigo no es necesario poner las llaves

console.log(saludar5());

//Funciones de flecha mas cortas y sin argumentos y sin return

const getUser = () => ({
  //Los parentesis son para que no confunda con las llaves de la funcion
  uid: "ABC123",
  username: "racamacho",
});

console.log(getUser());

const getUsuarioActivo = (nombre) => ({
    uid: "ABC567",
    username: nombre,
    });

console.log(getUsuarioActivo("Fernando"));
