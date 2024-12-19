import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const login = (data) => API.post('/auth/login', data);
export const registerAdmin = (data) => API.post('/auth/register-admin', data);// Rota de registro do admin
export const fetchAdminData = (token) =>
  API.get('/admin/data', { headers: { Authorization: `Bearer ${token}` } }); 
