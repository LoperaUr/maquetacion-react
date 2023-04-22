import React from "react";
import imagenAside from "../../public/img/sample1.jpg";

import min1 from "../../public/img/sample2.jpg";
import min2 from "../../public/img/sample3.jpg";
import min3 from "../../public/img/sample4.jpg";

const Aside = () => {
  return (
    <div className="container aside">
      <img src={imagenAside} id="img-aside" />
      <section className="enlaces">
        <div className="button">Enlace</div>
        <div className="button">Enlace</div>
        <div className="button">Enlace</div>
      </section>
      <section className="miniaturas">
        <img src={min1} className="miniatura"/>
        <img src={min2} className="miniatura"/>
        <img src={min3} className="miniatura"/>
      </section>
    </div>
  );
};

export default Aside;
