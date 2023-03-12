import PropTypes from "prop-types"; //Para validar los tipos de datos - instalar con npm i prop-types 

const nombre = ["Fernando", "Maria", "Jose"];

function getGreeting(name) {
  return name ? "Hola " + name : "Rafael";
}

//Las funciones deben estar fuera del componente - si se necesita usar el componente

const FirstApp = ({title, subtitle}) => {
  return (
    <>
      <h1>{title}</h1>

      <p>{subtitle}</p>
    </>
  );
};
//Con <> fragment no se necesita el div
//Con {} se puede poner codigo js pero no se pueden poner objetos
// Si se requiriera imprimir el objeto se neceita JSON.stringify

//Estos componente se definen al final

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};

FirstApp.defaultProps = {
  subtitle: 234,
};


export default FirstApp;
