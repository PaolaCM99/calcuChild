
var operacion = document.getElementById("operacion")

	var select =operacion.addEventListener("click", function() {
		if ( document.getElementById("select-operation").style.display = "none") {
			document.getElementById("select-operation").style.display = "flex";
			document.getElementById("select-option").style.display = "none";
		} else {
			document.getElementById("select-operation").style.display = "none";
		}})
		
		var element = document.getElementById("back")

		var option =element.addEventListener("click", function() {
		if ( document.getElementById("select-operation").style.display = "flex") {
			document.getElementById("select-operation").style.display = "none";
			document.getElementById("select-option").style.display = "flex";
		} else {
			document.getElementById("select-operation").style.display = "flex";
		}})
