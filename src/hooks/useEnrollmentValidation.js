import { useEnrollment } from '../context/EnrollmentContext';

export function useEnrollmentValidation() {
  const { state } = useEnrollment();
  const { student, selectedCourses, courses } = state;

  const selectedCredits = selectedCourses.reduce((total, course) => total + course.creditos, 0);

  const isCourseAvailable = (course) => {
    if (!student) return false;
    
    const availableSpots = course.limiteCupos - course.matriculados;
    const isInCurrentSemester = course.semestre === student.semestre;
    const isAlreadySelected = selectedCourses.some(c => c.id === course.id);
    
    console.log(`Course ${course.nombre}:`, {
      availableSpots,
      isInCurrentSemester,
      isAlreadySelected,
      studentSemester: student.semestre,
      courseSemester: course.semestre
    });
    
    return availableSpots > 0 && isInCurrentSemester && !isAlreadySelected;
  };

  const canAddMoreCredits = (additionalCredits = 0) => {
    if (!student) return false;
    return selectedCredits + additionalCredits <= student.creditosPermitidos;
  };

  const canEnroll = () => {
    return student && student.matriculado && selectedCourses.length > 0;
  };

  return {
    selectedCredits,
    isCourseAvailable,
    canAddMoreCredits,
    canEnroll
  };
}