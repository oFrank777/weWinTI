import React from 'react';

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-white to-stone-100 text-gray-800">
      {/* HERO */}
      <div className="relative h-[45vh] flex items-center justify-center bg-[url('/assets/img/recojo_bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-900 bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Servicios Inteligentes</h1>
          <p className="text-lg mt-2">Conectando sostenibilidad, tecnología y recompensas</p>
        </div>
      </div>

      {/* SECCIÓN DE SERVICIOS */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">¿Qué hacemos en WeWin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Notificación Inteligente",
              desc: "Desde la app notificas la cantidad de residuos listos para recojo, incluyendo peso estimado y fotografía.",
              icon: "/assets/icons/notificacion.png",
            },
            {
              title: "Recojo Eficiente",
              desc: "El vehículo recolector solo va cuando se justifica la rentabilidad, optimizando rutas y combustible.",
              icon: "/assets/icons/camion2.png",
            },
            {
              title: "Pago Justo",
              desc: "El sistema te recompensa económicamente por cada kilo de residuo entregado, dependiendo del tipo.",
              icon: "/assets/icons/pago.png",
            },
            {
              title: "Clasificación Obligatoria",
              desc: "Para ser parte, debes clasificar correctamente tus residuos: orgánicos, cartón, plástico, entre otros.",
              icon: "/assets/icons/clasificacion.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 p-6 flex items-start gap-6"
            >
              <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-2xl font-semibold text-green-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACTO */}
      <section className="py-16 px-6 md:px-20 bg-stone-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">¿Por qué usar WeWin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Impacto Ambiental",
              desc: "Contribuyes al reciclaje y reducción de basura, impulsando la economía circular.",
              icon: "/assets/icons/eco.png",
            },
            {
              title: "Ganas por Reciclar",
              desc: "Cada kilo cuenta. Tus residuos tienen valor. Nosotros te pagamos por ellos.",
              icon: "/assets/icons/money.png",
            },
            {
              title: "Gestión 100% Móvil",
              desc: "Desde el celular puedes notificar, hacer seguimiento, recibir pagos y consultar historial.",
              icon: "/assets/icons/movil.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center hover:scale-105 transition duration-300 shadow-sm hover:shadow-lg"
            >
              <img src={item.icon} alt={item.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-stone-800 text-white text-center">
        <p>&copy; 2025 WeWin | Sistema de Recolección y Reciclaje Inteligente</p>
      </footer>
    </div>
  );
}
