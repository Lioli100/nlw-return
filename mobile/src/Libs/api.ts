import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.28.138.254:3333",
});
