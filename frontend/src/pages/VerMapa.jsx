import React from 'react';

export default function VerMapa() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold text-emerald-800 mb-6 text-center">
          Mapa de Actividad
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Visualiza aquí la distribución de recogidas o zonas activas.
        </p>

        <div className="w-full h-[400px] rounded overflow-hidden">
          <iframe
            title="Mapa simulado"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15301.209346446965!2d-71.5429694!3d-16.4090474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a456898e471%3A0xf0f31b0f1ef7a3a7!2sArequipa!5e0!3m2!1ses!2spe!4v1712345678901"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
