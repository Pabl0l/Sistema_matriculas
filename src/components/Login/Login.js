import { useState } from 'react';
import { useEnrollment } from '../../context/EnrollmentContext';
import studentsData from '../../data/students.json';
import './Login.css';

export default function Login() {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useEnrollment();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Buscar el estudiante por ID
    const student = studentsData.find(s => s.id === parseInt(studentId));
    
    if (student) {
      dispatch({ type: 'SET_STUDENT', payload: student });
      setError('');
    } else {
      setError('ID de estudiante no válido');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Inicio de Sesión</h2>
        <div className="form-group">
          <label htmlFor="studentId">ID de Estudiante</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Ingresa tu ID de estudiante"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
    </div>
  );
}