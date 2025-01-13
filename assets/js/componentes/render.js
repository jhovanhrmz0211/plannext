export default function renderEtiqueta(etiqueta, clase) {
    const etiquetaRender = document.createElement(etiqueta);
    if(clase !== '') {
        etiquetaRender.classList.add(clase);
    }
    return etiquetaRender;
}