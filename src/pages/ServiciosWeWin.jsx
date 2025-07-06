import recojoBg from '../assets/img/recojo_bg.jpg';
import iconNotificacion from '../assets/icons/notificacion.gif';
import iconCamion from '../assets/icons/camion.gif';
import iconDinero from '../assets/icons/dinero.gif';
import iconClasificacion from '../assets/icons/clasificacion.gif';
import iconImpacto from '../assets/icons/impacto.gif';
import iconGanas from '../assets/icons/ganas.gif';
import iconMovil from '../assets/icons/movil.gif';

const servicios = [
  {
    title: "Notificación Inteligente",
    desc: "Desde la app notificas la cantidad de residuos listos para recojo, incluyendo peso estimado y fotografía.",
    icon: <img src={iconNotificacion} alt="Notificación" className="w-20 h-20 object-contain mx-auto mb-4 drop-shadow-lg" />,
  },
  {
    title: "Recojo Eficiente",
    desc: "El vehículo recolector solo va cuando se justifica la rentabilidad, optimizando rutas y combustible.",
    icon: <img src={iconCamion} alt="Recojo" className="w-20 h-20 object-contain mx-auto mb-4 drop-shadow-lg" />,
  },
  {
    title: "Pago Justo",
    desc: "El sistema te recompensa económicamente por cada kilo de residuo entregado, dependiendo del tipo.",
    icon: <img src={iconDinero} alt="Dinero" className="w-20 h-20 object-contain mx-auto mb-4 drop-shadow-lg" />,
  },
  {
    title: "Clasificación Obligatoria",
    desc: "Para ser parte, debes clasificar correctamente tus residuos: orgánicos, cartón, plástico, entre otros.",
    icon: <img src={iconClasificacion} alt="Clasificación" className="w-20 h-20 object-contain mx-auto mb-4 drop-shadow-lg" />,
  },
];

const beneficios = [
  {
    title: "Impacto Ambiental",
    desc: "Contribuyes al reciclaje y reducción de basura, impulsando la economía circular.",
    icon: <img src={iconImpacto} alt="Impacto" className="w-20 h-20 mx-auto mb-4 object-contain drop-shadow-lg" />,
  },
  {
    title: "Ganas por Reciclar",
    desc: "Cada kilo cuenta. Tus residuos tienen valor. Nosotros te pagamos por ellos.",
    icon: <img src={iconGanas} alt="Ganas" className="w-20 h-20 mx-auto mb-4 object-contain drop-shadow-lg" />,
  },
  {
    title: "Gestión 100% Móvil",
    desc: "Desde el celular puedes notificar, hacer seguimiento, recibir pagos y consultar historial.",
    icon: <img src={iconMovil} alt="Móvil" className="w-20 h-20 mx-auto mb-4 object-contain drop-shadow-lg" />,
  },
];

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-white to-green-50 text-gray-800">
      {/* HERO */}
      <div
        className="flex items-center justify-center h-[45vh] bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${recojoBg})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-transparent to-green-700/60"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight mb-4">Servicios Inteligentes</h1>
          <p className="text-white text-xl md:text-2xl font-medium drop-shadow">Conectando sostenibilidad, tecnología y recompensas</p>
        </div>
      </div>

      {/* SECCIÓN DE SERVICIOS */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-900 tracking-tight">¿Qué hacemos en WeWin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {servicios.map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md border border-green-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center hover:-translate-y-2 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2 mt-2 group-hover:text-green-900 transition">{item.title}</h3>
              <p className="text-gray-700 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACTO */}
      <section className="py-16 px-4 md:px-20 bg-gradient-to-br from-green-50 via-white to-stone-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-900 tracking-tight">¿Por qué usar WeWin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {beneficios.map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md border border-green-100 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col items-center"
            >
              <div className="transition-transform duration-300 hover:scale-110">{item.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-2 mt-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-gradient-to-r from-green-900 to-green-700 text-white text-center mt-12 shadow-inner">
        <p className="font-semibold tracking-wide">&copy; 2025 WeWin | Sistema de Recolección y Reciclaje Inteligente</p>
      </footer>
    </div>
  );
}