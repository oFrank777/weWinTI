import { Link } from "react-router-dom";
import { useAuth } from '../contex/ContexAuth';
import { useState } from "react";
import logo from '../assets/icons/logowewin.png';

export default function NavBar() {
  const { authState, logout } = useAuth();
  const { email } = authState;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="bg-slate-950 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center text-xl font-bold text-white gap-2" onClick={handleLinkClick}>
          <img src={logo} alt="We Win Logo" className="w-10 h-10 object-contain drop-shadow-md" />
          We win
        </Link>

        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          className={`flex-col gap-2 absolute left-0 right-0 top-[64px] bg-slate-950 shadow-xl rounded-b-2xl transition-all duration-300
            ${menuOpen ? "flex" : "hidden"}
            md:static md:flex md:flex-row md:items-center md:gap-6 md:bg-transparent md:shadow-none md:rounded-none md:top-0 md:left-0 md:right-0`}
        >
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
          <Link to="/nosotros" className="nav-link" onClick={handleLinkClick}>Nosotros</Link>
          <Link to="/contacto" className="nav-link" onClick={handleLinkClick}>Contacto</Link>
          <Link to="/clientes" className="nav-link" onClick={handleLinkClick}>Clientes</Link>
          <Link to="/empleados" className="nav-link" onClick={handleLinkClick}>Empleados</Link>
          <Link to="/servicios" className="nav-link" onClick={handleLinkClick}>Servicios</Link>
          <Link to="/paquetes" className="nav-link" onClick={handleLinkClick}>Paquetes</Link>

          {!email ? (
            <>
              <Link to="/login" className="nav-link" onClick={handleLinkClick}>Login</Link>
              <Link to="/registrarse" className="nav-link" onClick={handleLinkClick}>Registrarse</Link>
            </>
          ) : (
            <div className="flex items-center gap-4 px-2">
              <span className="text-white text-sm">Bienvenido, {email}</span>
              <button
                onClick={() => {
                  logout();
                  handleLinkClick();
                }}
                className="text-white bg-blue-500 hover:bg-sky-700 rounded-lg px-6 py-2 font-semibold transition"
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>

      <style>{`
        .nav-link {
          display: block;
          padding: 0.75rem 1.25rem;
          color: #fff;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: background 0.2s, color 0.2s;
        }
        .nav-link:hover {
          background: #1e293b;
          color: #38bdf8;
        }
        @media (min-width: 768px) {
          .nav-link {
            padding: 0.5rem 1rem;
            margin: 0 0.25rem;
          }
        }
      `}</style>
    </header>
  );
}
