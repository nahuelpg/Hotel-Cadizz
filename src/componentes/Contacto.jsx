import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css"; // Asegurate de tener estilos

export default function Contacto() {
  const form = useRef();
  const [mensaje, setMensaje] = useState("");

  const enviarCorreo = (e) => {
    e.preventDefault();
    setMensaje("");

    emailjs
      .sendForm(
        "service_yto9rcb",  // tu Service ID
        "template_9hhfw76", // tu Template ID
        form.current,
        "n6l2cUd_6kOFNvOED" // tu Public Key
      )
      .then(
        () => {
          setMensaje("✅ Correo enviado con éxito");
          form.current.reset();
        },
        (error) => {
          setMensaje("❌ Error al enviar: " + error.text);
        }
      );
  };

  return (
    <section className="contacto-container">
      <div className="contacto-form">
        <h2>Contacto</h2>
        <form ref={form} onSubmit={enviarCorreo}>
          <input type="text" name="user_name" placeholder="Tu nombre" required />
          <input type="email" name="user_email" placeholder="Tu correo" required />
          <textarea name="message" placeholder="Escribe tu mensaje" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>
        {mensaje && <p>{mensaje}</p>}
      </div>

      <div className="contacto-mapa">
        <iframe
          title="Ubicación Mónaco Automotores"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.2468292582213!2d-65.41105632468549!3d-24.790759377965736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc2c3e764c4f1%3A0x5b5b76031b05b49!2sJunin%2031%2C%20A4400%20Salta!5e0!3m2!1ses!2sar!4v1707512345678!5m2!1ses!2sar"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
