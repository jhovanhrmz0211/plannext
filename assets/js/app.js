import { navegar } from "./navegar/navegar.js";

const contenedor = document.querySelector('.contenedor');
const links = document.querySelectorAll('[data-router]');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();//Evita que se recargue la página
        const vista = e.target.getAttribute('data-router');//Obtiene el valor del atributo data-router
        navegar(vista);//Llama a la función navegar
    });

});
