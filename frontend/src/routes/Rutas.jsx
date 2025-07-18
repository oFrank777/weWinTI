import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout.jsx";

import NoFoundPage from '../pages/NoFoundPage.jsx';
import Home from '../pages/Home.jsx';
import LoginPage from "../pages/LoginPage.jsx";
import Registrarse from "../pages/Registrarse.jsx";
import ServiciosWeWein from "../pages/ServiciosWeWin.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Contacto from "../pages/Contacto.jsx";
import MapaClientes from '../pages/MapaClientes.jsx';
import LayoutAdministrador from "../layouts/LayoutAdministrador.jsx";
import PanelEmpleados from '../pages/PanelEmpleados.jsx';
import PanelPaquetes from '../pages/PanelPaquetes.jsx';
import PanelClientes from '../pages/PanelClientes.jsx';
import PaquetesWeWin from '../pages/PaquetesWeWin.jsx';
import Pago from '../pages/Pago.jsx';
import PanelPlanes from '../pages/PanelPlanes.jsx';
import { AuthProvider } from '../contex/ContexAuth.jsx';

import PanelTrabajador from '../pages/PanelTrabajador.jsx';
import SolicitarRecojo from '../pages/SolicitarRecojo.jsx';

// 🆕 Importa los nuevos componentes
import VerMapa from '../pages/VerMapa.jsx';
import ActualizarDatos from '../pages/ActualizarDatos.jsx';

export default function Rutas() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NoFoundPage />,
      children: [
        {
          path: "solicitar-recojo",
          element: <SolicitarRecojo />
        },
        {
          path: "trabajador",
          element: <PanelTrabajador />
        },
        { index: true, element: <Home /> },
        { path: "login", element: <LoginPage /> },
        { path: "servicios", element: <ServiciosWeWein /> },
        { path: "nosotros", element: <Nosotros /> },
        { path: "contacto", element: <Contacto /> },
        { path: "paquetes", element: <PaquetesWeWin /> },
        { path: "registrarse", element: <Registrarse /> },
        { path: "pago", element: <Pago /> },
        { path: "planes", element: <PanelPlanes /> },
        { path: "clientes", element: <PanelClientes /> },
        { path: "empleados", element: <PanelEmpleados /> },
        { path: "paquetes-admin", element: <PanelPaquetes /> },
        { path: "clientes/mapa", element: <MapaClientes /> },
        { path: "administrar", element: <LayoutAdministrador /> },
        
        // 🆕 Nuevas rutas agregadas:
        { path: "panel-planes", element: <PanelPlanes /> },
        { path: "ver-mapa", element: <VerMapa /> },
        { path: "actualizar-datos", element: <ActualizarDatos /> },

        { path: "*", element: <NoFoundPage /> }
      ]
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  );
}
