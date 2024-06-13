import axios from 'axios';

const api_client = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Accept': '*/*'
  }
})
api_client.interceptors.request.use((config) => {
  
    config.params = {
    ...config.params,
    }
  return config
})
export default api_client;
