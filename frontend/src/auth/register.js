// frontend/auth/register.js
import API from '../api/axios';

export const registerUser = async (data) => {
  return await API.post('/users/register', data);  
};
