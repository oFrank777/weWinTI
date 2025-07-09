import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../auth/login';
import { useAuth } from '../contex/ContexAuth';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      const { access_token, role, email } = res.data;
      login(access_token, role, email);
      navigate('/');
    } catch (err) {
      console.error(err.response?.data?.message || 'Error al iniciar sesión');
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Login Icon"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-2xl font-bold text-gray-800">Iniciar sesión</h2>
          <p className="text-sm text-gray-500">Ingresa tus credenciales para continuar</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              name="email"
              type="email"
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
