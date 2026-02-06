import axios from "axios";
const API_URL = "https://apiproductos-vix4.onrender.com/productos";

export const getProductos = async () => {
  try {
    const response = await axios.get(API_URL);

    // Mapear la respuesta al formato esperado
    // Es response.data.data porque la API devuelve { message, data: [...] }
    return response.data.data.map((producto) => ({
      id: producto._id,
      nombre: producto.name,
      descripcion: producto.description,
      precio: producto.price,
      categoria: producto.category,
      imagen: producto.photo ?? "", // Es opcional
      detalles: producto.details,   // El backend lo guarda como "details"
    }));
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw new Error("No se pudo obtener la lista de productos.");
  }
};

export const getProductoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    const producto = response.data.data; // Es data.data pq la API lo devuelve así

    return {
      id: producto._id,
      nombre: producto.name,
      descripcion: producto.description,
      precio: producto.price,
      categoria: producto.category,
      imagen: producto.photo ?? "",
      detalles: producto.details,
    };
  } catch (error) {
    console.error("Error al obtener el pato:", error);
    throw new Error("No se pudo obtener el pato.");
  }
};

export const createProducto = async (pato) => {
  try {
    // Mapear al formato esperado por la API
    const patoAPI = {
      name: pato.nombre,
      description: pato.descripcion,
      price: Number(pato.precio),
      category: pato.categoria,
      photo: pato.imagen || "",
      details: pato.detalles, // El backend espera "details"
    };

    const response = await axios.post(API_URL, patoAPI);

    // Devolvemos el producto ya mapeado
    // La API devuelve { message, data: {...} }
    const producto = response.data.data;

    return {
      id: producto._id,
      nombre: producto.name,
      descripcion: producto.description,
      precio: producto.price,
      categoria: producto.category,
      imagen: producto.photo,
      detalles: producto.details,
    };
  } catch (error) {
    console.error("Error al crear el pato:", error);
    throw new Error("No se pudo crear el pato.");
  }
};

export const deleteProducto = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error al eliminar el pato:", error);
    throw new Error("No se pudo eliminar el pato.");
  }
};
