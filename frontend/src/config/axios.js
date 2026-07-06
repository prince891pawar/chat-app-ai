import axios from 'axios'; 

const AxiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;