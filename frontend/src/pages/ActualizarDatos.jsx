import React, { useState } from 'react';

export default function ActualizarDatos() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleGuardar = (e) => {
    e.preventDefault();
    alert(`✅ Datos actualizados:\nNombre: ${nombre}\nEmail: ${email}`);
    setNombre('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 py-16 px-6">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow">
        <h1 className="text-3xl font-bold text-center text-emerald-800 mb-6">
          Actualizar Datos Personales
        </h1>

        <form onSubmit={handleGuardar} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-emerald-200"
              placeholder="Ej: Jeremy Huamani"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-emerald-200"
              placeholder="Ej: jeremy@correo.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md text-center"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}
