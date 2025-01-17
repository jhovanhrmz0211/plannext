import { actualizarMeta } from "../memoria/memoria.js";
import { navegar } from "../navegar/navegar.js";
import renderEtiqueta from "./render.js";
import { crearInput, crearLabel } from "./renderLabIn.js";

export default function modal(objetivo) {
  const minHora = ["minutos", "horas"];
  const periodo = ["día", "semana", "mes", "año"];
  const { id, meta, fechainicio, fechafin, repeticiones, selectRepeticiones, duracion, selectDuracion, totalrepeticiones } = objetivo;

    // Crear contenedor del modal
    const modalContainer = renderEtiqueta("div", "modal-container");
    const modalContent = renderEtiqueta("div", "modal-content");

    // Título
    const titulo = renderEtiqueta("h2");
    titulo.textContent = "Editar Meta";

    // Crear formulario
    const formulario = renderEtiqueta("form");

    // Input para la meta
    const divFecha = renderEtiqueta("div", "form-group");
    const labelMeta = crearLabel("Meta");
    const inputMeta = crearInput("text");
    inputMeta.value = meta;

    // Fecha de inicio
    const labelFechaIn = crearLabel("Fecha de inicio");
    const inputFechaIn = crearInput("date");
    inputFechaIn.value = fechainicio;

    // Fecha de fin
    const labelFechaFi = crearLabel("fecha de fin");
    const inputFechaFin = crearInput("date");
    inputFechaFin.value = fechafin;
    divFecha.append(labelMeta,inputMeta,labelFechaIn,inputFechaIn,labelFechaFi,inputFechaFin)

    // Repeticiones
    const divRepeticiones = renderEtiqueta("div", "form-group");
    const labelRepeticiones = crearLabel("Repeticiones");
    const inputRepeticiones = crearInput("number");
    inputRepeticiones.value = repeticiones;
    const labelAl = crearLabel("al");

    // Select de repeticiones
    const selectPeriodo = renderEtiqueta("select");
    periodo.forEach((opcion) => {
        const option = renderEtiqueta("option");
        option.value = opcion;
        option.textContent = opcion;
        if (opcion === selectRepeticiones) {
            option.selected = true;
        }
        selectPeriodo.appendChild(option);
    });
    
    // Duración
    const divmin = renderEtiqueta("div", "form-groups");
    const labelDuracion = crearLabel("Duración");
    const inputDuracion = crearInput("number");
    inputDuracion.value = duracion;

    // Select de duración (cambio de nombre para evitar conflicto)
    const selectDuracionField = renderEtiqueta("select"); // Cambié el nombre aquí
    minHora.forEach((opcion) => {
        const option = renderEtiqueta("option");
        option.value = opcion;
        option.textContent = opcion;
        if (opcion === selectDuracion) {
            option.selected = true;
        }
        selectDuracionField.appendChild(option); // Usando el nuevo nombre
    });
    divmin.append(inputDuracion,selectDuracionField)

    // Total de repeticiones
    const labelTotalRepeticiones = renderEtiqueta("label");
    labelTotalRepeticiones.textContent = "Total de repeticiones:";
    const inputTotalRepeticiones = renderEtiqueta("input");
    inputTotalRepeticiones.type = "number";
    inputTotalRepeticiones.value = totalrepeticiones;
    divRepeticiones.append(labelRepeticiones,inputRepeticiones,labelAl,selectPeriodo,labelDuracion,divmin,labelTotalRepeticiones,inputTotalRepeticiones)

    // Botón de guardar
    const divButtons = renderEtiqueta("div", "buttons")
    const botonGuardar = renderEtiqueta("button");
    botonGuardar.type = "button";
    botonGuardar.textContent = "Guardar";
    divButtons.appendChild(botonGuardar);

    // Evento para guardar los cambios
    botonGuardar.addEventListener("click", () => {
        const metaEditada = {
            id,
            meta: inputMeta.value,
            fechainicio: inputFechaIn.value,
            fechafin: inputFechaFin.value,
            repeticiones: inputRepeticiones.value,
            selectRepeticiones: selectPeriodo.value,
            duracion: inputDuracion.value,
            selectDuracion: selectDuracionField.value, // Aquí uso el nuevo nombre
            totalrepeticiones: inputTotalRepeticiones.value,
        };

        if (actualizarMeta(id, metaEditada)) {
            alert("Meta actualizada con éxito");
            document.body.removeChild(modalContainer); // Cerrar modal
            navegar("lista"); // Refrescar la vista
        } else {
            alert("Error al actualizar la meta.");
        }
    });

    // Botón de cerrar modal
    const botonCerrar = renderEtiqueta("button");
    botonCerrar.type = "button";
    botonCerrar.textContent = "Cerrar";
    botonCerrar.addEventListener("click", () => {
        document.body.removeChild(modalContainer); // Cerrar modal
    });
    divButtons.appendChild(botonCerrar);

    // Añadir elementos al formulario
    formulario.append(
        divFecha,
        divRepeticiones,// a qui
        divRepeticiones,
        divButtons
    );

    // Añadir elementos al modal
    modalContent.append(titulo, formulario);
    modalContainer.appendChild(modalContent);

    // Mostrar modal
    document.body.appendChild(modalContainer);
}
