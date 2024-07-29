import React, { useEffect, useState } from "react";
import "../../assets/styles/ListAlumnos.css";
import LOGO from "../../assets/images/logoUP.png";
import USER from "../../assets/images/user.png";
import MOB from "../../assets/images/mob.png";

const ListAlumnos = () => {
  const [alumnos8B, setAlumnos8B] = useState([]);
  const [alumnos8A, setAlumnos8A] = useState([]);
  const [editingAlumno, setEditingAlumno] = useState(null);
  const [formData, setFormData] = useState({ c1: "", c2: "", c3: "" });

  useEffect(() => {
    // Fetch data from the API
    fetch("http://52.72.102.198:3000/api/alumnos")
      .then((response) => response.json())
      .then((data) => setAlumnos8B(data))
      .catch((error) => console.error("Error fetching data:", error));

    fetch("http://34.232.27.157:3000/api/alumnos")
      .then((response) => response.json())
      .then((data) => setAlumnos8A(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (editingAlumno) {
      setFormData({ c1: editingAlumno.c1, c2: editingAlumno.c2, c3: editingAlumno.c3 });
    }
  }, [editingAlumno]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = (alumno) => {
    setEditingAlumno(alumno);
  };

  const handleSaveClick = () => {
    if (editingAlumno && editingAlumno.id) {
      // Token de ejemplo, este debe ser el token real que obtienes
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTM3MTJmN2Y0OTljYzZjMmVhM2EiLCJpYXQiOjE3MjE5Nzk3NjEsImV4cCI6MTcyMTk4MzM2MX0.P6z_-NZfKOdZrQt8vVtkddVoe-6hJ5y_bgTVPLO2RX8";

      fetch(`http://34.232.27.157:3000/api/alumnos/${editingAlumno.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ ...editingAlumno, ...formData }),
      })
        .then((response) => response.json())
        .then((updatedAlumno) => {
          // Actualizar el estado con el alumno actualizado
          setAlumnos8B((prevAlumnos) =>
            prevAlumnos.map((alumno) =>
              alumno.id === updatedAlumno.id ? updatedAlumno : alumno
            )
          );
          setAlumnos8A((prevAlumnos) =>
            prevAlumnos.map((alumno) =>
              alumno.id === updatedAlumno.id ? updatedAlumno : alumno
            )
          );
          setEditingAlumno(null); // Limpiar el alumno en edición
        })
        .catch((error) => console.error("Error updating data:", error));
    } else {
      console.error("No se puede actualizar: el id del alumno es indefinido");
    }
  };

  const renderEditableCell = (alumno, fieldName) => (
    <td style={{ position: "relative" }}>
      {editingAlumno && editingAlumno.id === alumno.id ? (
        <input
          type="number"
          name={fieldName}
          value={formData[fieldName]}
          onChange={handleInputChange}
          style={{
            width: "60px",
            padding: "5px",
            fontSize: "14px",
            marginRight: "5px",
          }}
        />
      ) : (
        <span>{alumno[fieldName]}</span>
      )}
      {(!editingAlumno || editingAlumno.id !== alumno.id) && (
        <button
          onClick={() => handleEditClick(alumno)}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            marginLeft: "5px",
            padding: "0",
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
            alt="Edit"
            style={{ width: "16px", height: "16px" }}
          />
        </button>
      )}
      {editingAlumno && editingAlumno.id === alumno.id && (
        <button
          onClick={handleSaveClick}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            marginLeft: "5px",
            padding: "0",
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            color: "green",
          }}
        >
          Guardar
        </button>
      )}
    </td>
  );

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
                    {alumnos8B.map((alumno) => (
                      <tr key={alumno.id}>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.matricula}</td>
                        <td>{alumno.grado}</td>
                        {renderEditableCell(alumno, "c1")}
                        {renderEditableCell(alumno, "c2")}
                        {renderEditableCell(alumno, "c3")}
                        <td>
                          <button className="eval-button">Calificar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
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
                    {alumnos8A.map((alumno) => (
                      <tr key={alumno.id}>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.matricula}</td>
                        <td>{alumno.grado}</td>
                        {renderEditableCell(alumno, "c1")}
                        {renderEditableCell(alumno, "c2")}
                        {renderEditableCell(alumno, "c3")}
                        <td>
                          <button className="eval-button">Calificar</button>
                        </td>
                      </tr>
                    ))}
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
