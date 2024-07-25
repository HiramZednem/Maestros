import React, { useEffect } from "react";
// import 'fullcalendar/main.min.css';
import "../../assets/styles/ListAlumnos.css";
import LOGO from "../../assets/images/logoUP.png";
import USER from "../../assets/images/user.png";
import MOB from "../../assets/images/mob.png";

const ListAlumnos = () => {
  useEffect(() => {
    // Toggle Theme
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });

    // Cleanup event listener
    return () => {
      themeToggle.removeEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
      });
    };
  }, []);

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <img src={LOGO} alt="Logo" />
          <h1>
            <span>Software</span>
          </h1>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="#">
                Permisos <span className="badge">12</span>
              </a>
            </li>
            <li>
              <a href="/dashboard" className="active">
                Mis Grupos <span className="badge">4</span>
              </a>
            </li>
            <li>
              <a href="/horarios">Horarios</a>
            </li>
            <li>
              <a href="#">Asesorías</a>
            </li>
          </ul>
        </nav>
        <div className="profile">
          <div className="profile-info">
            <div>
              <img src={USER} alt="Profile Picture" />
            </div>
            <div className="user-c">
              <div className="perf">
                <div>
                  <span>Alí Lopez</span>
                </div>
                <div>
                  {" "}
                  <img src={MOB} alt="Profile Picture" className="mob" />
                </div>
              </div>
              <span>Ali@ids.upchiapas.edu.mx</span>
            </div>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Universidad Politécnica</h1>
          <div className="status">
            <span>Abierto</span>
            <span>Sistema abierto</span>
            <button id="theme-toggle">Tema</button>
          </div>
        </header>
        <div className="clase">
          <div>
            <div className="container-m">
              <div className="header-m">
                <h2>Gestión de alumnos</h2>
                <div className="header-buttons">
                  <button className="header-button">Exportar</button>
                  <button className="header-button">Criterios</button>
                  <button className="header-button">Planeación</button>
                </div>
              </div>
              <section className="table-container">
                <h2>Lista de alumnos del 8B</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Matrícula</th>
                      <th>Grado</th>
                      <th>C1</th>
                      <th>C2</th>
                      <th>C3</th>
                      <th>Evaluación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cristian Gerardo Vazquez Ramos</td>
                      <td>221267</td>
                      <td>8</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>
                        <button className="eval-button">Calificar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alan David Balbuena Zavala</td>
                      <td>221229</td>
                      <td>8</td>
                      <td>85</td>
                      <td>90</td>
                      <td>93</td>
                      <td>
                        <button className="eval-button">Calificar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Cristian Ovando Gómez</td>
                      <td>221256</td>
                      <td>8</td>
                      <td>85</td>
                      <td>90</td>
                      <td>93</td>
                      <td>
                        <button className="eval-button">Calificar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sin nombre</td>
                      <td>221255</td>
                      <td>8</td>
                      <td>85</td>
                      <td>90</td>
                      <td>93</td>
                      <td>
                        <button className="eval-button">Calificar</button>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><a href="#">ver todos</a></td>
                    </tr>
                  </tbody>
                </table>
              </section>
              {/* ------------- */}
              <section className="table-container">
                <h2>Lista de alumnos del 8A</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Matrícula</th>
                      <th>Grado</th>
                      <th>C1</th>
                      <th>C2</th>
                      <th>C3</th>
                      <th>Evaluación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cristian Gerardo Vazquez Ramos</td>
                      <td>221267</td>
                      <td>8</td>
                      <td>85</td>
                      <td>90</td>
                      <td>93</td>
                      <td>
                        <button className="eval-button">Calificar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alan David Balbuena Zavala</td>
                      <td>221229</td>
                      <td>8</td>
                      <td>85</td>
                      <td>90</td>
                      <td>93</td>
                      <td>
                        <button className="eval-button">Calificar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Cristian Ovando Gómez</td>
                      <td>221256</td>
                      <td>8</td>
                      <td>85</td>
                      <td>90</td>
                      <td>93</td>
                      <td>
                        <button className="eval-button">Calificar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sin nombre</td>
                      <td>221255</td>
                      <td>8</td>
                      <td>85</td>
                      <td>90</td>
                      <td>93</td>
                      <td>
                        <button className="eval-button">Calificar</button>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><a href="#">ver todos</a></td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListAlumnos;
