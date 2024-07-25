import React, { useEffect } from "react";
import MyCalendar from '../atomos/MyCalendar';
//import 'fullcalendar/main.min.css';
import "../../assets/styles/home.css";
import LOGO from "../../assets/images/logoUp.png";
import USER from "../../assets/images/user.png";
import MOB from "../../assets/images/mob.png";

const Dashboard = () => {
  useEffect(() => {
    // Configuración de FullCalendar
    /*     const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
    });
    calendar.render(); */

    // Toggle Theme
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });

    // Cleanup event listeners
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
              <a href="/" className="active">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                Permisos <span className="badge">12</span>
              </a>
            </li>
            <li>
              <a href="/dashboard">
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
          <div className="col-clase">
            <section className="content">
              <center>
                <h1>Materias asignadas</h1>
              </center>
              <div className="course">
                <h2>Programación Web</h2>
                <p>Profesor: Alí Lopez</p>
                <p>Horario:</p>
                <div className="hr-1">
                  <div>
                    <p>Lunes: 8:00 - 10:00</p>
                    <p>Miércoles: 8:00 - 10:00</p>
                  </div>
                  <div>
                    <p>Grupo: A</p>
                  </div>
                </div>
                <div className="actions">
                  <button>Exportar a Excel</button>
                  <button>Exportar a PDF</button>
                  <button>Criterios de evaluación</button>
                </div>
              </div>
              <div className="course">
                <h2>Análisis Financiero de Software</h2>
                <p>Profesor: Alí Lopez</p>
                <p>Horario:</p>
                <div className="hr-1">
                  <div>
                    <p>Lunes: 8:00 - 10:00</p>
                    <p>Miércoles: 8:00 - 10:00</p>
                  </div>
                  <div>
                    <p>Grupo: B</p>
                  </div>
                </div>
                <div className="actions">
                  <button>Exportar a Excel</button>
                  <button>Exportar a PDF</button>
                  <button>Criterios de evaluación</button>
                </div>
              </div>
              <div className="course">
                <h2>Inteligencia Artificial</h2>
                <p>Profesor: Alí Lopez</p>
                <p>Horario:</p>
                <div className="hr-1">
                  <div>
                    <p>Lunes: 8:00 - 10:00</p>
                    <p>Miércoles: 8:00 - 10:00</p>
                  </div>
                  <div>
                    <p>Grupo: B</p>
                  </div>
                </div>
                <div className="actions">
                  <button>Exportar a Excel</button>
                  <button>Exportar a PDF</button>
                  <button>Criterios de evaluación</button>
                </div>
              </div>
            </section>
          </div>
          <div>
            <center>
              <h2>Calendario de cierre</h2>
            </center>
            <aside className="calendar">
              <div id="calendar"><MyCalendar /></div>
              <div className="inf-m">
                <div className="next-closure">
                  <h3>Próximo cierre</h3>
                  <p>Corte 1</p>
                  <div className="time-crt">
                    <p>Quedan 7 días para el cierre</p>
                  </div>
                  <p>Corte 2</p>
                  <div className="time-crt">
                    <p>Quedan 23 días para el cierre</p>
                  </div>
                  <p>Corte 3</p>
                  <div className="time-crt">
                    <p>Quedan 36 días para el cierre</p>
                  </div>
                </div>
                <div className="information">
                  <h3>Información</h3>
                  <p>
                    El sistema de gestión de materias está abierto actualmente.
                    Los cierres de las materias se realizan de forma periódica,
                    con alertas previas a los estudiantes.
                  </p>
                  <p>
                    Asegúrate de revisar el calendario y estar al tanto de los
                    próximos cierres para evitar retrasos en tus actividades
                    académicas.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
