// src/lib/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://thinkboard-hoib.onrender.com/api"
});

export default api;