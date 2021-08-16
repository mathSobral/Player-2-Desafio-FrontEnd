import axios from "axios";

/**
 * Create an Axios instance.
 */
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://brasilapi.com.br/api/",
});
