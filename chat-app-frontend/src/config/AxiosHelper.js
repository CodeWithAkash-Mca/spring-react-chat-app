import axios from "axios";
export const baseURL = "https://spring-react-chat-app.onrender.com";
export const httpClient = axios.create({
  baseURL: baseURL,
});