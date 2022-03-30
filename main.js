
import {buttons} from "./buttons.js"

buttons();

let con = 10;
let acomulador = 0;
let numberTwo = "";
let numberOne = "";

//Los valores se resetean y quedan en 0, lo mejor seria dejarlos vacios(null)
function Suma() {
	do {
		let btn = document.getElementById('submit-suma');
		let input = document.getElementById("input-suma");
		btn.addEventListener("click", () => {
			let numberOne = input.value;
			acomulador = acomulador + parseFloat(numberOne);
			document.getElementById('display-suma').textContent = numberTwo + "" + numberOne;
			document.getElementById('display-result').textContent = acomulador;
			document.getElementById("input-suma").value = acomulador;
			numberTwo = acomulador;
		})

	} while (con < 3);
}

function Resta() {
	do {
		let btn = document.getElementById('submit-resta');
		let input = document.getElementById("input-resta");
		btn.addEventListener("click", () => {
			let numberOne = input.value;
			acomulador = parseFloat(numberOne)- parseFloat(acomulador);
			document.getElementById('display-resta').textContent = numberTwo + "-" + numberOne;
			document.getElementById('display-result-subtraction').textContent = acomulador;
			document.getElementById("input-resta").value = acomulador;
			numberTwo = acomulador;
		})

	} while (con < 3);

};
function Multiplicacion() {
	do {
		let btn = document.getElementById('submit-multiplicacion');
		let input = document.getElementById("input-multiplicacion");
		btn.addEventListener("click", () => {
			let numberOne = input.value;
			acomulador = parseFloat(numberOne)* parseFloat(acomulador);
			document.getElementById('display-multiplicacion').textContent = numberTwo + "*" + numberOne;
			document.getElementById('display-result-subtraction').textContent = acomulador;
			document.getElementById("input-multiplicacion").value = acomulador;
			numberTwo = acomulador;
		})

	} while (con < 3);
};
function division() {
	
	do {
		let btn = document.getElementById('submit-division');
		let input = document.getElementById("input-division");
		btn.addEventListener("click", () => {
			let numberOne = input.value;
			acomulador = parseFloat(numberOne)/ parseFloat(acomulador);
			document.getElementById('display-division').textContent = numberTwo + "/" + numberOne;
			document.getElementById('display-result-subtraction').textContent = acomulador;
			document.getElementById("input-division").value = acomulador;
			numberTwo = acomulador;
		})

	} while (con < 3);
}

function Limpiar() {
	acomulador = 0;
	numberTwo = 0;
	numberOne = 0;
	document.getElementById("input-suma").value = 0;
	document.getElementById('display-result').textContent= 0;
	document.getElementById('display-suma').textContent = 0;

	document.getElementById("input-resta").value = 0;
	document.getElementById('display-result').textContent= 0;
	document.getElementById('display-resta').textContent = 0;
	
}

Resta()
Suma();
Multiplicacion();
division()
document.getElementById('clear').addEventListener("click", Limpiar)
document.getElementById('clearResta').addEventListener("click", Limpiar)