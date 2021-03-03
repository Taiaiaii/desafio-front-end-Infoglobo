const main = document.querySelector('.principal')
const destaques = document.querySelector('.principal__destaques')

main.addEventListener('loadstart', async function(){
    debugger;
        const resposta = await fetch ('data.jason');
        let main= await resposta.json()

        for (let post of main) {
            const divPost = document.createElement('div');
            divPost.innerHTML = post.image;
        }
});