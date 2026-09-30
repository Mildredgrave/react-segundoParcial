
import { useState } from 'react';
import './App.css';

export const alumnosIniciales = [
  { id: 1, nombre: 'Mildred Florineldy Grave Mejía', email: 'mildredgrave@gmail.com' },
  { id: 2, nombre: 'Carlos Samuel López Hérnandez', email: 'carlos246@gmail.com' },
  { id: 3, nombre: 'Fernanda Adaliz Sanchez Paz', email: 'fernanda@gmail.com' },
];

function App() {
  const [alumnos, setAlumnos] = useState(alumnosIniciales);
  const [busqueda, setBusqueda] = useState('');
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoEmail, setNuevoEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoNombre || !nuevoEmail) return;

    const nuevoAlumno = {
      id: Date.now(),
      nombre: nuevoNombre,
      email: nuevoEmail,
    };

    setAlumnos([...alumnos, nuevoAlumno]);
    setNuevoNombre('');
    setNuevoEmail('');
  };

  const alumnosFiltrados = alumnos.filter((alumno) =>
    alumno.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Listado de Alumnos</h1>
       <form onSubmit={handleSubmit} className="formulario">
        <h2>Agregar Alumno</h2>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={nuevoEmail}
          onChange={(e) => setNuevoEmail(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
      <h2>Buscar Alumno</h2>
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {alumnosFiltrados.map((alumno) => (
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

