import heroes from './data/heroes';

const getHeroesById = (Id) => heroes.find((heroe) => heroe.id === Id);

const getHeroeByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);


console.log(getHeroesById(2));
console.log(getHeroeByOwner('DC'));

//Promesas

const promesa = new Promise((resolve, reject) => {//Creamos una promesa
  setTimeout(() => {//Usamos setTimeout para simular un tiempo de espera
    const todosheroes = getHeroesById(2);
    resolve(todosheroes);//Usamos el metodo resolve para obtener el resultado de la promesa
    //reject('No se pudo encontrar el heroe');//Usamos el metodo reject para obtener el resultado de la promesa
  }, 2000);
});
//Aqui lo deje con funcion flecha -  de manera mas corta
promesa.then((heroe) => console.log('heroe', heroe))//Usamos el metodo then para obtener el resultado de la promesa

.catch((err) => console.warn(err));


const getHeroesByIdAsync = (Id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todosheroes = getHeroesById(Id);
      if (todosheroes) {
        resolve(todosheroes);
      } else {
        reject('No se pudo encontrar el heroe');
      }
    }, 2000);
  });
}

getHeroesByIdAsync(9)

.then(console.log)//Usamos el metodo then para obtener el resultado de la promesa

.catch(console.warn);//Usamos el metodo catch para obtener el resultado de la promesa