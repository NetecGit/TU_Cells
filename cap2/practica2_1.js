
/* Paso 2, Tarea 3

// Solicitar al usuario dos números
const prompt = require("prompt-sync")(); // Necesitas instalar esta librería: npm install prompt-sync

const numero1 = parseFloat(prompt("Ingresa el primer número: "));
const numero2 = parseFloat(prompt("Ingresa el segundo número: "));

// Solución usando operador condicional
const mayor = numero1 > numero2 ? numero1 : numero2;
console.log(`El número mayor usando operador condicional es: ${mayor}`);

// Solución usando estructura if
if (numero1 > numero2) {
  console.log(`El número mayor usando if es: ${numero1}`);
} else if (numero1 < numero2) {
  console.log(`El número mayor usando if es: ${numero2}`);
} else {
  console.log("Ambos números son iguales.");
}

*/

/* Paso 3, Tarea 3

// Importar prompt-sync
const prompt = require("prompt-sync")();

// Mostrar el menú
console.log("Menú:");
console.log("1. Sumar dos números");
console.log("2. Restar dos números");
console.log("3. Salir");

// Solicitar al usuario que elija una opción
const opcion = prompt("Elige una opción (1, 2, 3): ");

switch (opcion) {
  case "1": {
    // Sumar dos números
    const numero1 = parseFloat(prompt("Ingresa el primer número: "));
    const numero2 = parseFloat(prompt("Ingresa el segundo número: "));
    console.log(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`);
    break;
  }
  case "2": {
    // Restar dos números
    const numero1 = parseFloat(prompt("Ingresa el primer número: "));
    const numero2 = parseFloat(prompt("Ingresa el segundo número: "));
    console.log(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2}`);
    break;
  }
  case "3":
    // Salir
    console.log("Saliendo del programa...");
    break;
  default:
    console.log("Opción no válida. Inténtalo de nuevo.");
}


*/

/*
// Paso 4, Tarea 3

// Programa 1: Imprimir los números del 1 al 10 usando un ciclo for
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Programa 2: Imprimir los números del 1 al 10 de 2 en 2 usando un ciclo for
console.log("\nNúmeros del 1 al 10 de 2 en 2:");
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// Programa 3: Sumar los números del 1 al 10 usando un ciclo while
let suma = 0;
let numero = 1;

while (numero <= 10) {
  suma += numero; // Sumar el número actual
  numero++; // Incrementar el número
}

console.log(`\nLa suma de los números del 1 al 10 es: ${suma}`);


*/


// Importar prompt-sync para leer datos del usuario
const prompt = require("prompt-sync")();

// Arreglo para almacenar objetos de personas
const personas = [];

// Bucle para solicitar datos de varias personas
let continuar = true;
while (continuar) {
  // Solicitar nombre, edad y ciudad al usuario
  const nombre = prompt("Ingresa el nombre: ");
  const edad = parseInt(prompt("Ingresa la edad: "));
  const ciudad = prompt("Ingresa la ciudad: ");

  // Crear un objeto con los datos ingresados
  const persona = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad,
  };

  // Agregar el objeto al arreglo de personas
  personas.push(persona);

  // Preguntar si desea continuar
  const respuesta = prompt("¿Deseas agregar otra persona? (sí/no): ").toLowerCase();
  continuar = respuesta === "sí" || respuesta === "si";
}

// Usar un bucle para imprimir los datos de todas las personas
console.log("\nDatos de las personas:");
for (const persona of personas) {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
}
