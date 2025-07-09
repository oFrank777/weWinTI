export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-green-900 to-green-700 text-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2">
        <p className="text-sm sm:text-base font-medium tracking-wide">
          &copy; 2025 WeWin. Todos los derechos reservados.
        </p>
        <p className="text-sm sm:text-base font-light">
          Sistema de Recolección y Reciclaje Inteligente
        </p>
      </div>
    </footer>
  );
}
