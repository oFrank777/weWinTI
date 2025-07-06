import recojoBg from '../assets/img/recojo_bg.jpg';
import equipoImg from '../assets/img/equipo.png';
import misionImg from '../assets/img/mision.png';
import visionImg from '../assets/img/vision.png';
import impaco from '../assets/img/impaco.jpg';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-white to-green-50 text-gray-800">
      {/* HERO */}
      <div
        className="flex items-center justify-center h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${recojoBg})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-transparent to-green-700/60"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight mb-4">Sobre Nosotros</h1>
          <p className="text-white text-xl md:text-2xl font-medium drop-shadow">Comprometidos con el reciclaje inteligente y la sostenibilidad</p>
        </div>
      </div>

      {/* QUIÉNES SOMOS */}
      <section className="py-12 px-6 md:px-16 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-900 tracking-tight">¿Quiénes Somos?</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <img src={equipoImg} alt="Nuestro equipo" className="w-full md:w-1/2 rounded-3xl shadow-xl object-cover h-64 md:h-80 mb-6 md:mb-0" />
          <p className="text-gray-700 text-justify leading-relaxed">
            Somos un equipo multidisciplinario que ha desarrollado <strong>weWin</strong>, un sistema inteligente para la gestión de residuos sólidos en hogares y empresas. Nuestro objetivo es fomentar una cultura de reciclaje responsable en Arequipa, conectando a los ciudadanos con un servicio eficiente de recolección a cambio de incentivos económicos.
          </p>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="py-12 px-6 md:px-16 bg-stone-200/80 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <img src={misionImg} alt="Misión" className="w-32 h-32 object-cover rounded-full mb-4 drop-shadow-lg" />
            <h3 className="text-2xl font-bold mb-2 text-green-900">Nuestra Misión</h3>
            <p className="text-gray-700 text-center">Promover el reciclaje responsable y la economía circular, facilitando la gestión de residuos con tecnología y compromiso social.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <img src={visionImg} alt="Visión" className="w-32 h-32 object-cover rounded-full mb-4 drop-shadow-lg" />
            <h3 className="text-2xl font-bold mb-2 text-green-900">Nuestra Visión</h3>
            <p className="text-gray-700 text-center">Ser líderes en soluciones inteligentes de reciclaje en Latinoamérica, generando impacto ambiental y social positivo.</p>
          </div>
        </div>
      </section>

      {/* PROPÓSITO */}
      <section className="py-12 px-6 md:px-16 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-900 tracking-tight">Nuestro Propósito</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-stone-50/90 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-900">Conciencia Ambiental</h3>
            <p className="text-gray-700">Promovemos el reciclaje como una acción colectiva para cuidar nuestro entorno.</p>
          </div>
          <div className="bg-stone-50/90 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-900">Tecnología Útil</h3>
            <p className="text-gray-700">Utilizamos herramientas digitales modernas para conectar a usuarios, recolectores y administradores.</p>
          </div>
          <div className="bg-stone-50/90 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-900">Impacto Social</h3>
            <p className="text-gray-700">Generamos oportunidades económicas para la ciudadanía y beneficios ambientales para todos.</p>
          </div>
        </div>
      </section>

      {/* NUESTRO EQUIPO */}
      <section className="py-12 px-6 md:px-16 bg-stone-200/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-900 tracking-tight">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Ciudadanos Clasificadores</h3>
            <p className="text-gray-700">Usuarios registrados que separan residuos en casa o en su empresa y los reportan para su recolección.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Recolectores</h3>
            <p className="text-gray-700">Encargados de recoger, pesar y validar los residuos clasificados reportados por los usuarios.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Administradores</h3>
            <p className="text-gray-700">Gestionan zonas, planes, recolectores, usuarios y verifican los datos para garantizar la eficiencia del servicio.</p>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="py-12 px-6 md:px-16 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-900 tracking-tight">Nuestro Impacto</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="flex-1">
            <p className="text-gray-700 text-justify leading-relaxed">
              Con <strong>weWin</strong>, buscamos reducir la contaminación ambiental en Arequipa, incrementar el volumen de residuos reciclables procesados y crear una economía circular que beneficie tanto al medio ambiente como a la sociedad.
            </p>
            <ul className="mt-6 text-left list-disc list-inside text-green-900 space-y-2">
              <li>+10 toneladas de residuos reciclados</li>
              <li>+500 hogares y empresas beneficiados</li>
              <li>+1000 recojos programados</li>
            </ul>
          </div>
          <img src={impaco} alt="Impacto" className="w-full md:w-1/2 rounded-3xl shadow-xl object-cover h-64 md:h-80" />
        </div>
      </section>

      {/* CONTACTO / CTA */}
      <section className="py-12 px-6 md:px-16 bg-gradient-to-br from-green-100 via-stone-200 to-green-50 text-center rounded-b-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-900 tracking-tight">¿Quieres ser parte del cambio?</h2>
        <p className="mb-6 text-gray-700">Únete a weWin y empieza a reciclar de forma inteligente hoy mismo.</p>
        <a href="/contacto" className="inline-block bg-green-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition">Contáctanos</a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-gradient-to-r from-green-900 to-green-700 text-white text-center mt-12 shadow-inner">
        <p className="font-semibold tracking-wide">&copy; 2025 WeWin | Sistema de Recolección y Reciclaje Inteligente</p>
      </footer>
    </div>
  );
}