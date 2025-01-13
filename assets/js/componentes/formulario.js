import { adicionarMeta } from "./../memoria/memoria.js";
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

const crearCampo = (labelText, inputType = "text") => {
  const label = renderEtiqueta("label");
  const input = renderEtiqueta("input");
  label.textContent = labelText;
  input.type = inputType;
  return { label, input };
};

export default function formulario() {
  const minHora = ["minutos", "horas"];
  const periodo = ["día", "semana", "mes", "año"];
  const formulario = renderEtiqueta("form", "form");
  const h2 = renderEtiqueta("h2");
  
  h2.textContent = "Crear nueva Meta";

  const { label: labelMeta, input: inputMeta } = crearCampo("Meta");
  const { label: labelFecha, input: inputFechaInicio } = crearCampo(
    "Fecha de inicio",
    "date"
  );
  const { label: labelDuracion, input: inputDuracion } = crearCampo(
    "Duración",
    "number"
  );

  const selectTiempo = opcionesSelect(minHora);
  const selectPeriodo = opcionesSelect(periodo);

  const buttonGuardar = renderEtiqueta("button");
  buttonGuardar.textContent = "Guardar";

  buttonGuardar.addEventListener("click", (e) => {
    e.preventDefault();
    adicionarMeta({
      id: generarIdUnico(),
      meta: inputMeta.value,
      fechaInicio: inputFechaInicio.value,
      duracion: inputDuracion.value,
      tiempo: selectTiempo.value,
      periodo: selectPeriodo.value,
    });
  });

  formulario.append(
    h2,
    labelMeta,
    inputMeta,
    labelFecha,
    inputFechaInicio,
    labelDuracion,
    inputDuracion,
    selectTiempo,
    selectPeriodo,
    buttonGuardar
  );

  return formulario;
}
