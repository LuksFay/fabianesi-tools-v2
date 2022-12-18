import React, { useState } from "react";
import product1 from "../img/productos_1.jpg"
import product2 from "../img/productos_2.jpg"
import product3 from "../img/productos_3.jpg"
import product4 from "../img/productos_4.jpg"
import product5 from "../img/productos_5.jpg"
import "../styles/Gallery.css";
const Gallery = () => {
    // Agrega una propiedad de estado para cada imagen
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  // Define una función para cambiar el estado de una imagen cuando se haga clic en ella
  const toggleImage = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cards-container">
        {/* Agrega un evento onClick y una función para cambiar el estado de la imagen al hacer clic en ella */}
        <div className="photo" onClick={() => toggleImage(setIsOpen1)}>
            {/* Muestra la imagen en grande si la propiedad de estado "isOpen1" es "true" */}
            {isOpen1 ? <img src={product1} alt="" /> : <img src={product1} alt="" className="small-image" />}
        </div>
        <div className="photo" onClick={() => toggleImage(setIsOpen2)}>
            {isOpen2 ? <img src={product2} alt="" /> : <img src={product2} alt="" className="small-image" />}
        </div>
        <div className="photo" onClick={() => toggleImage(setIsOpen3)}>
            {isOpen3 ? <img src={product3} alt="" /> : <img src={product3} alt="" className="small-image" />}
        </div>
        <div className="photo" onClick={() => toggleImage(setIsOpen4)}>
            {isOpen4 ? <img src={product4} alt="" /> : <img src={product4} alt="" className="small-image" />}
        </div>
        <div className="photo" onClick={() => toggleImage(setIsOpen5)}>
            {isOpen5 ? <img src={product5} alt="" /> : <img src={product5} alt="" className="small-image" />}
        </div>
    </div>
  );
};

export default Gallery;