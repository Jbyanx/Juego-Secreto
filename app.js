
//ADIVINA UN NUMERO
let oportunidades = parseInt(prompt("Bienvenido al Juego de Adivinar el numero que estoy pensando, ¿Cuantas oportunidades quieres?"));
let numeroMax = parseInt(prompt("¿Hasta que numero quieres jugar? [ 1 - ?]?"));
let numeroSecreto = parseInt(Math.round(Math.random()*numeroMax)+1); //de 1 a numero max [1 - numeroMax]
let numeroUsuario;
let intentos = 1;
let ganar = false;

for (let i = 0; i < oportunidades; i++) {
    numeroUsuario = prompt(`Digita un numero entre [1-${numeroMax}]`);

    if(numeroUsuario == numeroSecreto){
        alert(`Correcto!! Felicidades, has ganado el Juego! el numero era ${numeroSecreto}, usaste ${intentos} ${(intentos == 1) ? "intento" :"intentos"}`);
        ganar = true;
        break;
    } else{
        intentos++;

        if(numeroSecreto > numeroUsuario){
            alert(`Incorrecto :C El numero secreto es Mayor que ${numeroUsuario}`);
        } else{
            alert(`Incorrecto :C El numero secreto es Menor que ${numeroUsuario}`);
        }
    }  
}

if(!ganar){
    alert("Perdiste, has alcanzado el maximo de intentos");
}

