const escolha = document.querySelector("#percentChoice");
const valor1 = document.querySelector("#percentInput");
const valor2 = document.querySelector("#numberCalc");
const resultDiv = document.querySelector("#resultInput");
const copyButton = document.querySelector("#copyButton");
const copyMessage = document.querySelector("#copyMessage");

const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const icon3 = document.querySelector("#icon3");

valor1.focus();

setCalc();

escolha.addEventListener('change', function(){
    setCalc();
});

escolha.addEventListener('blur', function(){
    setCalc();
});

function setCalc(){
    if (escolha.value == "option1"){
        iconlado1();
    }else if (escolha.value == "option2"){
        iconlado2();
    }
}

function iconlado1() {
    icon1.style.display = 'block';
    icon2.style.display = 'none';
    icon3.style.display = 'none';
}

function iconlado2() {
    icon1.style.display = 'none';
    icon2.style.display = 'none';
    icon3.style.display = 'block';
}

valor1.addEventListener("change", function(){
    showResult(calcOption1(valor1.value, valor2.value));
});

valor1.addEventListener("blur", function(){
    showResult(calcOption1(valor1.value, valor2.value));
});

valor1.addEventListener("keyup", function(){
    showResult(calcOption1(valor1.value, valor2.value));
});

valor2.addEventListener("change", function(){
    showResult(calcOption1(valor1.value, valor2.value));
});

valor2.addEventListener("blur", function(){
    showResult(calcOption1(valor1.value, valor2.value));
});

valor2.addEventListener("keyup", function(){
    showResult(calcOption1(valor1.value, valor2.value));
});

function calcOption1(val1, val2){
    let result;
    if(val1 != "" && val2 != ""){
        if (escolha.value == "option1"){
            result = (val1 / 100) * val2;
        }else if (escolha.value =="option2"){
            result = ((1.0 - (val2 - val1) / val2)) * 100;
        }
        return result.toFixed(1);
    }else{
        return "";
    }
}

function showResult(val){
    resultDiv.value = val;
}

copyButton.addEventListener("click", function(){
    if (resultDiv.value != ''){
        navigator.clipboard.writeText(resultDiv.value);
        copyMessage.innerHTML = "Valor Copiado!";
        copyMessage.style.top = '5rem';
        setTimeout(() => {
            copyMessage.style.top = '-5rem';
        }, 1250);
    }else{
        copyMessage.innerHTML = "Sem valor para copiar.";
        copyMessage.style.top = '5rem';
        setTimeout(() => {
            copyMessage.style.top = '-5rem';
        }, 1250);
    }
});