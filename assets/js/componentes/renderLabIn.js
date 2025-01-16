import renderEtiqueta from "./render.js";
export const crearLabel = (labelText) => {
  const label = renderEtiqueta("label");
  label.textContent = labelText;
  return label;
}
export const crearInput = (tipo) => {
  const input = renderEtiqueta("input");
  input.type = tipo;
  return input;
}