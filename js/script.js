//Declaracion de variables
var listarea = document.getElementById("listarea");
var campo = document.getElementById("campo");
var	botonEntrada = document.getElementById("botonEntrada");
var	iconPapelera = document.createElement("i");
var	iconCheck = document.createElement("input");

var paraTareas = function(){
		listarea = campo.value;
		hipervinculo = document.createElement("span");
		newTarea = document.createElement("li");
		content = document.createTextNode(listarea);
	if (listarea === ""){
		campo.setAttribute("placeholder","Debe agregar una tarea correcta ");
		campo.className = "error, form-control";
		return false;
	}
	iconCheck.setAttribute("type","iconCheck");
	iconCheck.setAttribute("onChange","check()")
	newTarea.appendChild(iconCheck);
	hipervinculo.appendChild(content);
	newTarea.appendChild(hipervinculo);
	iconPapelera.classList.add("fa","fa-check-square");
	newTarea.appendChild(iconPapelera);
	listarea.appendChild(campo);
	campo.value = "";

	for (var i = 0; i< listarea.children.length; i++) {
		listarea.children[i].children[2].addEventListener("click", function(){
			var li = this.parentNode;
			listarea.removeChild(li);
	});
}	
};
