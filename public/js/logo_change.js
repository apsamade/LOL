const logo = document.querySelector('#logo')

logo.addEventListener('mouseover', ()=>{
    if(logo.src === 'http://localhost:3000/public/img/riot-games.png'){
        logo.src = 'http://localhost:3000/public/img/riot-games2.png'
        logo.classList.add('apparitionLogo')
        setTimeout(()=>{logo.classList.remove('apparitionLogo')}, 499)
    }else{
        logo.src = 'http://localhost:3000/public/img/riot-games.png'
        logo.classList.add('apparitionLogo')
        setTimeout(()=>{logo.classList.remove('apparitionLogo')}, 499)
    }
})

logo.addEventListener('mouseout', ()=>{
    if(logo.src === 'http://localhost:3000/public/img/riot-games.png'){
        logo.src = 'http://localhost:3000/public/img/riot-games2.png'
        logo.classList.add('apparitionLogo')
        setTimeout(()=>{logo.classList.remove('apparitionLogo')}, 499)
    }else{
        logo.src = 'http://localhost:3000/public/img/riot-games.png'
        logo.classList.add('apparitionLogo')
        setTimeout(()=>{logo.classList.remove('apparitionLogo')}, 499)
    }
})