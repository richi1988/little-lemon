import React from "react";
import { NavLink } from "react-router-dom";
import italiano from "../../assets/images/italiano.jpg";
import "../../assets/css/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container global-max-width">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Madrid</h2>
          <p>
          Little Lemon ofrece en Madrid el auténtico sabor de la Italia más deslumbrante, tres ambientes, la misma esencia. tres restaurantes, idéntica receta: tradición, vanguardia, calidad y estilo.
          </p>
          <NavLink to="/reservation">
            <button className="reserve-btn">RESERVAR MESA</button>
          </NavLink>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img src={italiano} alt="Restaurante de comida Italiana de calidad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
