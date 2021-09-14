import http from "../http-common";

class BuscadorService {
  search = async () => {
    return http.get("/buscar");
  };
}

export default new BuscadorService();
