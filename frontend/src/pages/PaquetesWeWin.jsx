import React from 'react';
import recojoBg from '../assets/img/recojo_bg.jpg';
import iconHogar from '../assets/icons/hogar.gif';
import iconEmpresa from '../assets/icons/empresa.gif';
import iconCustom from '../assets/icons/custom.gif';

export default function Paquetes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-white to-green-50 text-gray-800">
      {/* HERO */}
      <div className="relative h-[45vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${recojoBg})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-transparent to-green-700/60"></div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg tracking-tight mb-4">Planes y Paquetes</h1>
          <p className="text-lg md:text-xl font-medium drop-shadow">Elige el plan que se adapte a tus necesidades de recolección y gana con tu reciclaje</p>
        </div>
      </div>

      {/* PLANES PRINCIPALES */}
      <section className="py-16 px-6 md:px-20 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-900 tracking-tight">Nuestros Paquetes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Hogar Sostenible',
              desc: 'Para familias que clasifican residuos y requieren recojo frecuente pero moderado.',
              icon: iconHogar,
              freq: '1 recojo por semana',
              price: 'S/ 15 mensual',
              benefits: ['Recojo programado', 'Notificaciones automáticas', 'Acceso a recompensas'],
            },
            {
              title: 'Empresas Verdes',
              desc: 'Negocios o tiendas que generan mayor volumen de reciclaje.',
              icon: iconEmpresa,
              freq: '2 recojos por semana',
              price: 'S/ 40 mensual',
              benefits: ['Recojo frecuente', 'Estadísticas detalladas', 'Soporte preferencial'],
            },
            {
              title: 'Plan Personalizado',
              desc: 'Configura recojos, horarios y residuos según tu necesidad.',
              icon: iconCustom,
              freq: 'Flexible',
              price: 'Desde S/ 10',
              benefits: ['Horarios adaptados', 'Precios negociables', 'Ideal para eventos o zonas rurales'],
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center hover:-translate-y-2 group"
            >
              <img src={pkg.icon} alt={pkg.title} className="w-20 h-20 object-contain mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-green-800 text-center mb-2 group-hover:text-green-900 transition">{pkg.title}</h3>
              <p className="text-gray-700 mt-2 text-center">{pkg.desc}</p>
              <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-1 text-left w-full max-w-xs mx-auto">
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
      <section className="py-16 px-4 md:px-20 bg-gradient-to-br from-green-50 via-white to-stone-100">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10 tracking-tight">Planes por Duración</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
          {[
            { title: 'Semanal', desc: 'Recojo constante y adaptado a hogares activos.' },
            { title: 'Mensual', desc: 'Ideal para rutinas equilibradas de reciclaje.' },
            { title: 'Semestral', desc: 'Ahorra más con compromiso a largo plazo.' },
            { title: 'Anual', desc: 'Plan completo con mayor descuento y beneficios exclusivos.' },
          ].map((plan, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-green-800">{plan.title}</h3>
              <p className="text-gray-700 mt-2">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMOCIONES */}
      <section className="py-16 px-6 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8 tracking-tight">¡Recicla más y gana más!</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 text-lg">
          <p>
            Si entregas una mayor cantidad de residuos reciclables <strong>(por peso)</strong>, podrás acceder a
            descuentos especiales en tus próximas mensualidades. Además, los usuarios constantes recibirán <strong>bonificaciones</strong> como
            bolsas ecológicas, vales de descuento o puntos acumulables para canjear.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-green-800 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              ¡Ganamos todos con WeWin!
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center bg-gradient-to-r from-green-900 to-green-700 text-white rounded-b-3xl shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar tu plan?</h2>
        <p className="text-lg mb-6">Suscríbete a uno de nuestros paquetes y haz que tu reciclaje tenga un impacto real.</p>
        <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-stone-200 transition shadow-lg">
          Empezar ahora
        </button>
      </section>


    </div>
  );
}