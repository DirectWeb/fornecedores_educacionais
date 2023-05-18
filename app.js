var button = document.getElementById("botao-categorias");

button.addEventListener("click", function() {

    var conteiner = document.getElementById("menu-categorias");
    if (conteiner.style.display === "block") {
        conteiner.style.display = "none";
    } else {
        conteiner.style.display = "block";
    }
});

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('menu-categorias');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});