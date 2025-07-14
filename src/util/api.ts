import axios from 'axios';
// import { getCookie } from 'cookies-next';
import appConfig from '@/config';

const api = axios.create({
  baseURL: `${appConfig.API_URL}`,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});



export default api;
