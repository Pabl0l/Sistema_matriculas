import './NotEnrolledMessage.css';

export default function NotEnrolledMessage({ student, onLogout }) {
  return (
    <div className="not-enrolled-container">
      <div className="not-enrolled-card">
        <h2>⚠️ Estudiante No Matriculado</h2>
        <p>Lo sentimos, <strong>{student.nombre}</strong> no se encuentra matriculado en el periodo académico actual.</p>
        <p>Para realizar la matriculación de cursos, primero debes estar formalmente matriculado en la institución.</p>
        
        <div className="student-info">
          <h3>Información del Estudiante:</h3>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Carrera:</strong> {student.carrera}</p>
          <p><strong>Semestre:</strong> {student.semestre}</p>
          <p><strong>Estado de matrícula:</strong> <span className="status-not-matriculated">No matriculado</span></p>
        </div>

        <button onClick={onLogout} className="back-button">
          Volver al Inicio
        </button>

        <div className="contact-info">
          <p>Si crees que esto es un error, por favor contacta con la oficina de admisiones.</p>
        </div>
      </div>
    </div>
  );
}