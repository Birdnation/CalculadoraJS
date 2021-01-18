//Variables
var pantalla = document.getElementById('pantalla');
var operacion = document.getElementById('operacion');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btn0 = document.getElementById('btn0');
var btnDiv = document.getElementById('btn/');
var btnMult = document.getElementById('btn*');
var btnRest = document.getElementById('btn-');
var btnSum = document.getElementById('btn+');
var btnC = document.getElementById('btnC');
var btnEq = document.getElementById('btn=');
var op1;
var op2;
var simbolo;

btn1.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '1';
}

btn2.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '2';
}

btn3.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '3';
}

btn4.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '4';
}

btn5.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '5';
}

btn6.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '6';
}

btn7.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '7';
}

btn8.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '8';
}

btn9.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '9';
}

btn0.onclick = function(e){
    if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
        simbolo = ' ';
    }
    pantalla.textContent = pantalla.textContent + '0';
}

btnC.onclick = function(e){
    pantalla.textContent = '';
    operacion.textContent = 'OP';
}

btnSum.onclick = function(e){
    op1 = pantalla.textContent;
    simbolo = '+';
    pantalla.textContent = '';
    operacion.textContent = simbolo;
}

btnRest.onclick = function (e){
    op1 = pantalla.textContent;
    simbolo = '-';
    pantalla.textContent = '';
    operacion.textContent = simbolo;
}

btnMult.onclick = function (e){
    op1 = pantalla.textContent;
    simbolo = '*';
    pantalla.textContent = '';
    operacion.textContent = simbolo;
}

btnDiv.onclick = function (e){
    op1 = pantalla.textContent;
    simbolo = '/';
    pantalla.textContent = '';
    operacion.textContent = simbolo;
}

btnEq.onclick = function(e){
    op2 = pantalla.textContent;
    pantalla.textContent = '';
    if (simbolo == '+') {
        pantalla.textContent = parseInt(op1) + parseInt(op2);
        op1 = parseInt(op1) + parseInt(op2);
        operacion.textContent = '=';
        simbolo = '=';
    }else if (simbolo == '-') {
        pantalla.textContent = parseInt(op1) - parseInt(op2);
        op1 = parseInt(op1) - parseInt(op2);
        operacion.textContent = '=';
        simbolo = '=';
    }else if(simbolo == '*'){
        pantalla.textContent = parseInt(op1) * parseInt(op2);
        op1 = parseInt(op1) * parseInt(op2);
        operacion.textContent = '=';
        simbolo = '=';
    }else if(simbolo == '/'){
        pantalla.textContent = parseInt(op1) / parseInt(op2);
        op1 = parseInt(op1) / parseInt(op2);
        operacion.textContent = '=';
        simbolo = '=';
    }else if (simbolo == '=') {
        pantalla.textContent = '';
        operacion.textContent = 'OP';
    }
}