import { cargarDesdeLocalStorage } from "./memoria/memoria.js";
import { navegar } from "./navegar/navegar.js";

// const contenedor = document.querySelector('.contenedor');
const links = document.querySelectorAll('[data-router]');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();//Evita que se recargue la página
        const vista = e.target.getAttribute('data-router');//Obtiene el valor del atributo data-router
        navegar(vista);//Llama a la función navegar
    });

});
document.addEventListener("DOMContentLoaded", () => {
    cargarDesdeLocalStorage(); // Carga las metas desde localStorage
});

// Ruta por defecto cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    navegar('lista'); // Al cargar la página, mostramos la vista de 'lista' por defecto
});