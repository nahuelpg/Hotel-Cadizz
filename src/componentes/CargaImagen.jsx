import { useState } from "react";

export default function CargaImagen() {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const manejarArchivo = (e) => {
    setError("");
    setPreview(null);

    const file = e.target.files?.[0];
    if (!file) return;

    // Validar que sea imagen
    if (!file.type.startsWith("image/")) {
      setError("El archivo seleccionado no es una imagen válida.");
      return;
    }

    // Crear URL temporal para previsualizar
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <section style={{ textAlign: "center" }}>
      <h2>Subir imagen</h2>
      <input type="file" accept="image/*" onChange={manejarArchivo} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {preview && (
        <img
          src={preview}
          alt="Vista previa"
          style={{ marginTop: 10, maxWidth: "300px" }}
        />
      )}
    </section>
  );
}
