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
          <button
            className="categories-div"
            onClick={() => setData(CategoriesObject)}
          >
            Todos
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("cargadoresyarrancadores")}
          >
            Cargadores y Arrancadores
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("chaperia")}
          >
            Chaperia
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("compresoresdeaire")}
          >
            Compresores de Aire
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("elevadoresdeauto")}
          >
            Elevadores de Autos
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("extractoresycomprimidos")}
          >
            Extractores y Comprimidos
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("gomeria")}
          >
            Gomería
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("herramientaselectricas")}
          >
            Herramientas Eléctricas
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("herramientasespeciales")}
          >
            Herramientas Especiales
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("herramientasmanuales")}
          >
            Herramientas Manuales
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("herramientasneumaticas")}
          >
            Herramientas Neumaticas
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("insertos")}
          >
            Insertos
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("inyeccionelectronica")}
          >
            Inyección Electrónica
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("juegosdetubos")}
          >
            Juegos de Tubos
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("lubricacion")}
          >
            Lubricación
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("mobiliarioparatalleres")}
          >
            Mobiliario para Talleres
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("prensaehidraulicos")}
          >
            Prensas e Hidraulicos
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("puestaapunto")}
          >
            Puesta a Punto
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("sacabollos")}
          >
            Sacabollos
          </button>
          <button
            className="categories-div"
            onClick={() => filterResult("soldadoras")}
          >
            Soldadoras
          </button>
        </div>
      </div>
      <div className="categories-cards-container">
        {data.map((values) => {
          const { id, title, image, category, link } = values;
          return (
            <>
              <div className="card" key={id}>
                <div className="card-header">
                  <img src={image} alt="Logo de empresa" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <button className="card-button">link</button>
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
