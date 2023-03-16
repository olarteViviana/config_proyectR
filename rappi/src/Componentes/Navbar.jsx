import React from "react";

function Navbar() {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
                Rappi
            </li>
          </ul>
          <div className="btn-group text-end">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
            >
              Default dropdown
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
