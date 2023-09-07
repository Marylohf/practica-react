import React, { useState } from "react";
import PropTypes from "prop-types";

export const PrimerComponente = ({ year }) => {
  const [yearNow, setYearNow] = useState(year);

  const siguiente = (e) => {
    setYearNow(yearNow + 1);
  };

  const anterior = (e) => {
    setYearNow(yearNow - 1);
  };

  const changeYear = (e) => {
    let dato = e.target.value;

    setYearNow(dato);
  };

  return (
    <div>
      <h1>Estamos en el año:</h1>
      <h3>{yearNow}</h3>

      <p>
        <button onClick={anterior}>ANTERIOR</button>
        &nbsp;
        <button onClick={siguiente}>SIGUIENTE</button>
      </p>
      <br />
      <input onChange={changeYear} type="text" placeholder="Cambiar el año" />
    </div>
  );
};

PrimerComponente.propTypes = {
  year: PropTypes.number.isRequired,
};
