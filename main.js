
var operacion = document.getElementById("operacion")

var select = operacion.addEventListener("click", function () {
	if (document.getElementById("select-operation").style.display = "none") {
		document.getElementById("select-operation").style.display = "flex";
		document.getElementById("select-option").style.display = "none";
	} else {
		document.getElementById("select-operation").style.display = "none";
	}
})

var element = document.getElementById("back")

var option = element.addEventListener("click", function () {
	if (document.getElementById("select-operation").style.display = "flex") {
		document.getElementById("select-operation").style.display = "none";
		document.getElementById("select-option").style.display = "flex";
	} else {
		document.getElementById("select-operation").style.display = "flex";
	}
})

//option
//switch
//funcion matematicas
//whil

function Suma(){
	print("value of suma")

};
function Resta(){
	print("value of Resta")

};
function Multiplicacion(){
	console.log("value of multiplicacion")
let	valueOne=4;
let	ValueTwo=2;
let total= valueOne*ValueTwo;
console.log(total);

};
function division() {
	print("value of division")

}
Multiplicacion();