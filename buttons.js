
import {Atras, mostrarOperacionesMatematicas, mostrarSuma, atrasSuma, mostrarResta, atrasResta, mostrarMultiplicacion, atrasMutiplicacion, mostrarDivision,  atrasDivision, mostrarIdentificacion, atrasIdentificacion} from "./screens.js"

export  function buttons(){
	document.getElementById("back").addEventListener("click", Atras)
	document.getElementById("operacion").addEventListener("click", mostrarOperacionesMatematicas)
	document.getElementById("suma").addEventListener("click", mostrarSuma)
	document.getElementById("backSum").addEventListener("click", atrasSuma)
	document.getElementById("resta").addEventListener("click", mostrarResta)
	document.getElementById("backSubtraction").addEventListener("click", atrasResta)
	document.getElementById("multiplicacion").addEventListener("click", mostrarMultiplicacion)
	document.getElementById("backMultiplication").addEventListener("click", atrasMutiplicacion)
	document.getElementById("division").addEventListener("click", mostrarDivision)
	document.getElementById("backDivision").addEventListener("click", atrasDivision)

	//------------------------------------------------------------
	document.getElementById("identificacion").addEventListener("click", mostrarIdentificacion)
	document.getElementById("backIdentificacion").addEventListener("click", atrasIdentificacion)
}

export function Limpiar(acomulador, numeroDos, numeroUno) {
	acomulador = 0;
	numeroDos = 0;
	numeroUno = 0;
	document.getElementById("input-suma").value = "";
	document.getElementById('display-result').textContent = 0;
	document.getElementById('display-suma').textContent = 0;

	document.getElementById("input-resta").value = "";
	document.getElementById('display-result').textContent = 0;
	document.getElementById('display-resta').textContent = 0;
	document.getElementById('notas').textContent = "";
	document.getElementById('display-division').textContent = "";
	document.getElementById('display-result-multiplication').textContent = "";
	document.getElementById('notas-multiplicacion').textContent = "";
	document.getElementById("input-identificacion-uno").value = 0;
	document.getElementById("input-identificacion-dos").value = 0;
	document.getElementById('display-multiplicacion').textContent = "";
	document.getElementById('display-result-numbers').textContent = 0;
	document.getElementById('display-identificacion').textContent = 0;

}