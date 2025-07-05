import React from 'react';

export default function Paquetes() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-100 text-gray-800">
      {/* HERO */}
      <div className="relative h-[45vh] flex items-center justify-center bg-[url('/assets/img/recojo_bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-900 bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Planes y Paquetes</h1>
          <p className="text-lg mt-2">Elige el plan que se adapte a tus necesidades de recolección y gana con tu reciclaje</p>
        </div>
      </div>

      {/* PLANES PRINCIPALES */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">Nuestros Paquetes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Hogar Sostenible',
              desc: 'Para familias que clasifican residuos y requieren recojo frecuente pero moderado.',
              icon: '/assets/icons/hogar.png',
              freq: '1 recojo por semana',
              price: 'S/ 15 mensual',
              benefits: ['Recojo programado', 'Notificaciones automáticas', 'Acceso a recompensas'],
            },
            {
              title: 'Empresas Verdes',
              desc: 'Negocios o tiendas que generan mayor volumen de reciclaje.',
              icon: '/assets/icons/empresa.png',
              freq: '2 recojos por semana',
              price: 'S/ 40 mensual',
              benefits: ['Recojo frecuente', 'Estadísticas detalladas', 'Soporte preferencial'],
            },
            {
              title: 'Plan Personalizado',
              desc: 'Configura recojos, horarios y residuos según tu necesidad.',
              icon: '/assets/icons/custom.png',
              freq: 'Flexible',
              price: 'Desde S/ 10',
              benefits: ['Horarios adaptados', 'Precios negociables', 'Ideal para eventos o zonas rurales'],
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <img src={pkg.icon} alt={pkg.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 text-center">{pkg.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{pkg.desc}</p>
              <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-1">
                {pkg.benefits.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <span className="block text-sm text-gray-500">{pkg.freq}</span>
                <span className="text-xl font-bold text-green-700">{pkg.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANES POR DURACIÓN */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">Planes por Duración</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { title: 'Semanal', desc: 'Recojo constante y adaptado a hogares activos.' },
            { title: 'Mensual', desc: 'Ideal para rutinas equilibradas de reciclaje.' },
            { title: 'Semestral', desc: 'Ahorra más con compromiso a largo plazo.' },
            { title: 'Anual', desc: 'Plan completo con mayor descuento y beneficios exclusivos.' },
          ].map((plan, i) => (
            <div key={i} className="bg-stone-100 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-green-800">{plan.title}</h3>
              <p className="text-gray-700 mt-2">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMOCIONES */}
      <section className="py-16 px-6 bg-stone-200">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">¡Recicla más y gana más!</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 text-lg">
          <p>
            Si entregas una mayor cantidad de residuos reciclables <strong>(por peso)</strong>, podrás acceder a
            descuentos especiales en tus próximas mensualidades. Además, los usuarios constantes recibirán <strong>bonificaciones</strong> como
            bolsas ecológicas, vales de descuento o puntos acumulables para canjear.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-green-800 text-white px-4 py-2 rounded-full font-semibold">
              ¡Ganamos todos con WeWin!
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center bg-green-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar tu plan?</h2>
        <p className="text-lg mb-6">Suscríbete a uno de nuestros paquetes y haz que tu reciclaje tenga un impacto real.</p>
        <button className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-stone-200 transition">
          Empezar ahora
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-stone-800 text-white text-center">
        <p>&copy; 2025 WeWin | Sistema de Recolección y Reciclaje Inteligente</p>
      </footer>
    </div>
  );
}
