export default function AutoCard({ auto }) {
  return (
    <div
      style={{
        border: "1px solid #444",
        borderRadius: "12px",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        width: "300px",
        padding: "15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
      }}
    >
      <img
        src={auto.imagen}
        alt={auto.nombre}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3 style={{ marginTop: "10px" }}>{auto.nombre}</h3>
      <p>{auto.descripcion}</p>
      <strong style={{ color: "#00bfff" }}>{auto.precio}</strong>
    </div>
  );
}
