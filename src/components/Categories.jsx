import React, { useState } from "react";
import "../styles/Categories.css";
import "../styles/Cards.css";
import CategoriesObject from "./CategoriesObject";
const Categories = () => {
  const [data, setData] = useState(CategoriesObject);

  const filterResult = (cardItem) => {
    const result = CategoriesObject.filter((item) => {
      return item.category === cardItem;
    });
    setData(result);
  };
  return (
    <>
      <div>
        <h2 className="title">Categorías</h2>
        <div className="categories-container">
          <div
            className="categories-div"
            onClick={() => setData(CategoriesObject)}
          >
            <p className="categories-text">
            Todos
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("cargadoresyarrancadores")}
          >
            <p className="categories-text">
            Cargadores y Arrancadores
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("chaperia")}
          >
            <p className="categories-text">
            Chaperia
            </p>
          </div>
          {/* <div
            className="categories-div"
            onClick={() => filterResult("compresoresdeaire")}
          >
            Compresores de Aire
          </div> */}
          <div
            className="categories-div"
            onClick={() => filterResult("elevadoresdeauto")}
          >
            <p className="categories-text">
            Elevadores de Autos
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("extractoresycomprimidos")}
          >
            <p className="categories-text">
            Extractores y Comprimidos
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("gomeria")}
          >
            <p className="categories-text">

            Gomería
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("herramientaselectricas")}
          >
            <p className="categories-text">

            Herramientas Eléctricas
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("herramientasespeciales")}
          >
            <p className="categories-text">

            Herramientas Especiales
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("herramientasmanuales")}
          >
            <p className="categories-text">

            Herramientas Manuales
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("herramientasneumaticas")}
          >
            <p className="categories-text">

            Herramientas Neumaticas
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("insertos")}
          >
            <p className="categories-text">
            Insertos

            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("inyeccionelectronica")}
          >
            <p className="categories-text">
            Inyección Electrónica

            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("juegosdetubos")}
          >
            <p className="categories-text">
            Juegos de Tubos

            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("lubricacion")}
          >
            <p className="categories-text">

            Lubricación
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("mobiliarioparatalleres")}
          >
            <p className="categories-text">

            Mobiliario para Talleres
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("prensaehidraulicos")}
          >
            <p className="categories-text">

            Prensas e Hidraulicos
            </p>
          </div>
          {/* <div
            className="categories-div"
            onClick={() => filterResult("puestaapunto")}
          >
            Puesta a Punto
          </div> */}
          <div
            className="categories-div"
            onClick={() => filterResult("sacabollos")}
          >
            <p className="categories-text">

            Sacabollos
            </p>
          </div>
          <div
            className="categories-div"
            onClick={() => filterResult("soldadoras")}
          >
            <p className="categories-text">

            Soldadoras
            </p>
          </div>
        </div>
      </div>
      <div className="categories-cards-container">
        {data.map((values) => {
          const { id, title, image, link } = values;
          return (
            <>
              <div className="card" key={id}>
                <div className="card-header">
                  <img src={image} alt="Logo de empresa" className="card-header-img"/>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <a href={link} target="_blank" rel="noreferrer" className="card-button">Ver</a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
