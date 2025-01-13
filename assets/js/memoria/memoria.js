const memoria = {
    metas: [], // Array para almacenar las metas
  };
  
  // Adicionar una nueva meta
  export function adicionarMeta(meta) {
    memoria.metas.push(meta);
    console.log("Meta agregada:", meta);
  }
  
  // Obtener todas las metas
  export function obtenerMetas() {
    return memoria.metas;
  }
  
  // Opcional: Eliminar una meta por ID
  export function eliminarMeta(id) {
    memoria.metas = memoria.metas.filter((meta) => meta.id !== id);
    console.log(`Meta con ID ${id} eliminada.`);
  }
  
  // Opcional: Actualizar una meta por ID
  export function actualizarMeta(id, nuevaMeta) {
    const indice = memoria.metas.findIndex((meta) => meta.id === id);
    if (indice !== -1) {
      memoria.metas[indice] = { ...memoria.metas[indice], ...nuevaMeta };
      console.log(`Meta con ID ${id} actualizada.`);
    }
  }
  