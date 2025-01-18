import renderEtiqueta from "./render.js";

export function barra(rep, toRep) {
    const div = renderEtiqueta("div", "progress-circle");
  
    // Crear el texto del progreso
    const span = renderEtiqueta("span", "progress-text");
    span.textContent = `${rep}/${toRep}`;
    const radius = 30; // Tamaño reducido
  
    // Crear el SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "progress-ring");
    svg.setAttribute("viewBox", "0 0 70 70"); // Añade esta línea
  
    // Definir el gradiente
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    linearGradient.setAttribute("id", "gradient");
    linearGradient.setAttribute("x1", "0%");
    linearGradient.setAttribute("y1", "0%");
    linearGradient.setAttribute("x2", "100%");
    linearGradient.setAttribute("y2", "100%");
  
    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#add8e6");
    stop1.setAttribute("stop-opacity", "1");
  
    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#dda0dd");
    stop2.setAttribute("stop-opacity", "1");
  
    linearGradient.appendChild(stop1);
    linearGradient.appendChild(stop2);
    defs.appendChild(linearGradient);
  
    // Crear el círculo de fondo
    const circleBg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleBg.setAttribute("class", "progress-ring__background");
    circleBg.setAttribute("cx", "25"); // Centro ajustado
    circleBg.setAttribute("cy", "25");
    circleBg.setAttribute("r", radius); // Radio reducido
    circleBg.setAttribute("fill", "none");
    circleBg.setAttribute("stroke-width", "5");
    circleBg.setAttribute("stroke", "#ddd");
  
    // Crear el círculo de progreso
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("class", "progress-ring__circle");
    circle.setAttribute("cx", "25");
    circle.setAttribute("cy", "25");
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke-width", "5");
    circle.setAttribute("stroke", "url(#gradient)");
    circle.setAttribute("stroke-linecap", "round");
    circle.setAttribute("stroke-dasharray", "188.4"); // Circunferencia actualizada
    circle.setAttribute("stroke-dashoffset", "188.4");
  
    svg.append(defs, circleBg, circle);
    div.append(span, svg);
  
    // Actualizar el progreso
    updateProgress(circle, rep, toRep, span);
  
    return div;
  }
  
  function updateProgress(circle, step, totalSteps, textElement) {
    const circumference = 2 * Math.PI * 25; // Circunferencia con radio ajustado
    const offset = circumference - (step / totalSteps) * circumference;
  
    // Cambiar el color al azul turquesa cuando llegue al 100%
    if (step === totalSteps) {
      circle.classList.add("complete");
    } else {
      circle.classList.remove("complete");
    }
  
    // Actualiza las propiedades SVG
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = offset;
  
    // Actualiza el texto
    textElement.textContent = `${step}/${totalSteps}`;
  }