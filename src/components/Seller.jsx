import React from "react";
import "../styles/Seller.css";
import img from "../img/wsp.png"
const Seller = () => {
  return (
    <div className="container">
    <div className="card-container">
      <div className="background"></div>
      <div className="profile-pic"></div>
      <div className="description">
        <h2>Fabián Molinari</h2>
        <h3>Vendedor</h3>
        <p>Cuando hayas visto los catálogos. Sentite libre de contactar conmigo para guiarte en tu compra</p>
        <a 
          href='https://api.whatsapp.com/send?phone=+543412019025&text=Hola!%20Vengo%20de%20la%20p%C3%A1gina.%20Quisiera%20hacer%20una%20consulta%20sobre%20los%20cat%C3%A1logos'
          target='_blank'
          rel="noreferrer"
          className="whatsapp">
            <img src={img} alt="wsp" className="wsp-img" />
        </a>
        
      </div>
    </div>
    </div>
  );
};

export default Seller;