import React, { useState } from "react";

export const FormComponent = () => {
  const [usuario, setUsuario] = useState({});

  const getDataForm = (e) => {
    e.preventDefault();

    let datos = e.target;

    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
    };

    console.log(usuario);
    setUsuario(usuario);
  };

  return (
    <div className="formulario">
      <hr />
      <h1>Formularios con React</h1>

      <div className="info_usuario">
        Mi nombre es {usuario.nombre} {usuario.apellido} soy un/a{" "}
        {usuario.genero} y mi biografía es esta: <p>{usuario.bio}</p>
      </div>

      <form onSubmit={getDataForm}>
        <input type="text" name="nombre" placeholder="Nombre" />

        <input type="text" name="apellido" placeholder="Apellido" />

        <select name="genero">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>

        <textarea name="bio" placeholder="Biografía"></textarea>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
