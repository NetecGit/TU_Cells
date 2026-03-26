document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('browser');

    // Escucha cambios en el campo de entrada
    input.addEventListener('input', () => {
        console.log(`Valor ingresado o seleccionado: ${input.value}`);
    });

    // Explica cuándo usar datalist en lugar de select
    console.log('Usa <datalist> cuando necesitas permitir valores personalizados junto con sugerencias predefinidas.');
    console.log('Si solo deseas una lista fija de opciones, <select> sería más adecuado.');
});
