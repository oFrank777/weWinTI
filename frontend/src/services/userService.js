// src/services/userService.js
import axios from 'axios';

const API = 'http://localhost:3000'; // o la URL de tu backend NestJS

export const getClientes = async () => {
  const token = localStorage.getItem('token'); // o desde tu contexto
  const res = await axios.get(`${API}/admin/clientes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
