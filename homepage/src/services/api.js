import axios from 'axios';
// import axios from '../services/api';

// Configure Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
