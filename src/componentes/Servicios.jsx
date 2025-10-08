import React from "react";
import autos from "../auto"; // Importa los datos del array
import AutoCard from "./AutoCard"; // Importa el componente para mostrar cada auto
import "./Servicios.css"; // Si querés darle estilo aparte (opcional)

export default function Servicios() {
  return (
    <section style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Nuestros Autos</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {autos.map((auto) => (
          <AutoCard key={auto.id} auto={auto} />
        ))}
      </div>
    </section>
  );
}
