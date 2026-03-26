
/*
// Tarea 1 Paso 1
let nombres = ["Greta", "Luis", "Carlos", "Everardo"];
let eliminado = nombres.shift();
nombres.unshift("Elena");
let indiceCarlos = nombres.indexOf("Carlos");
nombres.fill("Desconocido");
console.log({ nombres, eliminado, indiceCarlos });


// Tarea 1 Paso 2

let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
colores.push("Naranja");
let ultimoColor = colores.pop();
let coloresCortados = colores.slice(0, 2);
colores.splice(2, 1);
console.log({ colores, ultimoColor, coloresCortados });

*/

/*
// Tarea2. Paso 1

let numeros = [3, 8, 2, 5, 10];
let numerosDuplicados = numeros.map(num => num * 2);
let numerosMayoresCinco = numeros.filter(num => num > 5);
let sumaTotal = numeros.reduce((acc, num) => acc + num, 0);
numeros.sort((a, b) => b - a);
console.log({ numeros, numerosDuplicados, numerosMayoresCinco, sumaTotal });

*/

/*
// Tarea 3 Paso 1

let persona = { nombre: "Juan", edad: 30, profesion: "Ingeniero" };
persona.hobby = "Fútbol";
delete persona.profesion;
console.log(persona);

// Tarea 3 Paso 2
let capitales = new Map([["España", "Madrid"], ["Francia", "París"]]);
capitales.set("Italia", "Roma");
let capitalFrancia = capitales.get("Francia");

let numerosUnicos = new Set([1, 2, 3, 3, 4, 5]);
let contieneTres = numerosUnicos.has(3);
console.log({ capitales, capitalFrancia, numerosUnicos, contieneTres });

*/

// Tarea 4 Paso 1

let persona = { nombre: "Juan", edad: 30, profesion: "Ingeniero" };
let { nombre, edad } = persona;
console.log({ nombre, edad });

// Tarea 4 Paso 2
let numeros = [3, 8, 2, 5, 10];
let numerosExtendidos = [...numeros, 15, 20];
let [primero, segundo, ...resto] = numeros;
console.log({ numerosExtendidos, primero, segundo, resto });

// Tarea 4 Paso 3
let mayorEdad = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(mayorEdad);

 