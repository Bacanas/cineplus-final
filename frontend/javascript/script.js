
let lista_filmes = []
let div_filmes = document.querySelector('#filmes')
//let header_filme = document.querySelector('#filme_princ')
let h1_header_filme = document.querySelector('#nome_princ')

let diretor = document.querySelector('#diretor')
let lancamento = document.querySelector('#lancamento')
let genero = document.querySelector('#genero')
let catalogo = document.querySelector('#filme_cata')

let lupa = document.querySelector('#lupa')


let cover = document.querySelector('#filme_princ');



fetch("http://192.168.1.37:3001/filmes").then((resposta)=>{
    if(resposta.status == 200){
        resposta.json().then((dados)=>{

            lista_filmes.push = filmes

            dados.map((filmes)=>{ 
                let div = document.createElement('div')
                div.className = 'filmes'
                div.id = filmes.id_filme
                
                let h1 = document.createElement('h1')
                h1.innerText = filmes.titulo
                h1.className = 'mini_filme'

                let img = document.createElement('img')
                img.src = filmes.capa
                img.className = 'filme_logo'

                div.append(img,h1)

                h1_header_filme.innerText = filmes.titulo
                lancamento.innerText = filmes.ano
                diretor.innerText = filmes.nome_diretor
                genero.innerText = filmes.nome_genero
                catalogo.src = filmes.capa
                cover.style.backgroundImage = `url('${filmes.capa}')`;

                div.addEventListener('click',()=>{
                    h1_header_filme.innerText = filmes.titulo
                    lancamento.innerText = filmes.ano
                    diretor.innerText = filmes.nome_diretor
                    genero.innerText = filmes.nome_genero
                    catalogo.src = filmes.capa
                    cover.style.backgroundImage = `url('${filmes.capa}')`;
                })

                div.addEventListener("click", function() {
                    window.location.href = "#";
                });

                div_filmes.append(div)
            })
        })
    }
})

lupa.addEventListener('click',()=>{

    let pesquisar = document.querySelector('#pesquisa');
    let pesquisa = pesquisar.value

    fetch(`http://192.168.1.37:3001/busca/${pesquisa}`).then((resposta)=>{
    if(resposta.status == 200){
        resposta.json().then((dados)=>{
            
            console.log(dados)
            
        //     for (let i = 0; i < filmes.length; i++) {
        
        //         div.innerText = "Nenhum filme encontrado." 
        
        //         if (filmes[i].toLowerCase() == pesquisar.toLowerCase()) {
        
                    
        //             let div = document.createElement('div')
        //             div.className = 'filmes'
        //             div.id = filmes.id_filme[i]
                    
        //             let h1 = document.createElement('h1')
        //             h1.innerText = filmes.titulo[i]
        //             h1.className = 'mini_filme'
        
        //             let img = document.createElement('img')
        //             img.src = filmes.capa[i]
        //             img.className = 'filme_logo'
                    
        //         }
                
        //     }        
         })
    }

    })
})





