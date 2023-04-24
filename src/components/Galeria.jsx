import React from "react";

const Galeria = ({ imagenes }) => {
  return (
    <div className="cards-container">
      {imagenes.map((imagen) => (
        <section className="card">
          <img src={imagen.fuente} className="img" />
          <section className="text-container">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              obcaecati temporibus sapiente magni aperiam. Possimus nobis
              debitis recusandae pariatur ipsam!
            </p>
          </section>
        </section>
      ))}
    </div>
  );
};

export default Galeria;
