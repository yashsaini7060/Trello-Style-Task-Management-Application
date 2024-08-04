import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === 'production'
    ? 'https://trello-task-management-application.onrender.com/api/v1'
    : 'http://localhost:5041/api/v1';


const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
// to include credentials such as cookies, authorization headers, or TLS client certificates in cross-site requests by default.
axiosInstance.defaults.withCredentials = true;
console.log(`bearer ${localStorage.getItem('token')}`)
// set bearer token
axiosInstance.defaults.headers.common = {
  Authorization: `bearer ${localStorage.getItem('token')}`,
};


export default axiosInstance;