import { actualizarMeta } from "../memoria/memoria.js";
import { navegar } from "../navegar/navegar.js";
import renderEtiqueta from "./render.js";

export default function modal(objetivo) {
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
    const labelMeta = renderEtiqueta("label");
    labelMeta.textContent = "Meta:";
    const inputMeta = renderEtiqueta("input");
    inputMeta.type = "text";
    inputMeta.value = meta;

    // Fecha de inicio
    const labelFechaInicio = renderEtiqueta("label");
    labelFechaInicio.textContent = "Fecha de inicio:";
    const inputFechaInicio = renderEtiqueta("input");
    inputFechaInicio.type = "date";
    inputFechaInicio.value = fechainicio;

    // Fecha de fin
    const labelFechaFin = renderEtiqueta("label");
    labelFechaFin.textContent = "Fecha de fin:";
    const inputFechaFin = renderEtiqueta("input");
    inputFechaFin.type = "date";
    inputFechaFin.value = fechafin;

    // Repeticiones
    const labelRepeticiones = renderEtiqueta("label");
    labelRepeticiones.textContent = "Repeticiones:";
    const inputRepeticiones = renderEtiqueta("input");
    inputRepeticiones.type = "number";
    inputRepeticiones.value = repeticiones;

    // Select de repeticiones
    const labelSelectRepeticiones = renderEtiqueta("label");
    labelSelectRepeticiones.textContent = "Periodo de repeticiones:";
    const selectPeriodo = renderEtiqueta("select");
    ["día", "semana", "mes", "año"].forEach((opcion) => {
        const option = renderEtiqueta("option");
        option.value = opcion;
        option.textContent = opcion;
        if (opcion === selectRepeticiones) {
            option.selected = true;
        }
        selectPeriodo.appendChild(option);
    });

    // Duración
    const labelDuracion = renderEtiqueta("label");
    labelDuracion.textContent = "Duración:";
    const inputDuracion = renderEtiqueta("input");
    inputDuracion.type = "number";
    inputDuracion.value = duracion;

    // Select de duración (cambio de nombre para evitar conflicto)
    const labelSelectDuracion = renderEtiqueta("label");
    labelSelectDuracion.textContent = "Unidad de tiempo:";
    const selectDuracionField = renderEtiqueta("select"); // Cambié el nombre aquí
    ["minutos", "horas"].forEach((opcion) => {
        const option = renderEtiqueta("option");
        option.value = opcion;
        option.textContent = opcion;
        if (opcion === selectDuracion) {
            option.selected = true;
        }
        selectDuracionField.appendChild(option); // Usando el nuevo nombre
    });

    // Total de repeticiones
    const labelTotalRepeticiones = renderEtiqueta("label");
    labelTotalRepeticiones.textContent = "Total de repeticiones:";
    const inputTotalRepeticiones = renderEtiqueta("input");
    inputTotalRepeticiones.type = "number";
    inputTotalRepeticiones.value = totalrepeticiones;

    // Botón de guardar
    const botonGuardar = renderEtiqueta("button");
    botonGuardar.type = "button";
    botonGuardar.textContent = "Guardar Cambios";

    // Evento para guardar los cambios
    botonGuardar.addEventListener("click", () => {
        const metaEditada = {
            id,
            meta: inputMeta.value,
            fechainicio: inputFechaInicio.value,
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

    // Añadir elementos al formulario
    formulario.append(
        labelMeta, inputMeta,
        labelFechaInicio, inputFechaInicio,
        labelFechaFin, inputFechaFin,
        labelRepeticiones, inputRepeticiones,
        labelSelectRepeticiones, selectPeriodo,
        labelDuracion, inputDuracion,
        labelSelectDuracion, selectDuracionField, // Aquí uso el nuevo nombre
        labelTotalRepeticiones, inputTotalRepeticiones,
        botonGuardar, botonCerrar
    );

    // Añadir elementos al modal
    modalContent.append(titulo, formulario);
    modalContainer.appendChild(modalContent);

    // Mostrar modal
    document.body.appendChild(modalContainer);
}
