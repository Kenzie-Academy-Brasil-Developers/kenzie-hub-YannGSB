import axios from "axios";

export const LoginApi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/sessions",
  timeout: 5 * 1000,
});

export const RegisterApi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/users",
  timeout: 5 * 1000,
});
