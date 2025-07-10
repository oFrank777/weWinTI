import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function PanelEmpleados() {
  const [empleados, setEmpleados] = useState([
    { id: 1, nombre: 'Carlos Ramos', role: 'transporte' },
    { id: 2, nombre: 'Lucía Díaz', role: 'admin' },
  ]);

  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('transporte');

  // ➕ Crear empleado (solo transporte permitido)
  const handleCrear = () => {
    if (!nombre.trim() || !password.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (rol === 'admin') {
      alert('No se permite crear empleados con rol admin desde aquí.');
      return;
    }

    const nuevoEmpleado = {
      id: Date.now(),
      nombre,
      role: rol,
    };

    setEmpleados([...empleados, nuevoEmpleado]);
    setNombre('');
    setPassword('');
  };

  // 🗑️ Eliminar empleado
  const handleEliminar = (id) => {
    setEmpleados(empleados.filter(emp => emp.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Panel de Empleados
      </h1>

      {/* Formulario */}
      <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full sm:w-1/3 px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full sm:w-1/3 px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <select
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          className="w-full sm:w-1/4 px-3 py-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="transporte">Transporte</option>
        </select>
        <button
          onClick={handleCrear}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Añadir empleado
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-300 text-gray-700 text-sm">
              <th className="px-4 py-3 text-left">Nombre</th>
              <th className="px-4 py-3 text-left">Rol</th>
              <th className="px-4 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.length > 0 ? (
              empleados.map((empleado) => (
                <tr key={empleado.id} className="border-b border-gray-200 hover:bg-gray-200 transition">
                  <td className="px-4 py-2 text-gray-800">{empleado.nombre}</td>
                  <td className="px-4 py-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      empleado.role === 'admin'
                        ? 'bg-gray-400 text-white'
                        : 'bg-green-200 text-green-800'
                    }`}>
                      {empleado.role}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-right space-x-2">
                    {empleado.role !== 'admin' && (
                      <button
                        onClick={() => handleEliminar(empleado.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                  No hay empleados registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
