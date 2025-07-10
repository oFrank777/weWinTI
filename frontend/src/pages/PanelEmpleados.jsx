import React from 'react';
import {
  FaUsers,
  FaTruck,
  FaClipboardList,
  FaMapMarkedAlt,
  FaUserEdit,
} from 'react-icons/fa';

export default function PanelEmpleados() {
  const botones = [
    {
      label: 'Gestionar Clientes',
      icon: <FaUsers className="text-4xl text-emerald-600 mb-4" />,
      onClick: () => window.location.href = '/panel-clientes',
    },
    {
      label: 'Gestionar Trabajadores',
      icon: <FaTruck className="text-4xl text-cyan-600 mb-4" />,
      onClick: () => window.location.href = '/panel-empleados',
    },
    {
      label: 'Gestionar Planes',
      icon: <FaClipboardList className="text-4xl text-indigo-500 mb-4" />,
      onClick: () => window.location.href = '/panel-planes',
    },
    {
      label: 'Ver Mapa de Actividad',
      icon: <FaMapMarkedAlt className="text-4xl text-pink-500 mb-4" />,
      onClick: () => window.location.href = '/ver-mapa',
    },
    {
      label: 'Actualizar Mis Datos',
      icon: <FaUserEdit className="text-4xl text-yellow-500 mb-4" />,
      onClick: () => window.location.href = '/actualizar-datos',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-emerald-800 mb-12">
        Panel Principal del Administrador
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {botones.map((btn, index) => (
          <button
            key={index}
            onClick={btn.onClick}
            className="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow hover:shadow-md transition hover:bg-emerald-50"
          >
            {btn.icon}
            <span className="text-lg font-semibold text-gray-700 text-center">
              {btn.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
