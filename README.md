Sistema de Matriculación Académica

Una aplicación web desarrollada en React que permite a los estudiantes seleccionar y matricular cursos para su semestre académico actual.

🚀 Características

    Autenticación de estudiantes con ID único

    Visualización de cursos disponibles filtrados por semestre

    Sistema de validación de cupos y créditos

    Resumen de matrícula antes de confirmar

    Persistencia de datos en localStorage

    Interfaz responsive y amigable

    Validación de estado de matrícula del estudiante

📋 Requisitos Previos

    Node.js (versión 14 o superior)

    npm o yarn

    Navegador web moderno

🛠️ Instalación

Sigue estos pasos para instalar y ejecutar la aplicación:
1. Clonar o descargar el proyecto
bash

# Si tienes el código en un repositorio
git clone https://github.com/Pabl0l/Sistema_matriculas

2. Instalar dependencias
en bash:

npm install

3. Ejecutar la aplicación en modo desarrollo
en bash:

npm start

4. Abrir en el navegador

La aplicación se abrirá automáticamente en:
text

http://localhost:3000

Si no se abre automáticamente, puedes acceder manualmente a la URL.

🧪 Datos de Prueba

La aplicación incluye datos de prueba para testing:
Estudiantes disponibles:

    ID: 100 - Juan Olivera (Matriculado, Semestre 1)
    
    ID: 101 - Juan Pérez (Matriculado, Semestre 1)

    ...
    
    ID: 112 - Luisa Arango (No matriculado, Semestre 1)


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

    Verifica que el estudiante esté en un semestre válido (1, 2, 3, ..., 10

Limpiar caché si hay problemas:

npm start -- --reset-cache

📝 Notas de Desarrollo

    Los datos se simulan mediante archivos JSON

    El estado se persiste en localStorage del navegador

    La aplicación está optimizada para SEO y accesibilidad

    Código modular y componentes reutilizables

❌ Limitaciones

El sitio web está simulando un backend y base de datos mediante archivos JSON. Sin embargo estos archivos no son modificables,
por lo que al momento de matricular a un estudiante el cupo del curso sigue siendo el mismo.

Por otro lado, no se puede relacionar alumnos con estudiantes por falta de una base de datos.

El proyecto se ajustó a los requerimientos puestos en la prueba y también hay que tener en cuenta el plazo de tiempo para realizar el proyecto (menos de 1 día).

Este proyecto se centra principalmente en demostrar mis habilidades con React.

📄 Licencia

Este proyecto es para fines educativos y de evaluación técnica.
