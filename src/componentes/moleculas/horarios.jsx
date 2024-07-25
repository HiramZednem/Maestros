import React from 'react';
import '../../assets/styles/horarios.css';
import LOGO from '../../assets/images/logoUp.png'; 
import USER from "../../assets/images/user.png";
import MOB from "../../assets/images/mob.png";
const Horarios = () => {
    return (
        <div>
              <div class="container">
        <aside class="sidebar">
            <div class="logo">
                <img src={LOGO} alt="Logo"/>
                <h1>Software</h1>
            </div>
            <nav class="menu">
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="#">Permisos <span class="badge">12</span></a></li>
                    <li><a href="/dashboard" >Mis Grupos <span class="badge">4</span></a></li>
                    <li><a href="horarios.html" class="active">Horarios</a></li>
                    <li><a href="#">Cuentas</a></li>
                </ul>
            </nav>
            <div class="profile">
                <div class="profile-info">
                    <div>
                        <img src={USER} alt="Profile Picture"/>
                    </div>
                    <div class="user-c">
                       <div class="perf">
                        <div>
                            <span>Alí Lopez</span>
                        </div>
                        <div> <img src={MOB} alt="Profile Picture" class="mob"/></div>
                       </div>
                    <span>Ali@ids.upchiapas.edu.mx</span>
                    </div>
                </div>
            </div>
        </aside>
        <main class="main-content">
            <header class="header">
                <h1>Horarios</h1>
                <h2>Horario General De Profesor</h2>
            </header>
            <div class="schedule">
                <div class="day">
                    <h3>Lunes</h3>
                    <div class="class-card">
                        <span>Compiladores e Intérpretes</span>
                        <span>8:00 - 8:45 am</span>
                        <span>Aula: 222</span>
                    </div>
                    <div class="class-card">
                        <span>Inteligencia artificial</span>
                        <span>10:15 - 11:45 am</span>
                        <span>Aula: 210</span>
                    </div>
                    <div class="class-card">
                        <span>Análisis financiero</span>
                        <span>12:15 - 2:00 pm</span>
                        <span>Aula: 217</span>
                    </div>
                </div>
                <div class="day">
                    <h3>Martes</h3>
                    <div class="class-card">
                        <span>Inteligencia artificial</span>
                        <span>8:00 - 8:45 am</span>
                        <span>Aula: 210</span>
                    </div>
                    <div class="class-card">
                        <span>Compiladores e Intérpretes</span>
                        <span>10:15 - 11:45 am</span>
                        <span>Aula: 222</span>
                    </div>
                    <div class="class-card">
                        <span>Tutorías</span>
                        <span>12:15 - 1:00 pm</span>
                        <span>Aula: 222</span>
                    </div>
                </div>
                <div class="day">
                    <h3>Miércoles</h3>
                    <div class="class-card">
                        <span>Inteligencia artificial</span>
                        <span>8:00 - 8:45 am</span>
                        <span>Aula: 210</span>
                    </div>
                    <div class="class-card">
                        <span>Análisis financiero</span>
                        <span>10:15 - 11:45 am</span>
                        <span>Aula: 217</span>
                    </div>
                    <div class="class-card">
                        <span>Multimedia y diseño</span>
                        <span>12:15 - 2:00 pm</span>
                        <span>Aula: 214</span>
                    </div>
                </div>
                <div class="day">
                    <h3>Jueves</h3>
                    <div class="class-card">
                        <span>Mantenimiento de software</span>
                        <span>8:00 - 8:45 am</span>
                        <span>Aula: 210</span>
                    </div>
                    <div class="class-card">
                        <span>Multimedia y diseño</span>
                        <span>10:15 - 11:45 am</span>
                        <span>Aula: 214</span>
                    </div>
                    <div class="class-card">
                        <span>Multimedia y diseño</span>
                        <span>12:15 - 2:00 pm</span>
                        <span>Aula: 214</span>
                    </div>
                </div>
                <div class="day">
                    <h3>Viernes</h3>
                    <div class="class-card">
                        <span>Análisis financiero</span>
                        <span>8:00 - 8:45 am</span>
                        <span>Aula: 217</span>
                    </div>
                    <div class="class-card">
                        <span>Multimedia y diseño</span>
                        <span>10:15 - 11:45 am</span>
                        <span>Aula: 214</span>
                    </div>
                    <div class="class-card">
                        <span>Mantenimiento de software</span>
                        <span>12:15 - 2:00 pm</span>
                        <span>Aula: 210</span>
                    </div>
                </div>
            </div>
        </main>
    </div>
        </div>
    );
};

export default Horarios;
