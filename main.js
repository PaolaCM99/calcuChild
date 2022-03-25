
document.getElementById("back").addEventListener("click", Atras)
document.getElementById("operacion").addEventListener("click", mostrarOperacionesMatematicas)

let con = 10;
let suma = 0;
let numberTwo = "";

function Suma() {
	do {
		let btn = document.getElementById('submit-suma');
		let input = document.getElementById("input-suma");
		btn.addEventListener("click", () => {
			let numberOne = input.value;
			suma = suma + parseFloat(numberOne);
			document.getElementById('display-suma').textContent = numberTwo + "+" + numberOne;
			document.getElementById('display-result').textContent = suma;
			document.getElementById("input-suma").value = suma;
			numberTwo = suma;
		})

	} while (con < 3);
}

function Resta() {
	console.log("value of Resta")

};
function Multiplicacion() {
	let valueOne = 4;
	let ValueTwo = 2;
	let total = valueOne * ValueTwo;
};
function division() {
	console.log("value of division")

}
Suma();
Multiplicacion();

function Atras() {
	if (document.getElementById("select-operation").style.display = "flex") {
		document.getElementById("select-operation").style.display = "none";
		document.getElementById("select-option").style.display = "flex";
	} else {
		document.getElementById("select-operation").style.display = "flex";
	}
}
function mostrarOperacionesMatematicas() {
	if (document.getElementById("select-operation").style.display = "none") {
		document.getElementById("select-operation").style.display = "flex";
		document.getElementById("select-option").style.display = "none";
	} else {
		document.getElementById("select-operation").style.display = "none";
	}
}

function Limpiar() {
	document.getElementById("input-suma").value = 0;
	suma = 0;
	numberTwo = 0;
	numberOne = 0;
}

document.getElementById('clear').addEventListener("click", Limpiar)