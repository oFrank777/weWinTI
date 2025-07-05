import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100 text-gray-800">
      {/* HERO */}
      <div className="flex items-center justify-center h-[50vh] bg-cover bg-center bg-[url('/assets/img/recojo_bg.jpg')] backdrop-blur-sm bg-white/30 relative">
        <div className="absolute inset-0 bg-green-900 bg-opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-5xl font-bold mb-4">Gestión Integral de Recolección de Residuos</h1>
          <p className="text-white text-xl">Un sistema inteligente para hogares, empresas y administradores</p>
        </div>
      </div>

      {/* SERVICIOS PRINCIPALES */}
      <section className="py-12 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">¿Qué Ofrecemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Reportar Residuos", desc: "Notifica fácilmente cuando tu contenedor esté lleno", icon: "/assets/icons/residuos.png" },
            { title: "Recojo Programado", desc: "El personal de transporte recoge los residuos según notificación", icon: "/assets/icons/camion.png" },
            { title: "Planes de Servicio", desc: "Elige entre planes semanales, mensuales o personalizados", icon: "/assets/icons/plan.png" },
          ].map((item, i) => (
            <div key={i} className="bg-stone-50 p-6 rounded shadow flex flex-col items-center">
              <img src={item.icon} alt={item.title} className="w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-center text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="py-12 px-8 bg-stone-200">
        <h2 className="text-3xl font-bold text-center mb-8">Roles del Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Clientes (Hogar / Empresa)</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Registro con DNI, dirección y ubicación</li>
              <li>Reportar residuos con foto</li>
              <li>Seleccionar y pagar plan</li>
              <li>Historial de recolecciones y pagos</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Personal de Transporte</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Recibe notificaciones asignadas</li>
              <li>Recolecta según zona y plan</li>
              <li>Registra el pesaje de residuos</li>
              <li>Consulta rutas y zonas activas</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Administrador</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Gestiona usuarios y personal</li>
              <li>Supervisa solicitudes y delega</li>
              <li>Define tarifas y descuentos</li>
              <li>Evalúa rentabilidad de rutas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAPA Y HISTORIAL */}
      <section className="py-12 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Otras Funciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-stone-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Visualización de Mapa</h3>
            <p className="text-gray-700">Consulta zonas activas y ubicaciones de clientes para una recolección eficiente.</p>
          </div>
          <div className="bg-stone-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Historial y Rentabilidad</h3>
            <p className="text-gray-700">Cada solicitud y pago queda registrado, permitiendo análisis de costos por ruta y cliente.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-green-900 text-white text-center">
        <p>&copy; 2025 Sistema de Recolección de Residuos | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
