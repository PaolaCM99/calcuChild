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