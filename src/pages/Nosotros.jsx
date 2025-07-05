export default function Nosotros() {
  return (
    <div className="min-h-screen bg-stone-100 text-gray-800">
      {/* HERO */}
      <div className="flex items-center justify-center h-[40vh] bg-cover bg-center bg-[url('/assets/img/recojo_bg.jpg')] relative">
        <div className="absolute inset-0 bg-green-900 bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Sobre Nosotros</h1>
          <p className="text-white text-lg mt-2">Comprometidos con el reciclaje inteligente y la sostenibilidad</p>
        </div>
      </div>

      {/* QUIÉNES SOMOS */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">¿Quiénes Somos?</h2>
        <p className="text-gray-700 text-justify leading-relaxed max-w-4xl mx-auto">
          Somos un equipo multidisciplinario que ha desarrollado <strong>weWin</strong>, un sistema inteligente para la gestión de residuos sólidos en hogares y empresas. Nuestro objetivo es fomentar una cultura de reciclaje responsable en Arequipa, conectando a los ciudadanos con un servicio eficiente de recolección a cambio de incentivos económicos.
        </p>
      </section>

      {/* PROPÓSITO */}
      <section className="py-12 px-6 md:px-16 bg-stone-200">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Propósito</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Conciencia Ambiental</h3>
            <p className="text-gray-700">Promovemos el reciclaje como una acción colectiva para cuidar nuestro entorno.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Tecnología Útil</h3>
            <p className="text-gray-700">Utilizamos herramientas digitales modernas para conectar a usuarios, recolectores y administradores.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Impacto Social</h3>
            <p className="text-gray-700">Generamos oportunidades económicas para la ciudadanía y beneficios ambientales para todos.</p>
          </div>
        </div>
      </section>

      {/* NUESTRO EQUIPO */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-stone-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Ciudadanos Clasificadores</h3>
            <p className="text-gray-700">Usuarios registrados que separan residuos en casa o en su empresa y los reportan para su recolección.</p>
          </div>
          <div className="bg-stone-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Recolectores</h3>
            <p className="text-gray-700">Encargados de recoger, pesar y validar los residuos clasificados reportados por los usuarios.</p>
          </div>
          <div className="bg-stone-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Administradores</h3>
            <p className="text-gray-700">Gestionan zonas, planes, recolectores, usuarios y verifican los datos para garantizar la eficiencia del servicio.</p>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="py-12 px-6 md:px-16 bg-stone-200">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Impacto</h2>
        <p className="text-gray-700 text-justify max-w-4xl mx-auto leading-relaxed">
          Con <strong>weWin</strong>, buscamos reducir la contaminación ambiental en Arequipa, incrementar el volumen de residuos reciclables procesados y crear una economía circular que beneficie tanto al medio ambiente como a la sociedad.
        </p>
      </section>

      {/* CONTACTO / CTA */}
      <section className="py-12 px-6 md:px-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Quieres ser parte del cambio?</h2>
        <p className="mb-6 text-gray-700">Únete a weWin y empieza a reciclar de forma inteligente hoy mismo.</p>
        <a href="/contacto" className="inline-block bg-green-900 text-white px-6 py-3 rounded hover:bg-green-800 transition">Contáctanos</a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-stone-800 text-white text-center">
        <p>&copy; 2025 WeWin | Sistema de Recolección y Reciclaje Inteligente</p>
      </footer>
    </div>
  );
}
