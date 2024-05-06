let botaoVoltar = document.getElementById('botao');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 40) {
        botaoVoltar.style.display = "block";
    } else {
        botaoVoltar.style.display = "none";
    }
}

botaoVoltar.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}