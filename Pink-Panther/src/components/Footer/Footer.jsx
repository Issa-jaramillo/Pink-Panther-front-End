import React from "react";
import "./Footer.css";
import logo from "../../../public/logo.png"

const NewsletterSignup = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Aca se puede manejar la suscripción del usuario
    const email = e.target.email.value;
    console.log("Email suscrito:", email);
    // Limpia el campo de entrada después de suscribirse
    e.target.email.value = "";
  };

  return (
    <div className="sb__footer-links_div">
      <h4>Newsletter</h4>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          required
        />
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section__pading">
        <div className="sb__footer-links">
        <img src={logo} alt="Logo" className="footer-logo" /> 
          <div className="sb__footer-links_div">
            <h4>Categorías</h4>
            <a href="/tabla">
              <p>Tabla de talles</p>
            </a>
            <a href="/preguntas">
              <p>Preguntas frecuentes</p>
            </a>
            <a href="/locales">
              <p>Locales</p>
            </a>
          </div>
          <NewsletterSignup />
          <div className="sb__footer-links_div">
            <h4>Sigamos conectados</h4>
            <div className="socialmedia">
              <p>
                <img src="fb" alt="" />
                Facebook
              </p>
              <p>
                <img src="twitter" alt="" />
                Twitter
              </p>
              <p>
                <img src="linkedin" alt="" />
                Linkedin
              </p>
              <p>
                <img src="insta" alt="" />
                Instagram
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} . Todos los derechos reservados.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terminos">
              <div>
                <p>Terminos y Condiciones</p>
              </div>
            </a>
            <a href="/privacidad">
              <div>
                <p>Privacidad</p>
              </div>
            </a>
            <a href="/seguridad">
              <div>
                <p>Seguridad</p>
              </div>
            </a>
            <a href="/cookies">
              <div>
                <p>Cookies</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};