import axios from "axios";

const api = axios.create({
    baseURL:"http://192.168.8.225:5000"
});

export default api;