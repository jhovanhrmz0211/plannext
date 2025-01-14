import formulario from "../componentes/formulario.js";
import renderMetas from "../componentes/rendermetas.js";
import { obtenerMetas } from "../memoria/memoria.js";

const contenedor = document.querySelector('.contenedor');
export function navegar(vista) {
    contenedor.innerHTML = '';
    if(vista === 'lista') {
        const leerMetas = obtenerMetas();
        contenedor.appendChild(renderMetas(leerMetas));
    } else if(vista === 'nuevo') {
        contenedor.appendChild(formulario());
    }
}