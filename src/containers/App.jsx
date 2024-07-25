import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListAlumnos from '../pages/listAlumno';
import Dashboard from "../pages/Dash";
import Horario from "../pages/Horario";
function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<ListAlumnos />} />
            <Route path="/horarios" element={<Horario />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;