
import { buttons } from "./buttons.js"

buttons();

let con = 10;
let acomulador = 0;
let numeroDos = "";
let numeroUno = "";

//Los valores se resetean y quedan en 0, lo mejor seria dejarlos vacios(null)
function Suma() {
	do {
		let btn = document.getElementById('submit-suma');
		let input = document.getElementById("input-suma");
		btn.addEventListener("click", () => {
			let numeroUno = input.value;
			acomulador = acomulador + parseFloat(numeroUno);
			document.getElementById('display-suma').textContent = numeroDos + "" + numeroUno;
			document.getElementById('display-result').textContent = acomulador;
			document.getElementById("input-suma").value = acomulador;
			numeroDos = acomulador;
		})

	} while (con < 3);
}

function Resta() {
	do {
		let btn = document.getElementById('submit-resta');
		let input = document.getElementById("input-resta");
		btn.addEventListener("click", () => {
			let numeroUno = input.value;
			acomulador = parseFloat(numeroUno) - parseFloat(acomulador);
			document.getElementById('display-resta').textContent = numeroDos + "-" + numeroUno;
			document.getElementById('display-result-subtraction').textContent = acomulador;
			document.getElementById("input-resta").value = acomulador;
			numeroDos = acomulador;
		})

	} while (con < 3);

};
function Multiplicacion() {
	do {
		let btn = document.getElementById('submit-multiplicacion');
		let input = document.getElementById("input-multiplicacion");
		btn.addEventListener("click", () => {
			let numeroUno = input.value;
			acomulador = parseFloat(numeroUno) * parseFloat(acomulador);
			document.getElementById('display-multiplicacion').textContent = numeroDos + "*" + numeroUno;
			document.getElementById('display-result-subtraction').textContent = acomulador;
			document.getElementById("input-multiplicacion").value = acomulador;
			numeroDos = acomulador;
		})

	} while (con < 3);
};
function division() {

	do {
		let btn = document.getElementById('submit-division');
		let input = document.getElementById("input-division");
		btn.addEventListener("click", () => {
			let numeroUno = input.value;
			acomulador = parseFloat(numeroUno) / parseFloat(acomulador);
			document.getElementById('display-division').textContent = numeroDos + "/" + numeroUno;
			document.getElementById('display-result-subtraction').textContent = acomulador;
			document.getElementById("input-division").value = acomulador;
			numeroDos = acomulador;
		})

	} while (con < 3);
}

function identificacion() {

	do {
		let btn = document.getElementById('submit-identificacion');
		let inputUno = document.getElementById("input-identificacion-uno");
		let inputDos = document.getElementById("input-identificacion-dos");
		btn.addEventListener("click", () => {
			let numeroUno = parseFloat(inputUno.value);
			let numeroDos = parseFloat(inputDos.value);

			if (numeroUno > numeroDos) {
				document.getElementById('display-result-numbers').textContent = numeroUno + " es mayor que" + numeroDos;
				document.getElementById('display-identificacion').textContent = numeroUno + ">" + numeroDos

			} if (numeroUno < numeroDos) {
				document.getElementById('display-result-numbers').textContent = numeroUno + " es menor que " + numeroDos;
				document.getElementById('display-identificacion').textContent = numeroUno + "<" + numeroDos
			}
			if (numeroUno == numeroDos) {
				document.getElementById('display-result-numbers').textContent = numeroUno + " es igual que " + numeroDos;
				document.getElementById('display-identificacion').textContent = "SON IGUALES"
			}
		})

	} while (con < 3);
}


function Limpiar() {
	acomulador = 0;
	numeroDos = 0;
	numeroUno = 0;
	document.getElementById("input-suma").value = 0;
	document.getElementById('display-result').textContent = 0;
	document.getElementById('display-suma').textContent = 0;

	document.getElementById("input-resta").value = 0;
	document.getElementById('display-result').textContent = 0;
	document.getElementById('display-resta').textContent = 0;

}

Resta()
Suma();
Multiplicacion();
identificacion();
division()
document.getElementById('clear').addEventListener("click", Limpiar)
document.getElementById('clearResta').addEventListener("click", Limpiar)