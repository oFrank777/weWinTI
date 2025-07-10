import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function PanelClientes() {
  const [clientes, setClientes] = useState([
    { id: 1, nombre: 'Ana Torres', email: 'ana@example.com' },
    { id: 2, nombre: 'Luis García', email: 'luis@example.com' },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoEmail, setNuevoEmail] = useState('');
  const [nuevoCliente, setNuevoCliente] = useState({ nombre: '', email: '' });

  // 🗑️ Eliminar cliente
  const handleEliminar = (id) => {
    setClientes(clientes.filter(c => c.id !== id));
  };

  // ✏️ Activar edición
  const iniciarEdicion = (cliente) => {
    setEditingId(cliente.id);
    setNuevoNombre(cliente.nombre);
    setNuevoEmail(cliente.email);
  };

  // 💾 Guardar cambios
  const guardarCambios = (id) => {
    const actualizado = { id, nombre: nuevoNombre, email: nuevoEmail };
    setClientes(clientes.map(c => (c.id === id ? actualizado : c)));
    setEditingId(null);
    setNuevoNombre('');
    setNuevoEmail('');
  };

  // ➕ Agregar nuevo cliente
  const agregarCliente = () => {
    if (!nuevoCliente.nombre || !nuevoCliente.email) return;
    const nuevo = {
      id: Date.now(),
      nombre: nuevoCliente.nombre,
      email: nuevoCliente.email,
    };
    setClientes([...clientes, nuevo]);
    setNuevoCliente({ nombre: '', email: '' });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Gestión de Clientes
      </h1>

      {/* Formulario para nuevo cliente */}
      <div className="mb-6 bg-gray-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Agregar nuevo cliente</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Nombre"
            value={nuevoCliente.nombre}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })}
            className="border px-2 py-1 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={nuevoCliente.email}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, email: e.target.value })}
            className="border px-2 py-1 rounded w-full"
          />
          <button
            onClick={agregarCliente}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Agregar
          </button>
        </div>
      </div>

      {/* Tabla de clientes */}
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-blue-50 text-gray-600 text-sm">
            <tr>
              <th className="px-4 py-3 text-left">Nombre</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length > 0 ? (
              clientes.map((cliente) => (
                <tr key={cliente.id} className="border-t hover:bg-blue-50 transition">
                  <td className="px-4 py-2">
                    {editingId === cliente.id ? (
                      <input
                        value={nuevoNombre}
                        onChange={(e) => setNuevoNombre(e.target.value)}
                        className="border px-2 py-1 rounded text-sm w-full"
                      />
                    ) : (
                      <span className="text-gray-800">{cliente.nombre}</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === cliente.id ? (
                      <input
                        value={nuevoEmail}
                        onChange={(e) => setNuevoEmail(e.target.value)}
                        className="border px-2 py-1 rounded text-sm w-full"
                      />
                    ) : (
                      <span className="text-gray-600">{cliente.email}</span>
                    )}
                  </td>
                  <td className="px-4 py-2 text-right space-x-2">
                    {editingId === cliente.id ? (
                      <button
                        onClick={() => guardarCambios(cliente.id)}
                        className="text-green-600 hover:text-green-800 text-sm"
                      >
                        Guardar
                      </button>
                    ) : (
                      <button
                        onClick={() => iniciarEdicion(cliente)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>
                    )}
                    <button
                      onClick={() => handleEliminar(cliente.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                  No hay clientes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
