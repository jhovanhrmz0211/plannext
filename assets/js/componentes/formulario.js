import renderEtiqueta from "./render.js";

export default function formulario() {
    const formulario = renderEtiqueta('form', 'form');
    const h2 = renderEtiqueta('h2');
    h2.textContent = 'Crear nueva Meta';

    const labeMeta = renderEtiqueta('label');
    const inputMeta = renderEtiqueta('input');
    labeMeta.textContent = 'Meta';

    
    formulario.append(h2, labeMeta, inputMeta);
    return formulario;
}