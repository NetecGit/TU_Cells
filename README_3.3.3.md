# Práctica 3.3.3 Proyecto Final

## Objetivo:
Al finalizar la práctica, serás capaz de:

- Integrar y aplicar los conceptos y herramientas clave estudiados a lo largo del curso, diseñando y desarrollando un proyecto completo en Lit. Esto incluirá la creación de componentes web modulares, el manejo de datos asíncronos a través de la Fetch API, el renderizado dinámico eficiente, y la implementación de estilos avanzados para mejorar la experiencia de usuario.

- Aplicar los conocimientos adquiridos durante el curso para desarrollar una aplicación funcional que incluya:
    - Creación de componentes reutilizables.
    - Manejo de estado reactivo.
    - Consumo de datos de una API REST con Fetch.
    - Renderizado dinámico basado en datos asíncronos.
    - Estilización avanzada de componentes.
    - Diseño responsivo.


## Duración aproximada:
- 120 minutos.

## **Requisitos del Proyecto**

### 1. **Gestión de Tareas:**
   - Agregar nuevas tareas con un formulario.
   - Listar tareas existentes.
   - Marcar tareas como completadas o pendientes.
   - Eliminar tareas.

### 2. **Integración con API REST:**
   - Consultar tareas desde una API REST al cargar la página.
   - [Datos iniciales](https://raw.githubusercontent.com/Netec-Mx/CELLS_Proveedores/refs/heads/main/Cap%C3%ADtulo3/ProyectoFinal/datos.json)
   - URL: [`https://raw.githubusercontent.com/Netec-Mx/CELLS_Proveedores/refs/heads/main/Cap%C3%ADtulo3/ProyectoFinal/datos.json`](https://raw.githubusercontent.com/Netec-Mx/CELLS_Proveedores/refs/heads/main/Cap%C3%ADtulo3/ProyectoFinal/datos.json)
   - Guardar nuevas tareas en la API.
   - Actualizar el estado de una tarea en la API.
   - Eliminar tareas desde la API.

### 3. **Diseño y Usabilidad:**
   - Crear un diseño visualmente atractivo y responsivo.
   - Usar estilos avanzados para mejorar la experiencia de usuario.
   - Incorporar notificaciones visuales (como cambios de color o iconos) para tareas completadas.

### 4. **Herramientas necesarias:**
   - Node.js y npm instalados.
   - Editor de código, como Visual Studio Code.
   - Navegador moderno compatible con Web Components (Chrome, Firefox, Edge).
   - Git
   - Repositorio Remoto en GitHub, con acceso de lectura al instructor asignado.

   <br/> <br/>
   
## **Instrucciones**

### 1. **Configurar el Proyecto:**
   - Crea un nuevo proyecto de Lit.
   - Estructura los archivos y directorios de manera organizada.

### 2. **Crear Componentes:**
   - **Formulario de Tareas:** Un componente que permita a los usuarios ingresar nuevas tareas.
   - **Lista de Tareas:** Un componente que renderice las tareas recuperadas de la API y permita actualizarlas o eliminarlas.
   - **Tarjeta de Tarea:** Un componente reutilizable para mostrar información de cada tarea con opciones de interacción.

### 3. **Conectar con la API REST:**
   - Realiza peticiones para obtener, agregar, actualizar y eliminar tareas.
   - Maneja errores de las peticiones de manera adecuada y notifica al usuario.

### 4. **Implementar Funcionalidades:**
   - Diseña el flujo de la aplicación para que las tareas se actualicen dinámicamente en la interfaz al realizar cambios (agregar, actualizar o eliminar).
   - Usa propiedades observables y métodos de actualización para garantizar la reactividad.

### 5. **Estilizar los Componentes:**
   - Aplica estilos personalizados a cada componente.
   - Asegúrate de que el diseño sea responsivo y accesible en diferentes tamaños de pantalla.

### 6. **Integrar Funcionalidades Avanzadas:**
   - Añade filtros para mostrar tareas completadas, pendientes o todas.
   - Implementa un indicador visual para las tareas completadas.

### 7. **Probar y Refinar:**
   - Realiza pruebas funcionales para asegurarte de que todas las características trabajen correctamente.
   - Optimiza el código para mejorar el rendimiento.

<br/>

### **Criterios de Evaluación**
1. Correcta implementación de los componentes y su interacción.
2. Uso adecuado de la Fetch API para consumir y manipular datos de la API REST.
3. Aplicación de principios de diseño visual y responsivo.
4. Manejo de errores y notificaciones para el usuario.
5. Creatividad y personalización en la aplicación final.

### **Entrega**
Sube el proyecto a un repositorio de GitHub y comparte el enlace. Incluye un archivo README con:
- Una descripción del proyecto.
- Instrucciones para instalar y ejecutar la aplicación.
- Cualquier detalle adicional relevante.

Este proyecto final te permitirá demostrar tu dominio en Lit y su aplicación en un contexto real.
