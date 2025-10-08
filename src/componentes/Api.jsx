import { useEffect, useState } from "react";
import "./Api.css";

export default function Api() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/ARS")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener datos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando cotizaciones...</p>;
  if (!data || !data.rates) return <p>No se encontraron cotizaciones.</p>;

  const monedas = [
    { codigo: "USD", nombre: "Dólar estadounidense", bandera: "https://flagcdn.com/w40/us.png" },
    { codigo: "EUR", nombre: "Euro", bandera: "https://flagcdn.com/w40/eu.png" },
    { codigo: "BRL", nombre: "Real brasileño", bandera: "https://flagcdn.com/w40/br.png" },
    { codigo: "CLP", nombre: "Peso chileno", bandera: "https://flagcdn.com/w40/cl.png" },
  ];

  return (
    <div className="api-container">
      <h1 className="api-title">🌐 API – Cotizaciones</h1>
      <p>Base: {data.base_code} — Fecha: {data.time_last_update_utc}</p>

      <div className="api-grid">
        {monedas.map((m) => (
          <div key={m.codigo} className="api-card">
            <img src={m.bandera} alt={m.codigo} className="api-flag" />
            <h2>{m.codigo}</h2>
            <p>{m.nombre}</p>
            <p><strong>1 {data.base_code}</strong> = {data.rates[m.codigo]?.toFixed(4)} {m.codigo}</p>
            <p><strong>1 {m.codigo}</strong> = {(1 / data.rates[m.codigo]).toFixed(2)} {data.base_code}</p>
            <p>Fuente: open.er-api.com</p>
          </div>
        ))}
      </div>
    </div>
  );
}
