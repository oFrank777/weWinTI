import React, { useEffect, useState } from 'react';

export default function PanelPlanes() {
  const [planes, setPlanes] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    frecuencia: ''
  });
  const [editandoId, setEditandoId] = useState(null);

  // Cargar planes al inicio
  useEffect(() => {
    fetch('http://localhost:3000/planes')
      .then(res => res.json())
      .then(data => setPlanes(data))
      .catch(err => console.error('Error cargando planes:', err));
  }, []);

  // Autofocus cuando editas
  useEffect(() => {
    if (editandoId) {
      document.querySelector('input[name="nombre"]')?.focus();
    }
  }, [editandoId]);

  // Cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Guardar (crear o actualizar)
  const handleGuardar = () => {
    const { nombre, descripcion, precio, frecuencia } = form;
    if (!nombre || !descripcion || !precio || !frecuencia) {
      return alert('Completa todos los campos');
    }

    const metodo = editandoId ? 'PUT' : 'POST';
    const url = editandoId
      ? `http://localhost:3000/planes/${editandoId}`
      : 'http://localhost:3000/planes';

    fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => {
        if (!res.ok) throw new Error('Error en el servidor');
        return res.json();
      })
      .then(data => {
        if (editandoId) {
          setPlanes(planes.map(p => (p.id === data.id ? data : p)));
        } else {
          setPlanes([...planes, data]);
        }
        setForm({ nombre: '', descripcion: '', precio: '', frecuencia: '' });
        setEditandoId(null);
      })
      .catch(err => alert('Error guardando el plan'));
  };

  // Cargar plan al formulario
  const handleEditar = (plan) => {
    setForm(plan);
    setEditandoId(plan.id);
  };

  // Eliminar plan
  const handleEliminar = (id) => {
    if (!confirm('¿Estás seguro de eliminar este plan?')) return;

    fetch(`http://localhost:3000/planes/${id}`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) throw new Error('Error al eliminar');
        setPlanes(planes.filter(p => p.id !== id));
      })
      .catch(() => alert('No se pudo eliminar el plan'));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Gestión de Planes</h1>

      {/* Formulario */}
      <div className="bg-gray-100 p-4 rounded-md mb-6 shadow-md max-w-xl mx-auto">
        <div className="grid gap-2 mb-3">
          <input
            name="nombre"
            placeholder="Nombre del plan"
            value={form.nombre}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="descripcion"
            placeholder="Descripción"
            value={form.descripcion}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="precio"
            type="number"
            placeholder="Precio"
            value={form.precio}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <select
            name="frecuencia"
            value={form.frecuencia}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="" disabled>Selecciona frecuencia</option>
            <option value="semanal">Semanal</option>
            <option value="mensual">Mensual</option>
            <option value="semestral">Semestral</option>
          </select>
        </div>
        <button
          onClick={handleGuardar}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
        >
          {editandoId ? 'Actualizar' : 'Crear'} Plan
        </button>
      </div>

      {/* Tabla de planes */}
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="min-w-full bg-white rounded shadow-md border">
          <thead>
            <tr className="bg-gray-300 text-left">
              <th className="p-3">Nombre</th>
              <th className="p-3">Descripción</th>
              <th className="p-3">Precio</th>
              <th className="p-3">Frecuencia</th>
              <th className="p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {planes.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No hay planes registrados
                </td>
              </tr>
            ) : (
              planes.map(plan => (
                <tr key={plan.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{plan.nombre}</td>
                  <td className="p-3">{plan.descripcion}</td>
                  <td className="p-3">S/ {plan.precio}</td>
                  <td className="p-3 capitalize">{plan.frecuencia}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEditar(plan)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(plan.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
