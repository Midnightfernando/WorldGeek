function adicionarManga() {
    var campoMangaFavorito = document.querySelector('#manga')
    var mangaFavorito = campoMangaFavorito.value
    if (mangaFavorito.endsWith('.jpg')) {
        listarMangaNaTela(mangaFavorito)
    } else {
        alert("Imagem inválida")
    }
    campoMangaFavorito.value = ""
}

function listarMangaNaTela(filme) {
    var listaManga = document.querySelector('#listaManga')
    var elementoMAnga = "<img src=" + manga + ">"
    listaMangas.innerHTML = listaMangas.innerHTML + elementoManga
}