const btnMobile = document.getElementById('btnMobile')

btnMobile.addEventListener("click", toggleMenu)


function toggleMenu(){
    const navbar = document.getElementById('navbar')
    navbar.classList.toggle('active')
}