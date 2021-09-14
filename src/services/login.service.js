import http from "../http-common";

class LoginService {
  login = async (email, password) => {
    return http.post("/login", {
      username: email,
      password: password,
    });
  };
}

export default new LoginService();
