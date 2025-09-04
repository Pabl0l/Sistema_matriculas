import { useEnrollment } from '../../context/EnrollmentContext';
import { useEnrollmentValidation } from '../../hooks/useEnrollmentValidation';
import CourseCard from './CourseCard';
import './CourseList.css';

export default function CourseList() {
  const { state, dispatch } = useEnrollment();
  const { isCourseAvailable, canAddMoreCredits } = useEnrollmentValidation();
  const { courses, student, selectedCourses } = state;

  console.log('Student:', student);
  console.log('All courses:', courses);
  console.log('Selected courses:', selectedCourses);

  const handleSelectCourse = (course) => {
    if (canAddMoreCredits(course.creditos)) {
      dispatch({ type: 'ADD_COURSE', payload: course });
    }
  };

  const handleRemoveCourse = (courseId) => {
    dispatch({ type: 'REMOVE_COURSE', payload: courseId });
  };

  if (!student) {
    return <div className="info-message">Por favor inicia sesión primero</div>;
  }

  const availableCourses = courses.filter(isCourseAvailable);
  console.log('Available courses:', availableCourses);

  return (
    <div className="course-list-container">
      <h2>Cursos Disponibles - Semestre {student.semestre}</h2>
      
      <div className="selected-courses-summary">
        <h3>Cursos Seleccionados ({selectedCourses.length})</h3>
        {selectedCourses.length === 0 ? (
          <p>No hay cursos seleccionados</p>
        ) : (
          <ul>
            {selectedCourses.map(course => (
              <li key={course.id} className="selected-course-item">
                <span>{course.nombre} ({course.creditos} créditos)</span>
                <button 
                  onClick={() => handleRemoveCourse(course.id)}
                  className="remove-button"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="courses-grid">
        {availableCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={handleSelectCourse}
            canSelect={canAddMoreCredits(course.creditos)}
          />
        ))}
      </div>

      {availableCourses.length === 0 && (
        <div className="debug-info">
          <p>No hay cursos disponibles para tu semestre</p>
          <p><strong>Debug info:</strong></p>
          <p>Semestre del estudiante: {student.semestre}</p>
          <p>Total de cursos: {courses.length}</p>
          <p>Cursos del semestre {student.semestre}: 
            {courses.filter(c => c.semestre === student.semestre).length}
          </p>
          <p>Cursos con cupos: 
            {courses.filter(c => (c.limiteCupos - c.matriculados) > 0).length}
          </p>
        </div>
      )}
    </div>
  );
}