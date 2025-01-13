// import formulario from "./componentes/formulario.js";
import renderMetas from "./componentes/rendermetas.js";
const contenedor = document.querySelector('.contenedor');

// const form = formulario();
const metas = renderMetas(metasLis);
contenedor.appendChild(metas);