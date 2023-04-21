import React from "react";
import imagenAside from "../../public/img/sample1.jpg";

const Aside = () => {
  return (
    <div className="container aside">
      {<img src={imagenAside} id="img-aside" />}
      <h3>Aside position</h3>
    </div>
  );
};

export default Aside;
