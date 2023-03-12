// Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

//console.log(personajes[0]);
//console.log(personajes[1]);
//console.log(personajes[2]);

//Esta es la manera de desestructurar un arreglo

const [ , , p3 ] = personajes; //Esto es lo mismo que lo de arriba. Las comas son para saltar posiciones

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);


//Tarea
const userState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];//Esta funcion no tiene nombre
}

const [nombre, sinNombre] = userState('Goku');//El nombre es Goku

console.log(nombre);

sinNombre();//Esta funcion no tiene nombre

//Desestructuracion de objetos usando los metodos de los objetos

const cadena = 'Hola Mundo';

const {length} = cadena; //De esta manera tenemos acceos a los metodos de cadena

console.log(length);

