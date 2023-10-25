// navbar
const nav = document.querySelector('.navbar');
const btnGoUp = document.querySelector('.goUp');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 50){
        nav.classList.add('navbar-scrolled');
        btnGoUp.style.display = 'block';
    }else{
        nav.classList.remove('navbar-scrolled');
        btnGoUp.style.display = 'none';
    }
});
