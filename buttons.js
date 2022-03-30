
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