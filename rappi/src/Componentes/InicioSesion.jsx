import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function InicioSesion() {
  //Hooks
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  // Navegador de rutas
  const navegador = useNavigate();

  const validar_usuario = (ev) => {
    ev.preventDefault();
    var usuario = {
      correo: correo,
      contraseña: contraseña,
    };

    axios
      .post("/api/usuario/autenticacion", usuario)
      .then((res) => {
        alert(res.data);
        if (res.data === "Usuario autenticado correctamente") {
          navegador("/tienda");
        }
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="modal modal-signin position-static d-block py-5"
      tabIndex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="text-danger fw-bold mb-0 fs-2">Flashito</h1>
          </div>

          <div className="modal-body p-5 pt-0">
            <form className="needs-validation"  onSubmit={validar_usuario}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="nombre@ejemplo.com"
                  value={correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                  required
                />
                <label htmlFor="floatingInput">Correo</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  value={contraseña}
                  onChange={(e) => {
                    setContraseña(e.target.value);
                  }}
                  required
                />
                <label htmlFor="floatingPassword">Contreseña</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-danger"
                type="submit"
              >
                Inicio sesión
              </button>
            </form>
            <Link to="/registro">
              <button
                type="button"
                className="btn btn-lg rounded-3 w-100 mb-2 btn-outline-danger"
              >
                Registarme
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioSesion;
