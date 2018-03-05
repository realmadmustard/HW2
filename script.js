var number1, number2, result;
var checker = true;

result = function() {
		checker = true;
		number1 = NaN; number2 = NaN;
		while (checker) {
			var n1 = number1Init();
			var n2 = number2Init();
			var operation = operationInit();
			if (operation === null) {
				checker = false;
			} else if (operation == 'plus' || operation == '+' || operation == "плюс") {
				operation = 'plus';
				checker = false;
			} else if (operation == 'minus' || operation == '-' || operation == "минус") {
				operation = 'minus';
				checker = false;
			} else if (operation == 'multiply' || operation == '*' || operation == "умножить") {
				operation = 'multiply';
				checker = false;
			} else if (operation == 'divide' || operation == '/' || operation == "делить") {
				operation = 'divide';
				if (operation == 'divide' && n2 == 0){
					alert('Sorry, you can\'t divide by zero!');
					number2 = NaN;
				} else {
					checker = false;
				}
			} else {
				alert('Sorry, we can\'t recognize your wish, try again please:)');
			}
			var operationRes;
			switch (operation) {
				case 'plus': {
					operationRes = n1 + n2;
					break;
				}
				case 'minus': {
					operationRes = n1 - n2;
					break;
				}
				case 'multiply': {
					operationRes = n1 * n2;
					break;
				}
				case 'divide': {
					operationRes = n1 / n2;
					break;
				}
			}		
			checker = confirm ('Show result?')
			if (checker) {
				return document.getElementById('answer').innerHTML = operationRes;
			} else {
				return document.getElementById('answer').innerHTML = 'Unwanted result';
			}
		}
	};

function number1Init () {
	while (isNaN(number1) || typeof number1 == 'undefined' || number1 == 0) {
		number1 = +prompt('Enter first operand!');
		if (number1 == null) {
			break;
		} else {
			return number1;
		}
	}
}
function number2Init () {
	while (isNaN(number2) || typeof number2 == 'undefined' || number2 == 0) {
		number2 = +prompt('Enter second operand!');
		if (number2 == null) {
			break;
		} else {
			return number2;
		}
	}
}
function operationInit() {
	var res = prompt('Enter the type of operation you would like to make with numbers!');
	return res;
}