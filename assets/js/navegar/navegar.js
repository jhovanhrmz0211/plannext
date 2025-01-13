import formulario from "../componentes/formulario.js";
import renderMetas from "../componentes/rendermetas.js";

const contenedor = document.querySelector('.contenedor');
export function navegar(vista) {
    contenedor.innerHTML = '';
    if(vista === 'lista') {
        contenedor.appendChild(renderMetas(list));
    } else if(vista === 'nuevo') {
        contenedor.appendChild(formulario());
    }
}
// Ruta por defecto cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    navegar('lista'); // Al cargar la página, mostramos la vista de 'lista' por defecto
});