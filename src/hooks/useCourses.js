import { useState, useEffect } from 'react';

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        // Importación dinámica para evitar problemas de ruta
        const coursesModule = await import('../data/courses.json');
        setCourses(coursesModule.default || coursesModule);
        setLoading(false);
      } catch (err) {
        console.error('Error loading courses:', err);
        setError('Error al cargar los cursos');
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  return { courses, loading, error };
}