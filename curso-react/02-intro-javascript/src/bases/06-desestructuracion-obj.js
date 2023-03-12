//Desestructuración de objetos

const { useContext } = require("react");

const usuario = {
  nombre: "Ricardo",
  edad: 32,
  clave: "1234",
  rango: "Soldado",
};

const { nombre, edad, clave, rango } = usuario; //Desestructuración de objetos

console.log(nombre);

console.log(edad);

console.log(clave);

console.log(rango);

//Desestructuración de objetos en funciones

const retornaPersona = (usuario) => {
  const { nombre, edad, clave, rango } = usuario;
  console.log(nombre, edad, clave, rango);
};

retornaPersona(usuario);

//Desestructuración de objetos en funciones mas corta

const retornaPersona2 = ({ nombre, edad, clave, rango }) => {
  console.log(nombre, edad, clave, rango);
};

retornaPersona2(usuario);

//Desestructuración de objetos con nuevas propiedades

const retornaPersona3 = ({ nombre, edad, clave, rango, ciudad = "Bogotá" }) => {
  //Se le puede asignar un valor por defecto
  console.log(nombre, edad, clave, rango, ciudad);
};

retornaPersona3(usuario);

//Desestructuración de objetos con nuevas propiedades y con un nuevo nombre

const userContext = ({ clave, nombre, edad, rango, ciudad = "Bogotá" }) => {
  //Se le puede asignar un valor por defecto
  // console.log(nombre, edad, clave, rango, ciudad);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
}

const { nombreClave, anios, latlng: { lat, lng } } = userContext(usuario); //Se le puede asignar un nuevo nombre a la variable

console.log(nombreClave, anios);
console.log(lat, lng);
