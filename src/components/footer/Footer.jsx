import "../../assets/css/Footer.css";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container global-max-width">
          <div className="footer-des">
            <img src={Logo} alt="Little Lemon logo" />
            <div className="opening-times">
              <h5>Horario</h5>
              <ul>
                <li>Lunes a Viernes: <strong>20:00 - 00:00</strong></li>
                <li>Fines de semana: <strong>20:00 - 1:30</strong></li>
              </ul>
            </div>

            <div className="contact">
              <h5>Contacto</h5>
              <ul>
                <li>910 000 000</li>
                <li>info@littlelemon.es</li>
              </ul>
            </div>

            <div className="locations">
              <h5>Ubicación</h5>
              <ul>
                <li>Donoso Cortes 18, Madrid</li>
                <li>CP: 28015</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2023 Little Lemon Madrid. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
