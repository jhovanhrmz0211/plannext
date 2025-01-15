import { adicionarMeta } from "../memoria/memoria.js";
import { navegar } from "../navegar/navegar.js";
import renderEtiqueta from "./render.js";

function generarIdUnico() {
  return `meta-${Date.now()}`;
}

const opcionesSelect = (opciones) => {
  const select = renderEtiqueta("select");
  opciones.forEach((opcion) => {
    const option = renderEtiqueta("option");
    option.value = opcion;
    option.textContent = opcion;
    select.appendChild(option);
  });
  return select;
};
const crearLabel = (labelText) => {
  const label = renderEtiqueta("label");
  label.textContent = labelText;
  return label;
}
const crearInput = (tipo) => {
  const input = renderEtiqueta("input");
  input.type = tipo;
  return input;
}
export default function formulario() {
  const minHora = ["minutos", "horas"];
  const periodo = ["día", "semana", "mes", "año"];
  const formulario = renderEtiqueta("form", "form");
  const h2 = renderEtiqueta("h2");
  h2.textContent = "Crear nueva Meta";

  const labelMeta = crearLabel("Meta");
  const inputMeta = crearInput("text");
  const divFecha = renderEtiqueta("div", "form-group");
  const labelFechaIn = crearLabel("Fecha de inicio");
  const inputFechaIn = crearInput("date");
  const labelFechaFi = crearLabel("fecha de fin");
  const inputFechaFin = crearInput("date");
  divFecha.append(labelFechaIn,inputFechaIn,labelFechaFi,inputFechaFin);
  const divRepeticiones = renderEtiqueta("div", "form-group");
  const labelRepeticiones = crearLabel("Repeticiones");
  const inputRepeticiones = crearInput("number");
  const labelAl = crearLabel("al");
  const selectRepeticiones = opcionesSelect(periodo);
  const labelDuracion = crearLabel("Duración");
  const divmin = renderEtiqueta("div", "form-groups");
  const inputDuracion = crearInput("number");
  const selectDuracion = opcionesSelect(minHora);
  divmin.append(inputDuracion,selectDuracion);
  divRepeticiones.append(labelRepeticiones,inputRepeticiones,labelAl,selectRepeticiones,labelDuracion,divmin);
  const labelTotalRep = crearLabel("Total de repeticiones");
  const inputTotalRep = crearInput("number");

  const buttonGuardar = renderEtiqueta("button")
  buttonGuardar.textContent = "Guardar";
  buttonGuardar.addEventListener("click", (e) =>{
    e.preventDefault();
    if(!inputMeta.value || !inputFechaIn.value || !inputFechaFin.value || !inputRepeticiones.value || !selectRepeticiones.value || !inputDuracion.value || !selectDuracion.value || !inputTotalRep.value) {
      alert("Todos los campos son obligatorios");
      return;
    }
    adicionarMeta({
      id: generarIdUnico(),
      meta: inputMeta.value,
      fechainicio: inputFechaIn.value,
      fechafin: inputFechaFin.value,
      repeticiones: inputRepeticiones.value,
      selectRepeticiones: selectRepeticiones.value,
      duracion: inputDuracion.value,
      selectDuracion: selectDuracion.value,
      totalrepeticiones: inputTotalRep.value,
    });
    navegar("lista");
  })
  formulario.append(h2,labelMeta,inputMeta,divFecha,divRepeticiones,labelTotalRep,inputTotalRep, buttonGuardar);

  return formulario;
}
