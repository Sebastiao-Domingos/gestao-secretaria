import TokenService from "@/services/token";
import axios from "axios";
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    cookies().get(TokenService.API_TOKEN_NAME)?.value
  }`;

  return config;
});

export { api };
