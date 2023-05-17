var button = document.getElementById("botao-categorias");

button.addEventListener("click", function() {

    var conteiner = document.getElementById("menu-categorias");
    if (conteiner.style.display === "block") {
        conteiner.style.display = "none";
    } else {
        conteiner.style.display = "block";
    }
});

