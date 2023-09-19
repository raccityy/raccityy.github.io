const navbarOpen = document.getElementById('navbar')
const mobileChange = document.getElementById('mobile-menu')

const run = () => 
{
    mobileChange.classList.toggle('active')
    navbarOpen.classList.toggle('is-active')
}

mobileChange.addEventListener('click', run)