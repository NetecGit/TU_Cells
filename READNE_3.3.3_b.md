# Proyecto Final (Alternativo): **"Administrador de Eventos con Lit"**

## **Objetivo**
El objetivo de este proyecto es consolidar los conocimientos adquiridos sobre **Lit**, desarrollando una aplicación de gestión de eventos que permita:
- Agregar, visualizar y eliminar eventos.
- Filtrar eventos por categorías (por ejemplo, `Reunión`, `Cumpleaños`, `Otros`).
- Aplicar estilos y clases dinámicas a los eventos según su estado o categoría.
- Usar lógica condicional para mostrar contenido dinámico basado en el estado de la aplicación.

El proyecto debe utilizar de manera efectiva las **directivas de Lit**, como `repeat`, `classMap`, `styleMap`, `choose` y `when`, para optimizar el renderizado y el manejo de contenido dinámico.

### **Requisitos**
1. **Conocimientos previos:**
   - Comprensión de Lit y su sistema de plantillas declarativas.
   - Uso de propiedades reactivas para manejar el estado de un componente.
   - Experiencia con las directivas `repeat`, `classMap`, `styleMap`, `choose` y `when`.

2. **Herramientas necesarias:**
   - Node.js y npm instalados.
   - Editor de código, como Visual Studio Code.
   - Navegador moderno compatible con Web Components (Chrome, Firefox, Edge).
   - Git
   - Repositorio Remoto en GitHub, con acceso de lectura al instructor asignado.

<br/><br/>

## **Instrucciones**

### **1. Estructura de la aplicación:**
- Crea dos componentes:
  - **`event-app`:** El componente principal que gestiona la lista de eventos y el formulario para agregar nuevos eventos.
  - **`event-item`:** Un componente que representa un evento individual en la lista.

### **2. Funcionalidades principales:**

1. **Gestión de eventos:**
   - Implementa la funcionalidad para agregar eventos con información como título, fecha, descripción y categoría.
   - Permite eliminar eventos individuales de la lista.

2. **Filtrado de eventos:**
   - Agrega opciones para filtrar los eventos según su categoría (por ejemplo, `Reunión`, `Cumpleaños`, `Otros`).
   - Permite cambiar el filtro actual mediante botones o un menú desplegable.

3. **Renderizado dinámico:**
   - Utiliza la directiva `repeat` para renderizar la lista de eventos de forma eficiente.
   - Aplica `choose` o `when` para mostrar un mensaje si no hay eventos disponibles o si no coinciden con el filtro seleccionado.

4. **Estilización dinámica:**
   - Usa `styleMap` para asignar estilos específicos según la categoría del evento.
   - Aplica `classMap` para diferenciar entre eventos pasados y futuros (por ejemplo, eventos pasados con estilo más tenue).


### **3. Implementa las siguientes funcionalidades:**

1. **Agregar nuevos eventos:**
   - Diseña un formulario que permita al usuario ingresar la información del evento (título, fecha, descripción, categoría).
   - Usa eventos como `@submit` o `@click` para agregar el nuevo evento a una lista reactiva.

2. **Filtrar eventos:**
   - Crea botones o un menú desplegable para cambiar entre las opciones de filtro (`Todos`, `Reunión`, `Cumpleaños`, `Otros`).
   - Asegúrate de que el filtro active actualice la lista renderizada de eventos.

3. **Mostrar eventos dinámicamente:**
   - Renderiza la lista de eventos usando `repeat`.
   - Aplica lógica condicional con `choose` o `when` para mostrar un mensaje "No hay eventos disponibles" cuando la lista esté vacía.

4. **Eliminar eventos:**
   - Agrega un botón en cada evento para eliminarlo de la lista.

5. **Estilos dinámicos:**
   - Usa colores específicos para cada categoría de evento (`Reunión`, `Cumpleaños`, `Otros`).
   - Distingue entre eventos pasados y futuros aplicando clases dinámicas con `classMap`.

<br/><br/>

## **Criterios de Evaluación**

1. **Funcionamiento:**
   - La aplicación debe permitir agregar, eliminar y filtrar eventos correctamente.
   - Debe mostrar mensajes condicionales según el estado de los datos (ejemplo: "No hay eventos disponibles").

2. **Uso de directivas:**
   - Implementación eficiente de `repeat` para renderizar la lista.
   - Uso de `classMap` y `styleMap` para estilos dinámicos.
   - Aplicación de `choose` o `when` para manejar lógica condicional.

3. **Interactividad:**
   - El sistema de filtros y botones debe ser intuitivo y funcional.
   - Los eventos deben responder correctamente a las acciones del usuario.

4. **Estilización:**
   - Diseño limpio y consistente.
   - Uso adecuado de estilos dinámicos según las categorías y estados de los eventos.

5. **Código y organización:**
   - Estructura modular con componentes bien definidos.
   - Código limpio, legible y documentado.

<br/> <br/>

## **Entrega**

1. **Formato:**
   - Entregar el proyecto como un repositorio de GitHub que incluya todos los archivos del código fuente.

2. **Incluir:**
   - Un archivo `README.md` con:
     - Descripción del proyecto.
     - Instrucciones para instalar dependencias y ejecutar la aplicación.
   - Capturas de pantalla o un breve video de la aplicación en funcionamiento.

3. **Fecha límite:** (Definir según el cronograma del curso).

