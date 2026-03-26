// Clase base: Vehículo
class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    // Método para describir el vehículo
    describir() {
        return `Vehículo: ${this.marca} ${this.modelo}, Año: ${this.anio}`;
    }

    // Método estático para comparar dos vehículos por año
    static compararPorAnio(vehiculo1, vehiculo2) {
        return vehiculo1.anio - vehiculo2.anio;
    }
}

// Clase hija: Auto
class Auto extends Vehiculo {
    constructor(marca, modelo, anio, combustible) {
        super(marca, modelo, anio);
        this.combustible = combustible;
    }

    describir() {
        return `${super.describir()} - Combustible: ${this.combustible}`;
    }
}

// Uso
console.log();
const auto1 = new Auto('Toyota', 'Corolla', 2020, 'Gasolina');
const auto2 = new Auto('Honda', 'Civic', 2018, 'Diésel');

console.log(auto1.describir());
console.log(auto2.describir());
console.log(`Comparación por año: ${Vehiculo.compararPorAnio(auto1, auto2)}`);



// Clase base: Libro
class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }

    // Método para describir el libro
    describir() {
        return `Libro: "${this.titulo}" por ${this.autor}, Publicado en: ${this.anio}`;
    }

    // Método estático para verificar si un libro es reciente
    static esReciente(libro) {
        return libro.anio >= 2015;
    }
}

// Clase hija: LibroDigital
class LibroDigital extends Libro {
    constructor(titulo, autor, anio, formato) {
        super(titulo, autor, anio);
        this.formato = formato;
    }

    describir() {
        return `${super.describir()} - Formato: ${this.formato}`;
    }
}

// Uso
console.log();
const libro1 = new LibroDigital('El Nombre del Viento', 'Patrick Rothfuss', 2007, 'ePub');
const libro2 = new LibroDigital('La Sombra del Viento', 'Carlos Ruiz Zafón', 2020, 'PDF');

console.log(libro1.describir());
console.log(libro2.describir());
console.log(`¿Es reciente? ${Libro.esReciente(libro2)}`);


// Clase base: FiguraGeometrica
class FiguraGeometrica {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Método para describir la figura
    describir() {
        return `Figura: ${this.nombre}`;
    }

    // Método estático para calcular el área total de varias figuras
    static areaTotal(figuras) {
        return figuras.reduce((total, figura) => total + figura.calcularArea(), 0);
    }
}

// Clase hija: Cuadrado
class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super('Cuadrado');
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }

    describir() {
        return `${super.describir()} - Lado: ${this.lado} - Área: ${this.calcularArea()}`;
    }
}

// Clase hija: Círculo
class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super('Círculo');
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }

    describir() {
        return `${super.describir()} - Radio: ${this.radio} - Área: ${this.calcularArea().toFixed(2)}`;
    }
}

// Uso
console.log();
const cuadrado = new Cuadrado(4);
const circulo = new Circulo(3);

console.log(cuadrado.describir());
console.log(circulo.describir());
console.log(`Área total: ${FiguraGeometrica.areaTotal([cuadrado, circulo])}`);
