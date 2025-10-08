import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Inicio from "./componentes/Inicio";
import Servicios from "./componentes/Servicios";
import Contacto from "./componentes/Contacto";
import Api from "./componentes/Api"; // 👈 Importamos el nuevo componente

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/api" element={<Api />} /> {/* 👈 Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
