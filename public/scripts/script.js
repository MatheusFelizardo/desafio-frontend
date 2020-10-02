// CONSUMO DA API BANNER CONTAINER

let image1 = document.querySelector (".first-banner-img")
let firstP = document.querySelector (".first-banner-p")
let image2 = document.querySelector (".second-banner-img")
let secondP = document.querySelector (".second-banner-p")

const carouselItems = document.querySelectorAll(".imovel")

let imovelContent = document.querySelector(".imovel-carousel")
let carouselCards = document.querySelector (".carousel-cards")
let carouselNewsCards = document.querySelector (".n-carousel-cards")


let newsContent = document.querySelector(".noticia-carousel")
let tagsContent = document.querySelector(".mais-acessadas-card")

let bullets = document.querySelector (".bullets")
let newsBullets = document.querySelector(".news-bullets")


new Glide('.banner.glide', {
    type: 'slider',
    startAt: 0,
    perView: 1
  }).mount()

async function consumoAPIBanner (URL) {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default' 
    }


    let data = await fetch(URL, options)
    data = await data.json()
    
    insertHTML(data)
            
}

consumoAPIBanner("https://labs.inforcedata.com.br/desafio-frontend/banners.json")

function insertHTML(data) {

    let firstItem = data[0]
    let secondItem = data[1]
    
    image1.src= firstItem.imagem
    image2.src= secondItem.imagem
    firstP.innerText = firstItem.titulo
    secondP.innerText = secondItem.titulo
}



// CONSUMO DA API VITRINE

async function consumoAPIVitrine (URL) {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default' 
    }

    let data = await fetch(URL, options)
    data = await data.json()
    
    data.forEach((imovel)=> {
        
        let imovelValues = `   <li class='carousel-seat'>
                                    <div class="imovel">

                                        <div class="imovel-img">
                                        <img src="${imovel.capa}">
                                        </div>

                                        <div class="imovel-info-text">
                                            <p>${imovel.tipo}</p>
                                            <p>${imovel.bairro} - ${imovel.UF}</p>
                                        </div>

                                        <div class="imovel-areas">
                                            <div class="imovel-quartos">
                                                <img src="public/assets/images/quartos.svg">
                                                <p>${imovel.quartos}</p>
                                        </div>

                                        <div class="imovel-banheiros">
                                                <img src="public/assets/images/banheiro.svg">
                                                <p>${imovel.banheiros}</p>
                                        </div>

                                        <div class="imovel-garagem">
                                                <img src="public/assets/images/garagem.svg">
                                                <p>${imovel.vagas}</p>
                                        </div>

                                        <div class="imovel-area">
                                                <img src="public/assets/images/area.svg">
                                                <p>${imovel.metragem}m</p>
                                        </div>
                                        </div>

                                        <a class="imovel-button" href="${imovel.link}">MAIORES INFORMAÇÕES</a> 
                                    </div>
                                </li>
                            `

        imovelContent.innerHTML += imovelValues  
    })

    let cardCounts = imovelContent.childElementCount
    
    insertBullets(cardCounts)
}

consumoAPIVitrine("https://labs.inforcedata.com.br/desafio-frontend/vitrines.json")

// SLIDER DA VITRINE 

// FUNÇÃO PARA INSERIR AS "BULLETS"
function insertBullets(cardCounts) {
    
    let count = Math.ceil(cardCounts/3)
    let bullet = []
    createBullets(count, bullet)

    function createBullets (count, bullet){
        for (let index = 0; index < count; index++) {
            
            let bulletposition = index+1
            bullet.push(`<button class="bullet bullet${bulletposition}"></button>`)           
            
        }  
    }

    for (let index = 0; index < bullet.length; index++) {
        bullets.innerHTML += bullet[index];
    }  

let bullet1 = document.querySelector (".bullet1")
let bullet2 = document.querySelector (".bullet2")
let bullet3 = document.querySelector (".bullet3")
    
bullet1.addEventListener ("click", ()=> {
    carouselCards.style.transform = "translateX(0)"
    bullet1.style.background = "#64A13F"
    bullet2.style.background = " rgba(0, 0, 0, 0.3)"
   if(bullet3) {bullet3.style.background = " rgba(0, 0, 0, 0.3)"}
})

bullet2.addEventListener ("click", ()=> {
    carouselCards.style.transform = "translateX(-960px)"
    
    bullet2.style.background = "#64A13F"
    bullet1.style.background = " rgba(0, 0, 0, 0.3)"
    if(bullet3) {bullet3.style.background = " rgba(0, 0, 0, 0.3)"}

})

if(bullet3) {
bullet3.addEventListener ("click", ()=> {
    carouselCards.style.transform = "translateX(-1920px)"
    bullet3.style.background = "#64A13F"
    bullet1.style.background = " rgba(0, 0, 0, 0.3)"
    bullet2.style.background = " rgba(0, 0, 0, 0.3)"
})}
    
}

// CONSUMO DA API DAS NOTICIAS ** 

async function consumoAPINews (URL) {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default' 
    }

    let data = await fetch(URL, options)
    data = await data.json()
    
    data.forEach((news)=> {
        
        let newsValues = `   <li class='carousel-seat'>
                                    <div class="news">

                                        <div class="news-img">
                                        <img src="${news.capa}">
                                        </div>
                                        
                                        <div class="news-title">
                                            <p>${news.titulo}</p>
                                        </div>

                                        <div class="news-sumario">
                                            <p>${news.sumario}</p>
                                        </div>
                                      
                                        <a class="news-button" href="${news.link}">MAIORES INFORMAÇÕES</a> 
                                       
                                    </div>
                                </li>
                            `

        newsContent.innerHTML += newsValues  

    })    
    let cardCounts = newsContent.childElementCount
    
    insertNBullets(cardCounts)
}
consumoAPINews("https://labs.inforcedata.com.br/desafio-frontend/noticias.json")

// SLIDER DAS NOTICIAS

// FUNÇÃO PARA INSERIR AS "BULLETS"

function insertNBullets(cardCounts) {
    
    let count = Math.ceil(cardCounts/3)
    let bullet = []
    createBullets(count, bullet)

    function createBullets (count, bullet){
        for (let index = 0; index < count; index++) {
            
            let bulletposition = index+1
            bullet.push(`<button class="bullet n-bullet${bulletposition}"></button>`)           
            
        }  
    }

    for (let index = 0; index < bullet.length; index++) {
        newsBullets.innerHTML += bullet[index];
    }  

let bullet1 = document.querySelector (".n-bullet1")
let bullet2 = document.querySelector (".n-bullet2")
let bullet3 = document.querySelector (".n-bullet3")
    
bullet1.addEventListener ("click", ()=> {
    carouselNewsCards.style.transform = "translateX(0)"
    bullet1.style.background = "#64A13F"
    bullet2.style.background = " rgba(0, 0, 0, 0.3)"
    if(bullet3) {bullet3.style.background = " rgba(0, 0, 0, 0.3)"}
})

bullet2.addEventListener ("click", ()=> {
    carouselNewsCards.style.transform = "translateX(-960px)"
    
    bullet2.style.background = "#64A13F"
    bullet1.style.background = " rgba(0, 0, 0, 0.3)"
    if(bullet3) {bullet3.style.background = " rgba(0, 0, 0, 0.3)"}

})

if(bullet3) {
bullet3.addEventListener ("click", ()=> {
    carouselNewsCards.style.transform = "translateX(-1920px)"
    bullet3.style.background = "#64A13F"
    bullet1.style.background = " rgba(0, 0, 0, 0.3)"
    bullet2.style.background = " rgba(0, 0, 0, 0.3)"
})}
    
}


// CONSUMO DA API DOS BALÕES ** 

async function consumoAPITags (URL) {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default' 
    }

    let data = await fetch(URL, options)
    data = await data.json()
    
    data.forEach((cloudTag)=> {
       
        let cloudTags = `   <a target="blank" href="${cloudTag.link}"><span>${cloudTag.tag}</span></a>
                            `

        tagsContent.innerHTML += cloudTags  
    })
}



consumoAPITags("https://labs.inforcedata.com.br/desafio-frontend/cloudtags.json")
