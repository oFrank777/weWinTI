import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Simulación de datos de clientes en diferentes distritos de Arequipa
const notificacionesMock = [
  {
    cliente: "Carlos Fernández Divala",
    dni: "12345678",
    email: "carlos@mail.com",
    telefono: "967854563",
    direccion: "Calle Los Pinos 120, Cerro Colorado, Arequipa",
    lat: -16.3375, lng: -71.5702,
    mensaje: "Por favor recoger residuos orgánicos.",
    fecha: "2025-07-09 10:30",
  },
  {
    cliente: "Ana Torres Quispe",
    dni: "87654321",
    email: "ana@mail.com",
    telefono: "987654321",
    direccion: "Av. Arequipa 500, Paucarpata, Arequipa",
    lat: -16.4382, lng: -71.4977,
    mensaje: "Contenedor lleno, urgente.",
    fecha: "2025-07-09 09:15",
  },
  {
    cliente: "Luis Ramos Paredes",
    dni: "11223344",
    email: "luis@mail.com",
    telefono: "912345678",
    direccion: "Jr. Lima 200, Miraflores, Arequipa",
    lat: -16.4061, lng: -71.5192,
    mensaje: "Recoger reciclables.",
    fecha: "2025-07-09 08:50",
  },
  {
    cliente: "María Huanca Soto",
    dni: "55667788",
    email: "maria@mail.com",
    telefono: "954321789",
    direccion: "Av. La Marina 300, Yanahuara, Arequipa",
    lat: -16.3987, lng: -71.5482,
    mensaje: "Recoger residuos inorgánicos.",
    fecha: "2025-07-09 11:10",
  },
  {
    cliente: "Pedro Salas Núñez",
    dni: "99887766",
    email: "pedro@mail.com",
    telefono: "981234567",
    direccion: "Calle Cusco 150, Socabaya, Arequipa",
    lat: -16.4645, lng: -71.5321,
    mensaje: "Recoger residuos biodegradables.",
    fecha: "2025-07-09 12:00",
  },
];

const carroPos = { lat: -16.4200, lng: -71.5300 }; // Posición simulada del trabajador (centro Arequipa)

export default function PanelTrabajador() {
  const [notificaciones, setNotificaciones] = useState(notificacionesMock);
  const [selected, setSelected] = useState(null);
  const [residuos, setResiduos] = useState('');
  const [historial, setHistorial] = useState([]);

  // Ruta del carro al cliente seleccionado
  const ruta = selected !== null
    ? [
        [carroPos.lat, carroPos.lng],
        [notificaciones[selected].lat, notificaciones[selected].lng]
      ]
    : [];

  // Centrar el mapa en el cliente seleccionado
  function FlyToCliente({ position }) {
    const map = useMap();
    React.useEffect(() => {
      if (position) map.flyTo(position, 14);
    }, [position]);
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-6 flex flex-col md:flex-row gap-6">
      {/* Notificaciones */}
      <aside className="w-full md:w-1/3 bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-green-200 flex flex-col">
        <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center gap-2">
          <span className="inline-block w-2 h-6 bg-blue-400 rounded-full"></span>
          Notificaciones
        </h3>
        <ul className="space-y-4 overflow-y-auto max-h-[300px] md:max-h-[500px] pr-2">
          {notificaciones.length === 0 ? (
            <li className="text-gray-400 text-lg text-center">No hay notificaciones pendientes.</li>
          ) : (
            notificaciones.map((n, i) => (
              <li
                key={i}
                className={`cursor-pointer bg-blue-50 rounded-lg shadow px-4 py-3 border-l-4 border-blue-500 hover:bg-blue-100 transition-all ${
                  selected === i ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setSelected(i)}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-900">{n.cliente}</span>
                  <span className="ml-auto text-xs text-gray-400">{n.fecha}</span>
                </div>
                <div className="text-gray-700 mt-1">{n.mensaje}</div>
                <div className="text-xs text-gray-500">{n.direccion}</div>
              </li>
            ))
          )}
        </ul>
        {/* Historial de recogidas */}
        <div className="mt-8">
          <h4 className="text-lg font-bold mb-2 text-green-700 flex items-center gap-2">
            <span className="inline-block w-2 h-5 bg-green-400 rounded-full"></span>
            Historial de Recogidas
          </h4>
          <ul className="space-y-2 text-sm max-h-[180px] overflow-y-auto">
            {historial.length === 0 ? (
              <li className="text-gray-400 text-center">No hay historial.</li>
            ) : (
              historial.map((h, i) => (
                <li key={i} className="bg-green-50 rounded px-3 py-2 border-l-4 border-green-400 shadow">
                  <div className="flex justify-between">
                    <span className="font-semibold text-green-900">{h.cliente}</span>
                    <span className="text-xs text-gray-400">{h.recogidoEn}</span>
                  </div>
                  <div className="text-gray-700">{h.mensaje}</div>
                  <div className="text-xs text-green-700">Residuos: {h.residuos} kg</div>
                </li>
              ))
            )}
          </ul>
        </div>
      </aside>

      {/* Mapa y detalle */}
      <main className="flex-1 flex flex-col gap-6">
        <section className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-green-200 mb-4 flex flex-col" style={{minHeight: 400}}>
          <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-green-400 rounded-full"></span>
            Mapa de Zonas y Rutas
          </h3>
          <div className="flex-1 min-h-[300px] md:min-h-[450px] rounded-xl overflow-hidden border-2 border-green-100 shadow-inner">
            <MapContainer
              center={[-16.42, -71.53]}
              zoom={12}
              style={{ width: '100%', height: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {/* Marcadores de clientes */}
              {notificaciones.map((c, i) => (
                <Marker
                  key={i}
                  position={[c.lat, c.lng]}
                  eventHandlers={{
                    click: () => setSelected(i)
                  }}
                >
                  <Popup>
                    <div className="font-bold text-green-800">{c.cliente}</div>
                    <div className="text-sm text-gray-700">{c.direccion}</div>
                  </Popup>
                </Marker>
              ))}
              {/* Carro del trabajador */}
              <Marker
                position={[carroPos.lat, carroPos.lng]}
                icon={window.L && window.L.icon({
                  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
                  iconSize: [40, 40],
                  iconAnchor: [20, 40],
                })}
              >
                <Popup>
                  <div className="font-bold text-green-800">Tú (Trabajador)</div>
                </Popup>
              </Marker>
              {/* Ruta del carro al cliente seleccionado */}
              {ruta.length === 2 && (
                <Polyline positions={ruta} color="green" />
              )}
              {/* Centrar mapa en cliente seleccionado */}
              {selected !== null && (
                <FlyToCliente position={[notificaciones[selected].lat, notificaciones[selected].lng]} />
              )}
            </MapContainer>
          </div>
        </section>

        {/* Detalle debajo del mapa */}
        <section className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-blue-200">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Detalle de Recojo</h3>
          {selected === null ? (
            <div className="text-gray-500">Selecciona una notificación para ver detalles.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="mb-2">
                  <span className="font-bold text-green-800">Cliente:</span> {notificaciones[selected].cliente}
                </div>
                <div className="mb-2">
                  <span className="font-bold text-green-800">DNI:</span> {notificaciones[selected].dni}
                </div>
                <div className="mb-2">
                  <span className="font-bold text-green-800">Correo:</span> {notificaciones[selected].email}
                </div>
                <div className="mb-2">
                  <span className="font-bold text-green-800">Teléfono:</span> {notificaciones[selected].telefono}
                </div>
                <div className="mb-2">
                  <span className="font-bold text-green-800">Dirección:</span> {notificaciones[selected].direccion}
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-green-800">Mensaje:</span> {notificaciones[selected].mensaje}
                </div>
                <div className="mb-2">
                  <span className="font-bold text-green-800">Fecha:</span> {notificaciones[selected].fecha}
                </div>
                <div className="mb-4">
                  <label className="block font-bold text-green-800 mb-1">Cantidad de residuos recogidos (kg):</label>
                  <input
                    type="number"
                    min="0"
                    className="border rounded px-3 py-1 w-32"
                    value={residuos}
                    onChange={e => setResiduos(e.target.value)}
                  />
                </div>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded shadow transition"
                  onClick={() => {
                    if (selected !== null) {
                      setHistorial([
                        {
                          ...notificaciones[selected],
                          residuos: residuos || "0",
                          recogidoEn: new Date().toLocaleString(),
                        },
                        ...historial,
                      ]);
                      setNotificaciones(notificaciones.filter((_, i) => i !== selected));
                      setSelected(null);
                      setResiduos('');
                    }
                  }}
                >
                  RECOGIDO
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// Centrar el mapa en el cliente seleccionado
function FlyToCliente({ position }) {
  const map = useMap();
  React.useEffect(() => {
    if (position) map.flyTo(position, 14);
  }, [position]);
  return null;
}