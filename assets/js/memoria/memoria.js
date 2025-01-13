const memoria = {
  metas: [], // Array para almacenar las metas
};

// Guardar datos en localStorage
export function guardarEnLocalStorage() {
  localStorage.setItem("metas", JSON.stringify(memoria.metas));
  console.log("Datos guardados en localStorage.");
}

// Cargar datos desde localStorage
export function cargarDesdeLocalStorage() {
  const metasGuardadas = localStorage.getItem("metas");
  if (metasGuardadas) {
      memoria.metas = JSON.parse(metasGuardadas);
      console.log("Datos cargados desde localStorage:", memoria.metas);
  } else {
      console.log("No hay datos en localStorage.");
  }
}

// Adicionar una nueva meta
export function adicionarMeta(meta) {
  if (!meta || !meta.id || !meta.meta) {
      console.error("Meta inválida. Asegúrate de que tenga un ID y una descripción.");
      return false;
  }
  if (memoria.metas.some((m) => m.id === meta.id)) {
      console.error("Meta con el mismo ID ya existe.");
      return false;
  }
  memoria.metas.push(meta);
  guardarEnLocalStorage();
  console.log("Meta agregada:", meta);
  return true;
}

// Obtener todas las metas
export function obtenerMetas() {
  return memoria.metas;
}

// Eliminar una meta por ID
export function eliminarMeta(id) {
  const longitudOriginal = memoria.metas.length;
  memoria.metas = memoria.metas.filter((meta) => meta.id !== id);
  const eliminada = longitudOriginal > memoria.metas.length;
  if (eliminada) {
      guardarEnLocalStorage();
      console.log(`Meta con ID ${id} eliminada.`);
  } else {
      console.error(`Meta con ID ${id} no encontrada.`);
  }
  return eliminada;
}

// Actualizar una meta por ID
export function actualizarMeta(id, nuevaMeta) {
  const indice = memoria.metas.findIndex((meta) => meta.id === id);
  if (indice !== -1) {
      memoria.metas[indice] = { ...memoria.metas[indice], ...nuevaMeta };
      guardarEnLocalStorage();
      console.log(`Meta con ID ${id} actualizada.`);
      return true;
  } else {
      console.error(`Meta con ID ${id} no encontrada.`);
      return false;
  }
}
