import axios from "axios";
import { BACKEND_URL } from "../constants";

export const HttpService = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        'Content-Type': 'application/json' 
    }
});

HttpService.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        localStorage.setItem('Bearer', '');
        window.location.href = '/';
      }
      
      return Promise.reject(error);
    }
  );
  export default HttpService;