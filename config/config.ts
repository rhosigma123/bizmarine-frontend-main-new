import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
export const BACKEND_URL = process.env.BACKEND_URL;
export const BASE_URL = process.env.BASE_URL;
export const PUBLIC_URL = process.env.PUBLIC_URL;


const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export default apiClient;
