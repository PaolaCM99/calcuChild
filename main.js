
import { buttons, Limpiar } from "./buttons.js"

buttons();

let con = 10;
let acomulador = 1;
let numeroDos = "";
let numeroUno = "";


function Suma() {
	do {
		let btn = document.getElementById('submit-suma');
		let input = document.getElementById("input-suma");
		btn.addEventListener("click", () => {
			let numeroUno = input.value + "+";
			acomulador = acomulador + parseFloat(numeroUno);
			document.getElementById('display-suma').textContent = numeroUno + numeroDos;
			document.getElementById('display-result').textContent = acomulador;
			document.getElementById("input-suma").value = "";
			numeroDos = acomulador;
		})

	} while (con < 3);
}

function Resta() {
	do {
		let btn = document.getElementById('submit-resta');
		let input = document.getElementById("input-resta");
		btn.addEventListener("click", () => {
			let numeroUno = input.value + "-";
			acomulador = parseFloat(numeroUno) - parseFloat(acomulador);
			document.getElementById('display-resta').textContent = numeroUno + numeroDos;
			document.getElementById('display-result-subtraction').textContent = acomulador;
			document.getElementById("input-resta").value = "";
			numeroDos = acomulador;
		})

	} while (con < 3);

};
function Multiplicacion() {
	do {
		let btn = document.getElementById('submit-multiplicacion');
		let inputUno = document.getElementById("input-multiplicacion-uno");
		let inputDos = document.getElementById("input-multiplicacion-dos");
		let nota = document.getElementById('notas-multiplicacion');
		let displayResult = document.getElementById('display-result-multiplication')
		btn.addEventListener("click", () => {
			let numeroUno = inputUno.value + "*";
			let numeroDos = inputDos.value;
			if (parseFloat(numeroUno) == 0 || parseFloat(numeroDos) == 0) {
				nota.textContent = "Cualquier numero multiplicado por 0 da como resultado 0";
			}

			let resultado = parseFloat(numeroUno) * parseFloat(numeroDos);
			if (isNaN(resultado)) {
				nota.textContent = "Ingresa un numero"
				nota.style.color = "rgb(248, 38, 255)"
				displayResult.textContent = "Ingresa un numero"
				displayResult.style.fontSize = "15px"
			} else {
				document.getElementById('display-multiplicacion').textContent = numeroUno + numeroDos;
				displayResult.textContent = resultado;
				nota.style.color = "black"
				inputUno.value = "";
				inputDos.value = "";
			};


		})

	} while (con < 3);
};
function division() {

	do {
		let btn = document.getElementById('submit-division');
		let inputUno = document.getElementById("input-division-uno");
		let inputDos = document.getElementById("input-division-dos");
		let nota= document.getElementById('notas');
		let displayResult= document.getElementById('display-result-division');
		btn.addEventListener("click", () => {
			let numeroUno = inputUno.value;
			let numeroDos = inputDos.value;
			let resultado = parseFloat(numeroUno) / parseFloat(numeroDos);
		

			if (isNaN(resultado)) {
				nota.textContent = "Ingresa un numero"
				nota.style.color = "rgb(248, 38, 255)"
				displayResult.textContent = "Ingresa un numero"
				displayResult.style.fontSize = "15px"
			}else{
				nota.textContent = ""
				nota.style.color = "black"
				if (numeroUno == 0) {
					nota.textContent = "El valor es 0, ya que cualquier numero en el dividendo es igual a cero";
				} else if (numeroDos == 0) {
					nota.textContent = "Si su divisor es 0, el resultado se considera indefinido";
				}

				document.getElementById('display-division').textContent = numeroUno + "/" + numeroDos;
				document.getElementById('display-result-division').textContent = resultado;
				inputUno.value = "";
				inputDos.value = "";
			}

			
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



Limpiar(acomulador,numeroDos, numeroUno);
Resta()
Suma();
Multiplicacion();
identificacion();
division()

document.getElementById('clear').addEventListener("click", Limpiar)
document.getElementById('clearResta').addEventListener("click", Limpiar)
document.getElementById('clearDivision').addEventListener("click", Limpiar)
document.getElementById('clearMultiplicacion').addEventListener("click", Limpiar)
document.getElementById('clearIdentificacion').addEventListener("click", Limpiar)