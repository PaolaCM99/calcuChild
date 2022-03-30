export function Atras() {
	if (document.getElementById("select-operation").style.display = "flex"){
		document.getElementById("section-suma").style.display = "none";
		document.getElementById("select-operation").style.display = "none";
		document.getElementById("select-option").style.display = "flex";
		
	} else {
		document.getElementById("select-operation").style.display = "flex";
	}
}
export function mostrarOperacionesMatematicas() {
	if (document.getElementById("select-operation").style.display = "none") {
		document.getElementById("select-operation").style.display = "flex";
		document.getElementById("select-option").style.display = "none";
	} else {
		document.getElementById("select-operation").style.display = "none";
	}
}
export function mostrarSuma() {
	if (document.getElementById("section-suma").style.display = "none") {
		document.getElementById("select-operation").style.display = "none";
		document.getElementById("select-option").style.display = "none";
		document.getElementById("section-suma").style.display = "flex";
	} else {
		document.getElementById("section-suma").style.display = "none";
	}
}
export function atrasSuma() {
	if (document.getElementById("section-suma").style.display = "flex") {
		document.getElementById("select-operation").style.display = "flex";
		document.getElementById("select-option").style.display = "none";
		document.getElementById("section-suma").style.display = "none";
	} else {
		document.getElementById("section-suma").style.display = "none";
	}
}

export function mostrarResta() {
	if (document.getElementById("section-resta").style.display = "none") {
		document.getElementById("select-operation").style.display = "none";
		document.getElementById("select-option").style.display = "none";
		document.getElementById("section-resta").style.display = "flex";
	} else {
		document.getElementById("section-resta").style.display = "none";
	}
}
export function atrasResta() {
	if (document.getElementById("section-resta").style.display = "flex") {
		document.getElementById("select-operation").style.display = "flex";
		document.getElementById("select-option").style.display = "none";
		document.getElementById("section-resta").style.display = "none";
	} else {
		document.getElementById("section-resta").style.display = "none";
	}
}
export function mostrarMultiplicacion() {
	if (document.getElementById("section-multiplicacion").style.display = "none") {
		document.getElementById("select-operation").style.display = "none";
		document.getElementById("select-option").style.display = "none";
		document.getElementById("section-multiplicacion").style.display = "flex";
	} else {
		document.getElementById("section-multiplicacion").style.display = "none";
	}
}
export function atrasMutiplicacion() {
	if (document.getElementById("section-multiplicacion").style.display = "flex") {
		document.getElementById("select-operation").style.display = "flex";
		document.getElementById("select-option").style.display = "none";
		document.getElementById("section-multiplicacion").style.display = "none";
	} else {
		document.getElementById("section-multiplicacion").style.display = "none";
	}
}

export function mostrarDivision() {
	if (document.getElementById("section-division").style.display = "none") {
		document.getElementById("select-operation").style.display = "none";
		document.getElementById("select-option").style.display = "none";
		document.getElementById("section-division").style.display = "flex";
	} else {
		document.getElementById("section-division").style.display = "none";
	}
}
export function atrasDivision() {
	if (document.getElementById("section-division").style.display = "flex") {
		document.getElementById("select-operation").style.display = "flex";
		document.getElementById("select-option").style.display = "none";
		document.getElementById("section-division").style.display = "none";
	} else {
		document.getElementById("section-division").style.display = "none";
	}
}