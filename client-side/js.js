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
