import React from "react";
import img1 from "../../public/img/sample4.jpg";
import img2 from "../../public/img/sample5.jpg";
import img3 from "../../public/img/sample6.jpg";
import img4 from "../../public/img/sample7.jpg";
import Galeria from "./Galeria.jsx";

const imagenes = [
  {
    id: "1",
    fuente: img1,
  },
  {
    id: "2",
    fuente: img2,
  },
  {
    id: "3",
    fuente: img3,
  },
  {
    id: "4",
    fuente: img4,
  },
];

const Principal = () => {
  return (
    <div className="container principal">
      <div className="button-top">Agregar</div>
      <Galeria imagenes={imagenes} />
    </div>
  );
};

export default Principal;
