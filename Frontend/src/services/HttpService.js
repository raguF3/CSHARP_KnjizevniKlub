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
      //Bez ovoga "Promise.reject..." -> "catch" u ni jednom servisu neće hvatati nikakav error,
      //uvijek će se trigerati samo "then" jer se ovdje uhvati error koji dođe s api-a
      return Promise.reject(error);
    }
  );
