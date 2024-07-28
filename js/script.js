const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');
const navLinks = document.querySelectorAll('.nav-mobile a');

function handleNav() {
    navMobile.classList.toggle('nav-mobile-active');
    document.body.classList.toggle('sticky-body');
}

function closeNav() {
    navMobile.classList.remove('nav-mobile-active');
    document.body.classList.remove('sticky-body');
}

navBtn.addEventListener('click', handleNav);

navLinks.forEach(function(link) {
    link.addEventListener('click', closeNav); 
});
    