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
        <div className="whatsapp">
          <img src={img} alt="wsp" className="wsp-img" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Seller;