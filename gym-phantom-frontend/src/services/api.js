import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Substitua pelo IP do servidor
});

export const registerAdmin = async (data) => {
  return await api.post('/auth/register-admin', data);
};

export const login = async (data) => {
  return await api.post('/auth/login', data);
};

export const fetchAdminData = async (token) => {
  return await api.get('/auth/admin-data', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

