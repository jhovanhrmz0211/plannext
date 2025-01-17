import { eliminarMeta } from "../memoria/memoria.js";
import { navegar } from "../navegar/navegar.js";
import { barra } from "./barra.js";
import modal from "./modalmeta.js";
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
    p.textContent = `${meta.duracion} ${meta.selectDuracion} al ${small.textContent= meta.selectRepeticiones}`;
    const progreso = barra(meta.repeticiones, meta.totalrepeticiones);
    
    divMeta.addEventListener("click", () => {
        // console.log("Editar", meta.id);
        // const ids = localStorage.setItem("id", meta.id);
        // navegar("editar");
        // const metaObj = JSON.stringify(meta)
        console.log(`Meta traida desde renderMetas${meta.id}`);
        modal(meta);
    });
    divMeta.append(h3,p,progreso);
divMetas.appendChild(divMeta);
});

return divMetas;
}