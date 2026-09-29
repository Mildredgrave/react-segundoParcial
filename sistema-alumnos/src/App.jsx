import { useState } from 'react';
import './App.css';

export const alumnosIniciales = [
  { id: 1, nombre: 'Mildred Florineldy Grave Mejía', email: 'mildredgrave@gmail.com' },
  { id: 2, nombre: 'Carlos Samuel López Hérnandez', email: 'carlos246@gmail.com' },
  { id: 3, nombre: 'Fernanda Adaliz Sanchez Paz', email: 'fernanda@gmail.com' },
];

function App() {
  const [alumnos, setAlumnos] = useState(alumnosIniciales);

  return (
    <div className="container">
      <h1>Listado de Alumnos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;