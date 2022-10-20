function calcule_imc() {
    let peso =  Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value.replace(',','.'));
    calculoIMC = peso / (altura * altura);
    resultado_imc();
    nivel_imc();
}

let calculoIMC;
let nivelIMC;
let classeNivelIMC;
let nome = document.getElementById("name");

let btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", calcule_imc);

let resultadoIMC = document.getElementById("resultadoIMC");

function resultado_imc() {
    resultadoIMC.innerHTML = `${nome.value} o seu IMC resultou em ${calculoIMC.toFixed(2)}`;
}

let seuEstado = document.getElementById("seuEstado");

function seu_estado() {
    seuEstado.innerHTML = `o nível do seu IMC é <span class = '${classeNivelIMC}'> ${nivelIMC} <\span>`;
}

function nivel_imc() {
    if(calculoIMC < 15.99) {
        nivelIMC = "Magreza grave";
        classeNivelIMC = 'magreza-grave'
    } else if(calculoIMC >= 16 && calculoIMC <= 16.99) {
        nivelIMC = "Magreza moderada";
        classeNivelIMC = 'magreza-moderada'
    } else if(calculoIMC >= 17 && calculoIMC <= 18.5) {
        nivelIMC = "Magreza leve";
        classeNivelIMC = 'magreza-leve'
    } else if(calculoIMC >= 18.5 && calculoIMC <= 24.9) {
        nivelIMC = "Saudável";
        classeNivelIMC = 'saudavel'
    } else if(calculoIMC >= 25 && calculoIMC <= 29.9) {
        nivelIMC = "Sobrepeso";
        classeNivelIMC = 'sobrepeso'
    } else if(calculoIMC >= 30 && calculoIMC <= 34.9) {
        nivelIMC = "Obesidade grau 1";
        classeNivelIMC = 'obesidade1'
    } else if(calculoIMC >= 35 && calculoIMC <= 39.9) {
        nivelIMC = "Obesidade grau 2 (severa)";
        classeNivelIMC = 'obesidade2'
    } else if(calculoIMC >= 40) {
        nivelIMC = "Obesidade grau 3 (mórbida)";
        classeNivelIMC = 'obesidade3'
    }
    seu_estado();
}