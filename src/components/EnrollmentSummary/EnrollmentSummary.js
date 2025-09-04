import { useState } from 'react';
import { useEnrollment } from '../../context/EnrollmentContext';
import { useEnrollmentValidation } from '../../hooks/useEnrollmentValidation';
import './EnrollmentSummary.css';

export default function EnrollmentSummary() {
  const { state, dispatch } = useEnrollment();
  const { selectedCredits, canEnroll } = useEnrollmentValidation();
  const { student, selectedCourses, enrollmentComplete } = state;
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEditEnrollment = () => {
    setIsEditing(true);
    // Si estaba completada, la marcamos como no completada para poder editar
    if (enrollmentComplete) {
      dispatch({ type: 'COMPLETE_ENROLLMENT', payload: false });
    }
  };

  const handleSaveChanges = () => {
    // Actualizar localStorage con los cambios
    const enrollmentData = {
      studentId: student.id,
      courses: selectedCourses,
      date: new Date().toISOString()
    };
    
    localStorage.setItem('enrollment', JSON.stringify(enrollmentData));
    setIsEditing(false);
    dispatch({ type: 'COMPLETE_ENROLLMENT' });
  };

  const handleRemoveCourse = (courseId) => {
    dispatch({ type: 'REMOVE_COURSE', payload: courseId });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_ENROLLMENT' });
    setIsEditing(false);
  };

  if (!student) return null;

  if (enrollmentComplete && !isEditing) {
    return (
      <div className="enrollment-complete">
        <h2>¡Matrícula Completada!</h2>
        <p>Tu matrícula se ha procesado correctamente.</p>
        
        <div className="completed-courses">
          <h3>Cursos Matriculados</h3>
          <ul>
            {selectedCourses.map(course => (
              <li key={course.id}>
                {course.nombre} - {course.codigo} ({course.creditos} créditos)
              </li>
            ))}
          </ul>
        </div>

        <div className="action-buttons">
          <button onClick={handleEditEnrollment} className="edit-button">
            Editar Matrícula
          </button>
          <button onClick={handleReset} className="reset-button">
            Realizar otra matrícula
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="enrollment-summary">
      <div className="summary-header">
        <h2>Resumen de Matrícula</h2>
        {enrollmentComplete && isEditing && (
          <span className="editing-badge">Editando</span>
        )}
      </div>
      
      <div className="student-info">
        <h3>Información del Estudiante</h3>
        <p><strong>Nombre:</strong> {student.nombre}</p>
        <p><strong>Carrera:</strong> {student.carrera}</p>
        <p><strong>Semestre:</strong> {student.semestre}</p>
        <p><strong>Créditos permitidos:</strong> {student.creditosPermitidos}</p>
        <p><strong>Créditos seleccionados:</strong> {selectedCredits}</p>
      </div>

      <div className="selected-courses">
        <h3>Cursos Seleccionados ({selectedCourses.length})</h3>
        {selectedCourses.length === 0 ? (
          <p>No hay cursos seleccionados</p>
        ) : (
          <ul>
            {selectedCourses.map(course => (
              <li key={course.id} className="selected-course-item">
                <span>{course.nombre} - {course.codigo} ({course.creditos} créditos)</span>
                {(isEditing || !enrollmentComplete) && (
                  <button 
                    onClick={() => handleRemoveCourse(course.id)}
                    className="remove-button"
                    title="Eliminar curso"
                  >
                    ×
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="action-buttons">
        {isEditing ? (
          <>
            <button onClick={handleSaveChanges} className="save-button">
              Guardar Cambios
            </button>
            <button 
              onClick={() => setIsEditing(false)} 
              className="cancel-button"
            >
              Cancelar
            </button>
          </>
        ) : (
          <button 
            onClick={enrollmentComplete ? handleEditEnrollment : handleConfirmEnrollment}
            disabled={!enrollmentComplete && !canEnroll()}
            className={enrollmentComplete ? "edit-button" : "confirm-button"}
          >
            {enrollmentComplete ? 'Editar Matrícula' : 'Confirmar Matrícula'}
          </button>
        )}
      </div>
    </div>
  );
}