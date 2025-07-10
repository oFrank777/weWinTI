import React from 'react';

export default function PanelPaquetes() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Gestión de Planes</h1>

      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4">
        Crear Plan
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-slate-200 text-left">
              <th className="py-3 px-4">Nombre del Plan</th>
              <th className="py-3 px-4">Precio</th>
              <th className="py-3 px-4">Descripción</th>
              <th className="py-3 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Plan Gold</td>
              <td className="py-2 px-4">S/ 49.90</td>
              <td className="py-2 px-4">Acceso premium al sistema</td>
              <td className="py-2 px-4 space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Editar</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
