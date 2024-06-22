asignarTextoElemento('h1', "Adivinar el numero");
asignarTextoElemento('p',"Ingresa un numero del [1 - 10]");

let numeroSecreto = generarNumeroSecreto(10); 
let intentos = 1;

function jugar(){   
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

    for (let i = 0; i < 10; i++) {
        if(numeroUsuario == numeroSecreto){
            asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos == 1)? "intento" : "intentos"}`);
            document.querySelector("#reiniciar").removeAttribute("disabled"); 
            break;
        }else{ //el usuario no acertó
            intentos++;
            limpiarCaja();
            if(numeroSecreto > numeroUsuario){
                asignarTextoElemento('p', "Error, digita un numero MAYOR");
                return;
            }
            else {
                asignarTextoElemento('p', "Error, digita un numero MENOR");
                return;
            }
        }
    }
}

function limpiarCaja(){
    document.querySelector("#numeroUsuario").value = "";
}

function asignarTextoElemento(elemento, texto){
    let txt = document.querySelector(elemento);
    txt.innerHTML = texto;
}

function generarNumeroSecreto(numeroMax) {
    return parseInt(Math.round(Math.random()*numeroMax)+1);
}

function reiniciarJuego(){
    location.reload();
}