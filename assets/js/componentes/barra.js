import renderEtiqueta from "./render.js";

export function barra(rep,toRep) {
    const span = renderEtiqueta("span", "barra-pro");
    span.textContent = `${rep}/${toRep}`;
    const progreso = (rep / toRep);
    if(progreso <= 0.5) {
        span.style.borderColor = "red";
    } else if(progreso < 1) {
        span.style.borderColor ="orange";
    } else {
        span.style.borderColor = "green";
    }
    return span;
}
