import http from "../http-common";

class ExampleService {
  fetchCharacters = async () => {
    return http.get("/character");
  };
}

export default new ExampleService();
