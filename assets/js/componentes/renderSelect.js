import renderEtiqueta from "./render.js";

export const opcionesSelect = (opciones) => {
  const select = renderEtiqueta("select");
  opciones.forEach((opcion) => {
    const option = renderEtiqueta("option");
    option.value = opcion;
    option.textContent = opcion;
    select.appendChild(option);
  });
  return select;
};