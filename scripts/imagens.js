const principalDestaques = document.querySelector('.principal__destaques')
const principalBrasil = document.querySelector('.principal__brasil')
const principalMundo = document.querySelector('.principal__mundo')


async function loadingImages() {
    const resposta = await fetch('scripts/data.json');
    let dados = await resposta.json()

    let destaques = dados.section[0]

    for (let post of destaques.data) {
        const divPost = document.createElement('div');
        divPost.innerHTML = `
        <img src = "assets/media/${post.image}">
        <div class="legenda">
        <label> ${post.label}</label><br>  
        <h1 class="legenda__titulo">${post.title}</h1>   
        <p> ${post.description}</p><br> 
        </div>
        `
        divPost.classList.add('destaques')
        principalDestaques.appendChild(divPost);
    }

    let brasil = dados.section[1]

    for (let post of brasil.data) {
        const divPost = document.createElement('div');
        divPost.innerHTML = `
        <img src = "assets/media/${post.image}">
        <div class="legenda">
        <label> ${post.label}</label><br>  
        <h1 class="legenda__titulo">${post.title}</h1>   
        <p> ${post.description}</p><br> 
        </div>
        `
        divPost.classList.add('brasil')
        principalBrasil.appendChild(divPost);
    }

        let mundo = dados.section[2]

        for (let post of mundo.data) {
            const divPost = document.createElement('div');
            divPost.innerHTML = `
        <img src = "assets/media/${post.image}">
        <div class="legenda">
        <label> ${post.label}</label><br>  
        <h1 class="legenda__titulo">${post.title}</h1>   
        <p> ${post.description}</p><br> 
        </div>
        `
            divPost.classList.add('mundo')
            principalMundo.appendChild(divPost);
        }



};
loadingImages()