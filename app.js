//Aqui não vai aparecer "Hello, World" para a pessoa, fica apenas 
//no nosso console mesmo.
//console.log("Wello, Word")
//console.log(dados);
//Depois de "dados" (não precisa de aspas), caso você queira apenas uma parte/indice
// do que foi declarado na variável, tu usa "[número]". A contagem inicia do 0, logo, 
// o primeiro indice não será 1, será 0, o segundo indice, não será 2,
//será 1, o terceiro indice não será 3, será 2 e assim por diante.

//Criar uma variável com "let"
// document é para acessar o que tem no id "resultados/pesquisa"

//let section = document.getElementById("resultados-pesquisa")
//console.log(section);

//Para colocar todas as informações do HTML em JS, usa- se o "innerHTML", É
// inserir HTML a partir do Java.
//Basicamente, aqui nós criamos o paragrafo que era HTML, em um mesmo paragráfo, 
//porém, agora, em Java script.

//section.innerHTML = `
//<div class="item-resultado"> 
//       <h2> 
//            <a href="#" target="_blank" >Rebeca Andrade</a>
//        </h2>
//        <p class="descrição-meta"> Rebeca Andrade: A maior medalhista olímpica brasileira. Rebeca Rodrigues 
//         de Andrade é um nome que brilha no cenário esportivo brasileiro e mundial. 
//         A ginasta, natural de Guarulhos, São Paulo, conquistou o coração dos brasileiros 
//         com sua determinação e talento.</p>
//        <a href="https://pt.wikipedia.org/wiki/Rebeca_Andrade" target="_blank">Mais informações</a>
//   </div>
//`

//Basicamente temos que escrever a seguinte frase em programação
//"para cada dado dentro da lista de dados"
// O += Vai colocar na tela os dados selecionados, estamos passando aqui o 
// código de HTML em código JS.

//let resultados = "" //declarei aqui uma variavel para resultados, do tipo aberta
// logo, pode-se substituir o "section.innerHTML" por apenas "resultados"
//for (let dado of dados) { 
// esse comando setion.innerHTML, pode ser substituido por resultados, quando
// declarado em uma variável. A variável vou declarar acima do for
// isso é bom pq não precisa ficar repetindo o section.inner várias vezes.

//    section.innerHTML += `
//    resultados += `
//    <div class="item-resultado"> 
//            <h2> 
//                <a href="#" target="_blank">${dado.Titulo}</a>
//            </h2>
//            <p class="descrição-meta">${dado.Descrição}</p>
//             <a href=${dado.Link} target="_blank">Mais informações</a>
//        </div>
//`
//}

//section.innerHTML = resultados
//Com esse comando acima, nós podemos apagar todos os dados la do HTML
//por isso estão todos como comentário, isso é bom para limpar o código. 
// Nós buscamos os dados do JS aqui e colocamos no site.

//Para criar função vamos usar "function"
// O que escrever aqui será aparecido uma única vez, é o "click"

// NO FINAL TODO O CÓDIGO ACIMA, FICA DECLARADA NA FUNÇÃO, DA SEGUINTE MANEIRA.
// quando a sua variavel tem dois nomes, você coloca a letra maiúscula no segundo nome.
let campoPesquisa = document.getElementById("campo-pesquisa").value
console.log(campoPesquisa);

function pesquisar () {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);

    let resultados = "";
    let titulo = "";
    let descricao = "" ;
    let tags = "";

    for (let dado of dados) {
        console.log(dado.titulo.includes(campoPesquisa))
    resultados += `
    <div class="item-resultado"> 
            <h2> 
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descrição-meta">${dado.descrição}</p>
             <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
`
    }

section.innerHTML = resultados

}