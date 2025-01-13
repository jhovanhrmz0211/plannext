import renderEtiqueta from "./render.js";

export default function renderMetas(listaMetas) {
const divMetas = renderEtiqueta("div", "metas");
// const link = renderEtiqueta("a");
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
    });
    divMeta.appendChild(h3);
    divMeta.appendChild(p);
    divMeta.appendChild(button);
divMetas.appendChild(divMeta);
});

return divMetas;
}