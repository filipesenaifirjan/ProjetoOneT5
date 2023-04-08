const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", function() {
	document.body.classList.toggle("dark-mode");
	if (document.body.classList.contains("dark-mode")) {
		changeColorButton.innerHTML = "Mudar para modo claro";
	} else {
		changeColorButton.innerHTML = "Mudar para modo escuro";
	}
});