import React, { useState } from "react";

export default function SolicitarRecojo() {
  const [form, setForm] = useState({
    tipo: "",
    cantidad: "",
    fecha: "",
    direccion: "",
    foto: null,
    comentario: "",
  });
  const [mensaje, setMensaje] = useState("");
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setForm({ ...form, foto: files[0] });
      if (files[0]) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(files[0]);
      } else {
        setPreview(null);
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje("¡Solicitud de recojo programada correctamente!");
    setForm({
      tipo: "",
      cantidad: "",
      fecha: "",
      direccion: "",
      foto: null,
      comentario: "",
    });
    setPreview(null);
    setTimeout(() => setMensaje(""), 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-green-200 p-8 md:p-10 flex flex-col gap-6"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <h2 className="text-3xl font-extrabold text-center mb-2 text-green-900 flex items-center justify-center gap-2">
          <span className="inline-block w-3 h-8 bg-green-400 rounded-full"></span>
          Solicitar y Programar Recojo
        </h2>
        <p className="text-center text-blue-700 mb-2 text-lg">
          Agenda tu recojo de residuos de manera fácil y rápida.
        </p>
        {mensaje && (
          <div className="mb-2 text-green-700 font-semibold text-center bg-green-100 rounded-lg py-2 shadow">
            {mensaje}
          </div>
        )}
        <div>
          <label className="block font-bold text-green-800 mb-1">
            Tipo de residuo <span className="text-red-500">*</span>
          </label>
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            required
            className="border-2 border-green-200 rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
          >
            <option value="">Selecciona...</option>
            <option value="organico">Orgánico</option>
            <option value="plastico">Plástico</option>
            <option value="papel">Papel/Cartón</option>
            <option value="vidrio">Vidrio</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <div>
          <label className="block font-bold text-green-800 mb-1">
            Cantidad estimada (kg) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="cantidad"
            min="1"
            value={form.cantidad}
            onChange={handleChange}
            required
            className="border-2 border-green-200 rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
            placeholder="Ej: 5"
          />
        </div>
        <div>
          <label className="block font-bold text-green-800 mb-1">
            Fecha y hora de recojo <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
            className="border-2 border-green-200 rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div>
          <label className="block font-bold text-green-800 mb-1">
            Dirección de recojo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            required
            className="border-2 border-green-200 rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
            placeholder="Ej: Av. Ejemplo 123, Arequipa"
          />
        </div>
        <div>
          <label className="block font-bold text-green-800 mb-1">
            Foto del residuo (opcional)
          </label>
          <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleChange}
            className="border-2 border-green-200 rounded px-3 py-2 w-full"
          />
          {preview && (
            <div className="mt-2 flex justify-center">
              <img
                src={preview}
                alt="Vista previa"
                className="h-28 w-auto rounded-lg border border-green-200 shadow"
              />
            </div>
          )}
        </div>
        <div>
          <label className="block font-bold text-green-800 mb-1">
            Comentario adicional (opcional)
          </label>
          <textarea
            name="comentario"
            value={form.comentario}
            onChange={handleChange}
            className="border-2 border-green-200 rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
            rows={2}
            placeholder="¿Algo más que debamos saber?"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition text-lg mt-2"
        >
          <span className="inline-block align-middle mr-2">📅</span>
          Programar Recojo
        </button>
      </form>
    </div>
  );
}