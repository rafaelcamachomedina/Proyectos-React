//Objeetos literales

const persona = {
  //Objeto literal - Lo que esta entre corchetes es un objeto
  nombre: "Juan",
  profesion: "Desarrollador Web",
  edad: 500,
  direccion: {
    ciudad: "Bogota",
    pais: "Colombia",
    edificio: {
        nombre: "Edificio principal",
        telefono: "123456789"
    }
    }
};

console.log(persona.profesion);

console.table(persona); //Muestra la tabla de los objetos


//Clona todo el objeto

const persona2 = {...persona};

persona2.nombre = "Peter";

console.log(persona2);
