/* Menampilkan Menu Navbar */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*Menghilangkan Menu Navbar*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Ketika klik pada setiap nav__link, makan akan menghilangkan kelas show-menu
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


