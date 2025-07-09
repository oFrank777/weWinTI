import recojoBg from '../assets/img/recojo_bg.jpg';
import iconResiduos from '../assets/icons/residuos.png';
import iconCamion from '../assets/icons/camion.png';
import iconPlan from '../assets/icons/plan.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-white to-green-50 text-gray-800">
      {/* HERO */}
      <div
        className="flex items-center justify-center h-[50vh] bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${recojoBg})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-transparent to-green-700/60"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight mb-4">
            Gestión Integral de Recolección de Residuos
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium drop-shadow">
            Un sistema inteligente para hogares, empresas y administradores
          </p>
        </div>
      </div>

      {/* SERVICIOS PRINCIPALES */}
      <section className="py-12 px-8 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-900 tracking-tight">¿Qué Ofrecemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Reportar Residuos", desc: "Notifica fácilmente cuando tu contenedor esté lleno", icon: iconResiduos },
            { title: "Recojo Programado", desc: "El personal de transporte recoge los residuos según notificación", icon: iconCamion },
            { title: "Planes de Servicio", desc: "Elige entre planes semanales, mensuales o personalizados", icon: iconPlan },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl flex flex-col items-center hover:-translate-y-2 transition-all duration-300 group"
            >
              <img src={item.icon} alt={item.title} className="w-20 h-20 object-contain mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2 text-green-900 group-hover:text-green-800 transition">{item.title}</h3>
              <p className="text-center text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="py-12 px-8 bg-stone-200/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-900 tracking-tight">Roles del Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-green-900">Clientes (Hogar / Empresa)</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-left">
              <li>Registro con DNI, dirección y ubicación</li>
              <li>Reportar residuos con foto</li>
              <li>Seleccionar y pagar plan</li>
              <li>Historial de recolecciones y pagos</li>
            </ul>
          </div>
          <div className="bg-white/90 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-green-900">Personal de Transporte</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-left">
              <li>Recibe notificaciones asignadas</li>
              <li>Recolecta según zona y plan</li>
              <li>Registra el pesaje de residuos</li>
              <li>Consulta rutas y zonas activas</li>
            </ul>
          </div>
          <div className="bg-white/90 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-green-900">Administrador</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-left">
              <li>Gestiona usuarios y personal</li>
              <li>Supervisa solicitudes y delega</li>
              <li>Define tarifas y descuentos</li>
              <li>Evalúa rentabilidad de rutas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAPA Y HISTORIAL */}
      <section className="py-12 px-8 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-900 tracking-tight">Otras Funciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-stone-50/90 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-green-900">Visualización de Mapa</h3>
            <p className="text-gray-700">Consulta zonas activas y ubicaciones de clientes para una recolección eficiente.</p>
          </div>
          <div className="bg-stone-50/90 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-green-900">Historial y Rentabilidad</h3>
            <p className="text-gray-700">Cada solicitud y pago queda registrado, permitiendo análisis de costos por ruta y cliente.</p>
          </div>
        </div>
      </section>

    </div>
  );
}