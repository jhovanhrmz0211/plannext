import { adicionarMeta } from "./../memoria/memoria.js";
import renderEtiqueta from "./render.js";

function generarIdUnico() {
    return `meta-${Date.now()}`;
  }
const minHora = ["minuto/s", "hora/s"];
const periodo = ["día/s", "semana/s", "mes/es", "año/s"];

export default function formulario() {
  const formulario = renderEtiqueta("form", "form");
  const h2 = renderEtiqueta("h2");
  h2.textContent = "Crear nueva Meta";

  const labeMeta = renderEtiqueta("label");
  const inputMeta = renderEtiqueta("input");
  labeMeta.textContent = "Meta";

  const fechaInicio = renderEtiqueta("label");
  const inputFechaInicio = renderEtiqueta("input");
  fechaInicio.textContent = "Fecha de inicio";
  inputFechaInicio.type = "date";

  const duracion = renderEtiqueta("label");
  const inputDuracion = renderEtiqueta("input");
  const tiempo = renderEtiqueta("select");
  // Iterar correctamente el arreglo
  minHora.forEach((element) => {
    const option = renderEtiqueta("option");
    option.value = element;
    option.textContent = element;
    tiempo.appendChild(option); // Agregar cada opción al select
  });
  duracion.textContent = "Duración";
  inputDuracion.type = "number";

  const periodoLabel = renderEtiqueta("label");
  const periodoSelect = renderEtiqueta("select");
  periodo.forEach((element) => {
    const option = renderEtiqueta("option");
    option.value = element;
    option.textContent = element;
    periodoSelect.appendChild(option);
  });
  periodoLabel.textContent = "Periodo";

  const buttonGuardar = renderEtiqueta("button");
  buttonGuardar.textContent = "Guardar";
  
   // Evento para guardar meta
   buttonGuardar.addEventListener("click", (e) => {
    e.preventDefault();
    adicionarMeta({
      id: generarIdUnico(),
      meta: inputMeta.value,
      fechaInicio: inputFechaInicio.value,
      duracion: inputDuracion.value,
      tiempo: tiempo.value,
      periodo: periodoSelect.value,
    });
  });
  
  formulario.append(
    h2,
    labeMeta,
    inputMeta,
    fechaInicio,
    inputFechaInicio,
    duracion,
    inputDuracion,
    tiempo,
    periodoLabel,
    periodoSelect,
    buttonGuardar
  );
  return formulario;
}
