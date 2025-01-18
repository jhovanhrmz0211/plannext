import { cargarDesdeLocalStorage } from "./memoria/memoria.js";
import { navegar } from "./navegar/navegar.js";
const links = document.querySelectorAll("[data-router]");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //Evita que se recargue la página
    const vista = e.target.getAttribute("data-router"); //Obtiene el valor del atributo data-router
    navegar(vista); //Llama a la función navegar
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Carga las metas desde localStorage
  cargarDesdeLocalStorage();

  // Navega a la vista de 'lista' por defecto
  navegar("lista");
});
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("hidden")
});
