let [segundos, minutos, horas] = [0, 0, 0];
let intervalo = null;
let corriendo = false;

const display = document.getElementById('display');
const sonidoInicio = document.getElementById('sonidoInicio');
const sonidoFin = document.getElementById('sonidoFin');

const actualizarDisplay = () => {
    display.innerText = 
        [horas, minutos, segundos]
        .map(n => String(n).padStart(2, '0'))
        .join(':');
};

const iniciar = () => {
    if (corriendo) return;
    corriendo = true;
    sonidoInicio.play();
    intervalo = setInterval(() => {
        if (++segundos === 60) {
            segundos = 0;
            if (++minutos === 60) {
                minutos = 0;
                horas++;
            }
        }
        actualizarDisplay();
    }, 1000);
};

const pausar = () => {
    if (!corriendo) return;
    clearInterval(intervalo);
    corriendo = false;
    sonidoFin.play();
};

const reset = () => {
    clearInterval(intervalo);
    [segundos, minutos, horas] = [0, 0, 0];
    corriendo = false;
    actualizarDisplay();
};

document.getElementById('btnIniciar').addEventListener('click', iniciar);
document.getElementById('btnPausar').addEventListener('click', pausar);
document.getElementById('btnReset').addEventListener('click', reset);

actualizarDisplay();
