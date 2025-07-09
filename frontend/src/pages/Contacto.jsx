import recojoBg from '../assets/img/recojo_bg.jpg';

export default function Contacto() {
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
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight mb-4">Contáctanos</h1>
          <p className="text-white text-xl md:text-2xl font-medium drop-shadow">¿Tienes dudas? ¡Estamos para ayudarte!</p>
        </div>
      </div>

      {/* INFORMACIÓN DE CONTACTO */}
      <section className="py-12 px-6 md:px-16 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-900 tracking-tight">Información de Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl flex flex-col items-center hover:-translate-y-2 transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 mb-4 text-green-900 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75l4.5 1.5a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 012.25-2.25h2.25a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 002.25 2.25l4.5-1.5M2.25 17.25l4.5-1.5a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 002.25 2.25h2.25a2.25 2.25 0 002.25-2.25v-2.25a2.25 2.25 0 012.25-2.25l4.5 1.5" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-green-900">Teléfono</h3>
            <p className="text-gray-700">+51 987 654 321</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl flex flex-col items-center hover:-translate-y-2 transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 mb-4 text-green-900 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0l-7.091-7.091A2.25 2.25 0 012.25 6.993V6.75" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-green-900">Correo Electrónico</h3>
            <p className="text-gray-700">contacto@wewin.pe</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md border border-green-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl flex flex-col items-center hover:-translate-y-2 transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 mb-4 text-green-900 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25 0 6.364 7.02 11.06 7.32 11.26a1.125 1.125 0 001.26 0c.3-.2 7.32-4.896 7.32-11.26 0-4.556-3.694-8.25-8.25-8.25zm0 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-green-900">Dirección</h3>
            <p className="text-gray-700">Av. Independencia 1234, Arequipa, Perú</p>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section className="py-12 px-6 md:px-16 bg-stone-200/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-900 tracking-tight">Envíanos un Mensaje</h2>
        <form className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl space-y-6 animate-fade-in border border-green-100">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-1">Nombre</label>
            <input
              type="text"
              id="nombre"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 transition"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          <div>
            <label htmlFor="correo" className="block text-gray-700 font-semibold mb-1">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 transition"
              placeholder="tucorreo@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-1">Mensaje</label>
            <textarea
              id="mensaje"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 transition"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* MAPA */}
      <section className="py-12 px-6 md:px-16 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-900 tracking-tight">Ubícanos</h2>
        <div className="w-full h-72 rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-green-100">
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


    </div>
  );
}