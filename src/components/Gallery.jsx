import React from "react";
import product1 from "../img/productos_1.jpg"
import product2 from "../img/productos_2.jpg"
import product3 from "../img/productos_3.jpg"
import product4 from "../img/productos_4.jpg"
import product5 from "../img/productos_5.jpg"
import "../styles/Gallery.css";
const Gallery = () => {

  return (
    <>
    <h2 className="title margin-gallery">Galería</h2>
    <div className="cards-container">
        
        <div className="photo" >
            <img src={product1} alt="" />
        </div>
        <div className="photo" >
            <img src={product2} alt="" />
        </div>
        <div className="photo">
            <img src={product3} alt="" />
        </div>
        <div className="photo" >
            <img src={product4} alt="" />
        </div>
        <div className="photo">
            <img src={product5} alt="" />
        </div>

    </div>
    </>
  );
};

export default Gallery;