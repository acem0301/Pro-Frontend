import http from "../http-common";

class BuscadorService {
  search = async (ciudad, servicio) => {
    return http.post("/busqueda", {
      ciudad: ciudad,
      servicio: servicio,
    });
  };
}

export default new BuscadorService();
