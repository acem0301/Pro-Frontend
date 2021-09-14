import http from "../http-common";

class ExampleService {
  fetchCharacters = async () => {
    return http.post("/login", {
      username: "crolon",
      password: "12345",
    });
  };
}

export default new ExampleService();
