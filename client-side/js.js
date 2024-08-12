/*
 * Get the buttons and visor
 */
var visor = document.getElementById("calculadora-visor");
var buttons = document.getElementsByClassName("table-boton")
var numbers = [];
var written_visor = true;

/*
 * Iterate over every buttons
 */
for (let i = 0; i < buttons.length; i++)
{
    //Add an event for every button
    buttons[i].onclick = function() {
        console.log(buttons[i])

        var text = this.textContent;

        if (written_visor)
            {
                visor.innerHTML = "";
                written_visor = false;
            }
                
        addText(text)
        deleteText(text)
        deleteLastText(text)
        calculate(text)
    }
}


//Add the text only if is a number or an operation of the calculator
function addText(text) {
    if (isNumber(text)) {
        visor.innerHTML += text
    } else if (isOperation(text)) {
        visor.innerHTML += text
    } else if (isPoint(text)) {
        visor.innerHTML += text
    }
}

//Delete all the text if is passed 'OFF'
function deleteText(text) {
    if (isOff(text)) {
        numeros = [];
		visor.innerHTML = "";
    }
}

//Deletes the last character of the string of the string
function deleteLastText(text) {
    if (isArrowBack(text)) {
        visor.innerHTML = visor.innerHTML.substring(0, visor.innerHTML.length - 1);
    }
}

//Calculates how much is the calculation
function calculate(text) {
    if (isEqual(text)) {
        // Se fija si se puede hacer la operacion
				texto = esOperable();
				// Si no se puede hacer la operación, entonces, mostrar ERROR en el visor
				if (texto == "ERROR")
				{
					pantallaEscrita = 1;
					visor[0].textContent = texto;
                    return
				}
				// SI es operable, entonces separar en terminos
				terminos = separarTerminos(visor.innerHTML);
				// Se itera sobre cada termino
				for (let i = 0; i < terminos.length; i++)
				{
					// Se simplifica hasta obtener el resultado de cada termino
					terminos[i] = simplificarTerminos(terminos[i]);
				}
				//Se termina de hacer la operación sumando cada termino
				nume = sumarTerminos(terminos);
				if (num % 1 == 0)
				{
					visor.innerHTML = nume;
				}
				else
				{
					visor.innerHTML = nume.toFixed(3);
				}
				pantallaEscrita = 1;
    }
}

/*
 Function that returns true if and only if the text passed is equal to 'OFF'
 */
function isOff(text) {
    let res = false
	if(text == 'OFF')
	{
		res = true;
	}		
	return res;
}

//Returns true if and only if text is an operation of the calculator
function isOperation(text) {
    let res = false
    if (text == '+' || text == '-' || text == 'X' || text == '÷' || text == '√') {
        res = true
    }
    return res
}

function isPoint(text) {
    let res = false
    if (text == '.') {
        res = true
    }
    return res
}

function isArrowBack(text) {
    let res = false
    if (text == '<-') {
        res = true
    }
    return res
}

function isEqual(text) {
    let res = false
    if (text == '=') {
        res = true
    }
    return res
}


/*
 Function that returns true if and only if n is a number
*/
function isNumber(text) {
    let res = false
	if(text == "1" || text == "2" || text == "3" || text == "4" || text == "5" || text == "6" || text == "7" || text == "8" || text == "9" || text == "0")
	{
		res = true;
	}		
	return res;
}

//Adds 2 numbers
function add(number1, number2) {
    return number1 + number2
}

//Substracts 2 numbers
function subtraction(number1, number2) {
    return number1 - number2
}

//Multiply 2 numbers 
function multiply(number1, number2) {
    return number1 * number2
}

//Divide 2 numbers
function divide(number1, number2) {
    return number1 / number2
}

//Returns the squareRoot of num
function squareRoot(num)
{
	return Math.sqrt(num);
}

//Returns num1 divided by 100
function percentage(num1)
{
	return num1 / 100;
}

