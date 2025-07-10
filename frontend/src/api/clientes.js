import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const getClientes = async () => {
  const res = await axios.get(API_URL);
  return res.data.filter(user => user.role === 'cliente');
};

export const createCliente = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updateCliente = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

export const deleteCliente = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
