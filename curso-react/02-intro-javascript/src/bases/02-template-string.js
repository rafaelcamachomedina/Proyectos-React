// Template Literals

const nombre = "Juan";
const apellido = "Perez";

const nombresCompletos = nombre + " " + apellido; // String concatenation
const nombreCompleto = `${nombre} ${apellido} ${1 + 1}`; // Template Literals - Esto es mejor

console.log(nombreCompleto);
console.log(nombresCompletos);

function getSaludo(nombre, apellido) {
  return `Hola ${nombre} ${apellido}`;
}

console.log(`Este es un texto: ${getSaludo(nombre, apellido)}`);
