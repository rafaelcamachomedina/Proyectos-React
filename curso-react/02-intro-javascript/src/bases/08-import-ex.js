import heroes, {owners} from '../data/heroes'; //Importamos el arreglo de heroes y el arreglo de owners

console.log(heroes);
console.log(owners);

//Usando find para encontrar un heroe por su id y retornarlo
const getHeroeByID = (Id) => heroes.find((heroe) => heroe.id === Id);//find retorna el primer elemento que cumpla con la condicion

console.log(getHeroeByID(2));

//Usando filter para encontrar un heroe por su owner y retornarlo

const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);

console.log(getHeroesByOwner('Marvel'));