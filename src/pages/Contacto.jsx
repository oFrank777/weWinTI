export default function Contacto() {
  return (
    <div className="min-h-screen bg-stone-100 text-gray-800">
      {/* HERO */}
      <div className="flex items-center justify-center h-[40vh] bg-cover bg-center bg-[url('/assets/img/recojo_bg.jpg')] relative">
        <div className="absolute inset-0 bg-green-900 bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contáctanos</h1>
          <p className="text-white text-lg mt-2">¿Tienes dudas? ¡Estamos para ayudarte!</p>
        </div>
      </div>

      {/* INFORMACIÓN DE CONTACTO */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Información de Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-stone-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
            <p className="text-gray-700">+51 987 654 321</p>
          </div>
          <div className="bg-stone-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Correo Electrónico</h3>
            <p className="text-gray-700">contacto@wewin.pe</p>
          </div>
          <div className="bg-stone-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Dirección</h3>
            <p className="text-gray-700">Av. Independencia 1234, Arequipa, Perú</p>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section className="py-12 px-6 md:px-16 bg-stone-200">
        <h2 className="text-3xl font-bold text-center mb-8">Envíanos un Mensaje</h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded shadow space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-1">Nombre</label>
            <input
              type="text"
              id="nombre"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          <div>
            <label htmlFor="correo" className="block text-gray-700 font-semibold mb-1">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
              placeholder="tucorreo@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-1">Mensaje</label>
            <textarea
              id="mensaje"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-800"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* MAPA */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Ubícanos</h2>
        <div className="w-full h-72 rounded shadow overflow-hidden">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.772093113158!2d-71.5369!3d-16.409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b7c066db6fd%3A0xdbe3810631c014dc!2sUNSA!5e0!3m2!1ses-419!2spe!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-stone-800 text-white text-center">
        <p>&copy; 2025 WeWin | Sistema de Recolección y Reciclaje Inteligente</p>
      </footer>
    </div>
  );
}
