const principalDestaques = document.querySelector('.principal__destaques')
const principalBrasil = document.querySelector('.principal__brasil')
const principalMundo = document.querySelector('.principal__mundo')


async function loadingImages() {
    const resposta = await fetch('scripts/data.json');
    let dados = await resposta.json()

    carregaFotos(dados, 0, principalDestaques, 'destaques');
    carregaFotos(dados, 1, principalBrasil, 'brasil');
    carregaFotos(dados, 2, principalMundo, 'mundo');

};
loadingImages()

function carregaFotos(dados, posicao, htmlplace, classe) {

    for (let post of dados.section[posicao].data) {
        const divPost = document.createElement('div');
        divPost.innerHTML = `
        <img src = "media/${post.image}">
        <div class="legenda">
        <label> ${post.label}</label><br>  
        <h1 class="legenda__titulo">${post.title}</h1>   
        <p> ${post.description}</p><br> 
        </div>
        `
        divPost.classList.add(classe)
        
        htmlplace.appendChild(divPost);
    }
}

