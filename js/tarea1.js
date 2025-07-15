let numeroMagico = null;

const btnComenzar = document.querySelector("#btnComenzar");
const btnEnviar = document.querySelector("#btnEnviar");
const inputNumero = document.querySelector("#inputNumero");
const juegoDiv = document.querySelector("#juego");

btnComenzar.addEventListener("click", () => {
  numeroMagico = Math.floor(Math.random() * 10) + 1;
  console.log("Número mágico:", numeroMagico);
alert("¡El juego ha comenzado! Adivina el número del 1 al 10.");
  juegoDiv.classList.remove("d-none");
});

btnEnviar.addEventListener("click", () => {
    const numeroIngresado = parseInt(inputNumero.value);
    if(isNaN(numeroIngresado)){
        alert('Por Favor ingrese un numero valido')
        return;
    }

    if(numeroIngresado === numeroMagico){
        alert('🎉 ¡Felicidades! Adivinaste el número.')
    }else if (numeroIngresado < numeroMagico){
        alert('El numero es Mayor')
    }else{
        alert('el numero es menor')
    }

    inputNumero.value = "";
})

