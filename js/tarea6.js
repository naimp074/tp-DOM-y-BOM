let totalSegundos = 0;
let intervalo = null;
let corriendo = false;

const $ = id => document.getElementById(id);

const display = $("display");
const minInput = $("minInput");
const secInput = $("secInput");
const btnIniciar = $("btnIniciar");
const btnPausar = $("btnPausar");
const btnReset = $("btnReset");
const sonidoFin = $("sonidoFin");

const actualizarDisplay = () => {
  const min = String(Math.floor(totalSegundos / 60)).padStart(2, '0');
  const sec = String(totalSegundos % 60).padStart(2, '0');
  display.innerText = `${min}:${sec}`;
};

const iniciar = () => {
  if (corriendo) return;

  if (totalSegundos === 0) {
    totalSegundos =
      (parseInt(minInput.value) || 0) * 60 +
      (parseInt(secInput.value) || 0);
  }

  if (totalSegundos <= 0) return;

  corriendo = true;
  intervalo = setInterval(() => {
    totalSegundos--;
    actualizarDisplay();

    if (totalSegundos <= 0) {
      pausar();
      sonidoFin.play();
    }
  }, 1000);
};

const pausar = () => {
  clearInterval(intervalo);
  corriendo = false;
};

const reset = () => {
  pausar();
  totalSegundos = 0;
  minInput.value = 0;
  secInput.value = 10;
  actualizarDisplay();
};

btnIniciar.addEventListener("click", iniciar);
btnPausar.addEventListener("click", pausar);
btnReset.addEventListener("click", reset);

actualizarDisplay();
