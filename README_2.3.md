
# Práctica 2.3 Implementando Programación Orientada a Objetos en JavaScript

## Objetivo:
Al finalizar la práctica, serás capaz de:

- Implementar clases, herencia, métodos, constructores, y métodos estáticos utilizando programación orientada a objetos en JavaScript. 
- Comprender el uso del contexto `this` en diferentes escenarios.

## Duración aproximada:
- 35 minutos.

## **Instrucciones Generales:**
1. Realiza cada tarea de forma secuencial, completando los pasos en el orden indicado.
2. Analiza los conceptos teóricos antes de implementar las soluciones prácticas.
3. Utiliza comentarios en tu código para documentar tus decisiones y observaciones.
4. Guarda tu archivo con el nombre `practica_2_3.js`.
5. Al terminar, verifica que todos los pasos cumplen con los requisitos del resultado esperado.

## **Instrucciones**

### **Tarea 1: Crear una Clase con Propiedades y Métodos**
1. Define una clase que represente un tipo de objeto de tu elección (por ejemplo, un `Vehículo` o un `Libro`).
2. Añade propiedades básicas al constructor para inicializar los atributos del objeto.
3. Implementa métodos para interactuar con las propiedades de la clase (por ejemplo, calcular una característica específica o imprimir información del objeto).


### **Tarea 2: Implementar Herencia**
1. Crea una nueva clase que herede de la clase definida en la Tarea 1.
2. En el constructor de la clase hija, utiliza `super` para inicializar las propiedades heredadas.
3. Añade nuevas propiedades exclusivas de la clase hija.
4. Define métodos adicionales o sobreescribe métodos de la clase base.


### **Tarea 3: Utilizar el Contexto `this`**
1. Dentro de la clase base, implementa un método que utilice `this` para referirse a las propiedades del objeto.
2. Crea una instancia de la clase y llama al método para observar cómo funciona el contexto `this` dentro de una clase.
3. Intenta utilizar este método dentro de un entorno donde el contexto `this` cambie (por ejemplo, en una función de callback). Reflexiona sobre el comportamiento observado.


### **Tarea 4: Métodos Estáticos**
1. Añade un método estático a la clase base que realice una operación relacionada con la clase, pero que no requiera una instancia (por ejemplo, comparar dos objetos o generar un identificador único).
2. Invoca este método estático desde la clase y verifica que funcione correctamente.


<br/> <br/>

## **Resultado Esperado:**
- **Tarea 1:** Una clase funcional que permita crear objetos con propiedades y métodos específicos. Ejemplo: Instancias de un `Vehículo` con marca, modelo y método para describirlo.

- **Tarea 2:** Una clase hija que herede correctamente de la clase base y añada comportamientos y propiedades nuevas. Ejemplo: Una clase `Auto` que herede de `Vehículo` e incluya detalles adicionales como el tipo de combustible.

- **Tarea 3:** Ejemplos prácticos que demuestren cómo cambia el contexto `this` en diferentes escenarios.

- **Tarea 4:** Métodos estáticos funcionales, invocados directamente desde la clase, sin requerir instancias.

<br/>

---

<br/>

- Captura de pantalla que muestra la salida generada para la jerarquía de clases implementada: vehículos, libros y figuras geométricas.

![imagen resultado](../images/image2_3_1.png)

<br/>

**Nota**:
- Al concluir esta práctica, tendrás una mejor comprensión de los conceptos fundamentales de programación orientada a objetos en JavaScript.
