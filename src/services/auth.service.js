import http from "../http-common";

class AuthService {
  login = async (email, password) => {
    return http.post("/login", {
      username: email,
      password: password,
    });
  };

  register = async (nombre, apellido, email, password) => {
    return http.post("/registro", {
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password,
    });
  };
}

export default new AuthService();
