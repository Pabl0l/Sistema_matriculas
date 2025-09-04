import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useCourses } from '../hooks/useCourses';

const EnrollmentContext = createContext();

const initialState = {
  student: null,
  courses: [],
  selectedCourses: [],
  enrollmentComplete: false
};

function enrollmentReducer(state, action) {
  switch (action.type) {
    case 'SET_STUDENT':
      return { ...state, student: action.payload };
    case 'SET_COURSES':
      return { ...state, courses: action.payload };
    case 'ADD_COURSE':
      return { ...state, selectedCourses: [...state.selectedCourses, action.payload] };
    case 'REMOVE_COURSE':
      return { 
        ...state, 
        selectedCourses: state.selectedCourses.filter(course => course.id !== action.payload) 
      };
    case 'COMPLETE_ENROLLMENT':
      return { ...state, enrollmentComplete: true };
    case 'RESET_ENROLLMENT':
      return { ...initialState, courses: state.courses };
    default:
      return state;
  }
}

export function EnrollmentProvider({ children }) {
  const [state, dispatch] = useReducer(enrollmentReducer, initialState);
  const { courses, loading, error } = useCourses();

  // Cargar cursos automáticamente cuando estén disponibles
  useEffect(() => {
    if (courses.length > 0) {
      dispatch({ type: 'SET_COURSES', payload: courses });
    }
  }, [courses]);

  if (loading) {
    return <div>Cargando cursos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <EnrollmentContext.Provider value={{ state, dispatch }}>
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollment() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error('useEnrollment must be used within an EnrollmentProvider');
  }
  return context;
}