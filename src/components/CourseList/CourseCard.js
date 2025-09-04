import './CourseCard.css';

export default function CourseCard({ course, onSelect, canSelect }) {
  const availableSpots = course.limiteCupos - course.matriculados;

  return (
    <div className="course-card">
      <h3>{course.nombre}</h3>
      <p><strong>Código:</strong> {course.codigo}</p>
      <p><strong>Créditos:</strong> {course.creditos}</p>
      <p><strong>Cupos disponibles:</strong> {availableSpots}</p>
      
      <button 
        onClick={() => onSelect(course)}
        disabled={!canSelect || availableSpots <= 0}
        className="select-button"
      >
        {availableSpots <= 0 ? 'Sin cupos' : 'Seleccionar'}
      </button>
    </div>
  );
}