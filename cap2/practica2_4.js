// Tarea 1

/*
console.log(saludar("José Antonio"));  

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}



// Terea 2

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


console.log("El factorial de 0 es: " + factorial(0));  
console.log('El factorial de 1 es: ' + factorial(1));  
console.log(`El factorial de 17 es: ${factorial(5)}`);  
console.log(`El factorial de 17 es: ${factorial(17)}`);  
console.log("El factorial de 20 es: " + factorial(20));  
  


// Tarea 3.


(function () {
    console.log("Esta es una función autoejecutable");
})();

(function (mensaje) {
    console.log(mensaje);
})("¡Hola desde una IFE!");

(function (valor) {
    console.log(`El tipo de la variable "valor" es: ${typeof valor}`); 
})("5");


(function (valor) {
    console.log(`El tipo de la variable "valor" es: ${typeof valor}`); 
})(5);

(function (valor) {
    console.log(`El tipo de la variable "valor" es: ${typeof valor}`); 
})();

(function (valor) {
    console.log(`El tipo de la variable "valor" es: ${typeof valor}`); 
})(null);

*/


/*

// Tarea 4

const elevarAlCuadrado = (num) => num * num;

console.log("Elevar al cuadrado:")
console.log(elevarAlCuadrado(4));
console.log(elevarAlCuadrado(7));
console.log();

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter((num) => num % 2 === 0);

console.log("Pares:")
console.log(pares);
console.log();

const fac = (n) => (n <= 1 ? 1 : n * fac(n - 1));

console.log("Factorial: ")
console.log(fac(5));
console.log(fac(7));
console.log();

const numeros2 = [1, 2, 3, 4, 5];
const sumaCuadrados = numeros2
    .map((num) => num * num)  
    .reduce((acumulador, valor) => acumulador + valor, 0);  

console.log("Map & Reduce")
console.log(sumaCuadrados);
console.log();

console.log("Cadenas Join:")
const concatenarCadenas = (cadenas) => cadenas.join(", ");

const nombres = ["Greta", "Juan", "María", "Luis"];
console.log(concatenarCadenas(nombres));
console.log();

*/


// Tarea 5

const sumar = function (a, b) {
    return a + b;
};

console.log(sumar(8, 12)); 

ff=sumar;
console.log(ff(8,12)); 



// Tarea 6

function multiplicar(a=1, b = 2, ...otros) {
   
    let resultado = a * b;
    
    otros.forEach((num) => {
        resultado *= num;
    });
    
    return resultado;
}

console.log("")
console.log(multiplicar());
console.log(multiplicar(5));              
console.log(multiplicar(5, 3));        

console.log(multiplicar(5, 3, 2, 4)); 

const valores= [ 2,4,6,8];
console.log(multiplicar(5, 3, 2, valores));       