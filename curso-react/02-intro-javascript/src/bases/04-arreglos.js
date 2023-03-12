// Arreglos

const arreglo = [1, 2, 3, 4];
//arreglo.push(1);
//arreglo.push(2);

//No es recomendable hacer esto. Es mejor usar el spread operator

console.log(arreglo);

const arreglo2 = [...arreglo, 5]; //Spread operator - Trae todos los elementos del arreglo y los agrega al nuevo arreglo

// No usar el push

console.log(arreglo2);

// Map

const arreglo3 = arreglo2.map(function (numero) { //Map recorre el arreglo y ejecuta la función que se le pasa por parámetro
  return numero * 2;
});

console.log(arreglo3);