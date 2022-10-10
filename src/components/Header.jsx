import React from "react";
import img from "../img/logo192.png";
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="title">Hola, bienvenido a FabianesiTools! 👋</h1>;
        <p className="subtitle-invitation">Encontra lo que estas buscando</p>
      </div>
      <div>
        <img src={img} alt="Logotipo de la empresa" className="logo" />
      </div>
    </div>
  );
};

export default Header;
