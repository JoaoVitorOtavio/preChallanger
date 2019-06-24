import { create } from 'axios';

const api = create({
  baseURL: 'http://192.168.216.193:3003',
});


export default api;