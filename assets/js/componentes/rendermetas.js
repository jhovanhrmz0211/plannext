import { eliminarMeta } from "../memoria/memoria.js";
import { navegar } from "../navegar/navegar.js";
import renderEtiqueta from "./render.js";

export default function renderMetas(listaMetas) {
const divMetas = renderEtiqueta("div", "metas");
// const link = renderEtiqueta("a");
if(listaMetas.length === 0) {
    const h4 = renderEtiqueta("h4");
    h4.textContent = "No hay metas para mostrar";
    divMetas.appendChild(h4);
}
listaMetas.forEach((meta) => {
    const divMeta = renderEtiqueta("div", "meta");
    const h3 = renderEtiqueta("h3");
    const p = renderEtiqueta("p");
    const small = renderEtiqueta("small");
    h3.textContent = meta.meta;
    p.textContent = `${meta.duracion} ${meta.tiempo} / ${small.textContent= meta.periodo}`;
    const button = renderEtiqueta("button");
    button.textContent = "Eliminar";
    button.addEventListener("click", () => {
        console.log("Eliminar", meta.id);
        eliminarMeta(meta.id);
        navegar("lista");
    });
    divMeta.appendChild(h3);
    divMeta.appendChild(p);
    divMeta.appendChild(button);
divMetas.appendChild(divMeta);
});

return divMetas;
}