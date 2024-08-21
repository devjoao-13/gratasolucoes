let abrirmenu = document.getElementById('abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-meunu')




abrirmenu.addEventListener('click', ()=>{
    menu.classList.add('btn-menu')
})


menu.addEventListener('click', ()=>{
    menu.classList.remove('btn-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('btn-menu')
})