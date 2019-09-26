import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber.ml',
});

export default api;
