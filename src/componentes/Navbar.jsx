import { NavLink } from "react-router-dom";
import "./Navbar.css"; // si después querés darle estilos

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", display: "flex", gap: "20px" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "blue" : "white",
          textDecoration: "none",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Inicio
      </NavLink>

      <NavLink
        to="/servicios"
        style={({ isActive }) => ({
          color: isActive ? "blue" : "white",
          textDecoration: "none",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Servicios
      </NavLink>

      <NavLink
        to="/contacto"
        style={({ isActive }) => ({
          color: isActive ? "blue" : "white",
          textDecoration: "none",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Contacto
      </NavLink>

      {/* 🔹 Nuevo enlace para la API */}
      <NavLink
        to="/api"
        style={({ isActive }) => ({
          color: isActive ? "blue" : "white",
          textDecoration: "none",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        API
      </NavLink>
    </nav>
  );
}
