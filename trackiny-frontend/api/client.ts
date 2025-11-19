import axios from "axios";
axios.defaults.withCredentials=true;
axios.defaults.baseURL='http://127.0.0.1:8000'
axios.defaults.headers.common['Accept'] = 'application/json';
export const apiClient = axios.create();
