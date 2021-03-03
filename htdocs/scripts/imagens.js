const destaques = document.querySelector('.principal__destaques')

async function loadingImages() {
    const resposta = await fetch('scripts/data.json');
    let dados = await resposta.json()

    let main = dados.section[0]

    for (let post of main.data) {
        // let classe = "desta-principal";
        // if(post == "brasil"){
        //     classe = 'destaque-brasil'
        // }
        
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
       destaques.appendChild(divPost);
    }

};
loadingImages()