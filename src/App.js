import { EnrollmentProvider, useEnrollment } from './context/EnrollmentContext';
import Login from './components/Login/Login.js';
import CourseList from './components/CourseList/CourseList';
import EnrollmentSummary from './components/EnrollmentSummary/EnrollmentSummary';
import NotEnrolledMessage from './components/common/NotEnrolledMessage';
import './App.css';

// Componente que usa el hook useEnrollment
function AppContent() {
  const { state, dispatch } = useEnrollment();

  // Mostrar loading si los cursos aún no se han cargado
  if (state.courses.length === 0) {
    return <div className="loading">Cargando cursos...</div>;
  }

const handleLogout = () => {
  dispatch({ type: 'SET_STUDENT', payload: null });
  dispatch({ type: 'RESET_ENROLLMENT' });
};

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sistema de Matriculación Académica</h1>
      </header>
      
      <main className="app-main">
        {!state.student ? (
          <Login />
        ) : !state.student.matriculado ? (
          <NotEnrolledMessage 
            student={state.student} 
            onLogout={handleLogout} 
          />
        ) : (
          <>
            <div className="welcome-message">
              <h2>Bienvenido, {state.student.nombre}</h2>
              <span className="matriculation-status matriculated">
                ✓ Matriculado
              </span>
              <button 
                onClick={handleLogout}
                className="logout-button"
              >
                Cerrar Sesión
              </button>
            </div>
            
            <div className="content-container">
              <section className="courses-section">
                <CourseList />
              </section>
              
              <aside className="summary-section">
                <EnrollmentSummary />
              </aside>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

// Componente principal que envuelve con el Provider
export default function App() {
  return (
    <EnrollmentProvider>
      <AppContent />
    </EnrollmentProvider>
  );
}