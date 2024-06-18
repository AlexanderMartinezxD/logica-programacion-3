function calcularFactorial(num) {
    if (num < 0) return "El número debe ser mayor o igual a 0";
    if (num === 0) return 1;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

function manejarEnvio() {
    const inputIngreso = document.getElementById('input-ingreso');
    const numeroIngresado = document.getElementById('numero-ingresado');
    const numeroFactorial = document.getElementById('numero-factorial');

    const numero = parseInt(inputIngreso.value);
    numeroIngresado.textContent = numero;

    const resultado = calcularFactorial(numero);
    numeroFactorial.textContent = resultado;

    inputIngreso.value = '';
}

document.getElementById('enviar').addEventListener('click', manejarEnvio);