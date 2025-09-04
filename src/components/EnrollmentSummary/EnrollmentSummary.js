import { useEnrollment } from '../../context/EnrollmentContext';
import { useEnrollmentValidation } from '../../hooks/useEnrollmentValidation';
import './EnrollmentSummary.css';

export default function EnrollmentSummary() {
  const { state, dispatch } = useEnrollment();
  const { selectedCredits, canEnroll } = useEnrollmentValidation();
  const { student, selectedCourses, enrollmentComplete } = state;

  const handleConfirmEnrollment = () => {
    // Guardar en localStorage
    const enrollmentData = {
      studentId: student.id,
      courses: selectedCourses,
      date: new Date().toISOString()
    };
    
    localStorage.setItem('enrollment', JSON.stringify(enrollmentData));
    dispatch({ type: 'COMPLETE_ENROLLMENT' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_ENROLLMENT' });
  };

  if (!student) return null;

  if (enrollmentComplete) {
    return (
      <div className="enrollment-complete">
        <h2>¡Matrícula Completada!</h2>
        <p>Tu matrícula se ha procesado correctamente.</p>
        <button onClick={handleReset} className="reset-button">
          Realizar otra matrícula
        </button>
      </div>
    );
  }

  return (
    <div className="enrollment-summary">
      <h2>Resumen de Matrícula</h2>
      
      <div className="student-info">
        <h3>Información del Estudiante</h3>
        <p><strong>Nombre:</strong> {student.nombre}</p>
        <p><strong>Carrera:</strong> {student.carrera}</p>
        <p><strong>Semestre:</strong> {student.semestre}</p>
        <p><strong>Créditos permitidos:</strong> {student.creditosPermitidos}</p>
        <p><strong>Créditos seleccionados:</strong> {selectedCredits}</p>
      </div>

      <div className="selected-courses">
        <h3>Cursos Seleccionados</h3>
        {selectedCourses.length === 0 ? (
          <p>No hay cursos seleccionados</p>
        ) : (
          <ul>
            {selectedCourses.map(course => (
              <li key={course.id}>
                {course.nombre} - {course.codigo} ({course.creditos} créditos)
              </li>
            ))}
          </ul>
        )}
      </div>

      <button 
        onClick={handleConfirmEnrollment}
        disabled={!canEnroll()}
        className="confirm-button"
      >
        Confirmar Matrícula
      </button>
    </div>
  );
}