import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === 'production'
    ? 'https://vercel.com/yashsaini7060s-projects/trello-task-management-application-backend/24KVDBUCJjLjj1pgyvZ4wG5eexs8/api/v1'
    : 'http://localhost:5041/api/v1';


const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
// to include credentials such as cookies, authorization headers, or TLS client certificates in cross-site requests by default.
axiosInstance.defaults.withCredentials = true;

// set bearer token
axiosInstance.defaults.headers.common = {
  Authorization: `bearer ${localStorage.getItem('token')}`,
};


export default axiosInstance;