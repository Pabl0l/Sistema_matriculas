Sistema de Matriculación Académica

Un sitio web desarrollado en React que permite a los estudiantes seleccionar y matricular cursos para su semestre académico actual.
🚀 Características

  -  Autenticación de estudiantes con ID único

  -  Visualización de cursos disponibles filtrados por semestre

  -  Sistema de validación de cupos y créditos

  -  Resumen de matrícula antes de confirmar

  -  Persistencia de datos en localStorage

  -  Interfaz responsive y amigable

  -  Validación de estado de matrícula del estudiante

📋 Requisitos Previos

  -  Node.js (versión 14 o superior)

  -  npm o yarn

  -  Navegador web moderno

🛠️ Instalación

Sigue estos pasos para instalar y ejecutar la aplicación:
1. Clonar o descargar el proyecto
bash

# Si tienes el código en un repositorio
git clone <url-del-repositorio>
cd sistema-matriculacion

# Si tienes los archivos directamente
# Navega a la carpeta del proyecto
cd prueba-tecnica-react

2. Instalar dependencias
bash

npm install

3. Ejecutar la aplicación en modo desarrollo
bash

npm start

4. Abrir en el navegador

La aplicación se abrirá automáticamente en:
text

http://localhost:3000

Si no se abre automáticamente, puedes acceder manualmente a la URL.
🧪 Datos de Prueba

La aplicación incluye datos de prueba para testing:
Estudiantes disponibles:

    ID: 101 - Juan Pérez (Matriculado, Semestre 2)

    ID: 102 - María García (No matriculado, Semestre 1)

    ID: 103 - Carlos Rodríguez (No matriculado, Semestre 5)

    ID: 104 - Ana López (Matriculado, Semestre 3)

Cursos por semestre:

    Semestre 1: Matemáticas Aplicadas, Álgebra Lineal

    Semestre 2: Programación en React, Física Básica, Bases de Datos, Diseño de Interfaces

    Semestre 3: Cursos avanzados de programación

    Semestre 5: Inteligencia Artificial, Desarrollo Web Avanzado, Bases de Datos Avanzadas

🎯 Cómo Usar la Aplicación
1. Inicio de Sesión

    Ingresa con tu ID de estudiante (usa uno de los IDs de prueba)

    El sistema validará tu estado de matrícula automáticamente

2. Si estás matriculado:

    Verás la lista de cursos disponibles para tu semestre

    Cada curso muestra: nombre, código, créditos y cupos disponibles

    Puedes seleccionar cursos hasta alcanzar tu límite de créditos

3. Si NO estás matriculado:

    Verás un mensaje informativo explicando la situación

    No podrás acceder a la selección de cursos

    Deberás contactar con admisiones para regularizar tu matrícula

4. Proceso de selección:

    Selecciona cursos haciendo clic en "Seleccionar"

    Verifica el resumen en el panel lateral

    Controla que no excedas tu límite de créditos (20 por defecto)

    Confirma la matrícula cuando estés seguro

5. Validaciones automáticas:

    ✅ Solo cursos de tu semestre actual

    ✅ Solo cursos con cupos disponibles

    ✅ Límite máximo de créditos respetado

    ✅ Prevención de selección duplicada

🏗️ Estructura del Proyecto
text

src/
├── components/          # Componentes de React
│   ├── Login/          # Formulario de autenticación
│   ├── CourseList/     # Lista de cursos disponibles
│   ├── EnrollmentSummary/  # Resumen de matrícula
│   └── common/         # Componentes compartidos
├── context/            # Context API para estado global
├── data/              # Archivos JSON con datos de prueba
├── hooks/             # Custom hooks personalizados
├── styles/            # Archivos CSS
└── App.js             # Componente principal

🔧 Tecnologías Utilizadas

    React 18 - Biblioteca principal de UI

    Context API - Gestión de estado global

    CSS3 - Estilos y diseño responsive

    LocalStorage - Persistencia de datos

    JavaScript ES6+ - Lógica de aplicación

📱 Funcionalidades Técnicas
Validaciones Implementadas:

    Autenticación de estudiante por ID

    Filtrado por semestre académico

    Control de cupos disponibles

    Límite de créditos por semestre

    Prevención de duplicados

    Estado de matrícula del estudiante

Características de UX:

    Feedback visual inmediato

    Mensajes de error descriptivos

    Diseño responsive para móviles

    Confirmaciones antes de acciones críticas

    Estados de carga y error gestionados

🚨 Solución de Problemas
Error común: "No hay cursos disponibles"

  -  Verifica que el estudiante esté en un semestre válido (1, 2, 3, ..., 10)

  -  Asegúrate de que el archivo courses.json esté completo

  -  Error de importación por mayúsculas/minúsculas:
bash

Limpiar caché si hay problemas:
bash

npm start -- --reset-cache


📝 Notas de Desarrollo

  -  Los datos se simulan mediante archivos JSON

  -  El estado se persiste en localStorage del navegador

  -  La aplicación está optimizada para SEO y accesibilidad

  -  Código modular y componentes reutilizables


📄 Licencia

Este proyecto es para de evaluación técnica.