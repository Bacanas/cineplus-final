let lista_filmes = []
let div_filmes = document.querySelector('#filmes')
let h1_header_filme = document.querySelector('#nome_princ')

let diretor = document.querySelector('#diretor')
let lancamento = document.querySelector('#lancamento')
let genero = document.querySelector('#genero')
let catalogo = document.querySelector('#filme_cata')

let lupa = document.querySelector('#pesquisa')

let cover = document.querySelector('#filme_princ');

function exibirFilmes(dados) {
    // Limpa a lista atual de filmes
    div_filmes.innerHTML = '';

    dados.forEach(filme => { 
        let div = document.createElement('div')
        div.className = 'filmes'
        div.id = filme.id_filme
        
        let h1 = document.createElement('h1')
        h1.innerText = filme.titulo
        h1.className = 'mini_filme'

        let img = document.createElement('img')
        img.src = filme.capa
        img.className = 'filme_logo'

        div.append(img, h1)

        h1_header_filme.innerText = filme.titulo
            lancamento.innerText = filme.ano
            diretor.innerText = filme.nome_diretor
            genero.innerText = filme.nome_genero
            catalogo.src = filme.capa
            cover.style.backgroundImage = `url('${filme.capa}')`;

        div.addEventListener('click', () => {
            h1_header_filme.innerText = filme.titulo
            lancamento.innerText = filme.ano
            diretor.innerText = filme.nome_diretor
            genero.innerText = filme.nome_genero
            catalogo.src = filme.capa
            cover.style.backgroundImage = `url('${filme.capa}')`;
        })

        div.addEventListener("click", function() {
            window.location.href = "#";
        });

        div_filmes.append(div)
    })
}

function carregarTodosFilmes() {
    fetch("http://192.168.1.37:3001/filmes").then((resposta) => {
        if (resposta.status == 200) {
            resposta.json().then((dados) => {
                lista_filmes = dados;
                exibirFilmes(dados);
            })
        }
    })
}

// Carregar todos os filmes ao carregar a página
carregarTodosFilmes();

lupa.addEventListener('input', () => {
    let pesquisa = lupa.value;

    if (pesquisa.trim() === '') {
        carregarTodosFilmes();
    } else {
        fetch(`http://192.168.1.37:3001/busca/${pesquisa}`).then((resposta) => {
            if (resposta.status == 200) {
                resposta.json().then((dados) => {
                    exibirFilmes(dados);
                })
            }
        })
    }
})

lupa.addEventListener('keyup', (event) => {
    if (event.key === 'Backspace' && lupa.value.trim() === '') {
        carregarTodosFilmes();
    }
})
