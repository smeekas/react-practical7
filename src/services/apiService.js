import axios from "axios";
import { config } from "../config/config.env";
export const axiosInstance = axios.create({
  baseURL:  config.API,
});
