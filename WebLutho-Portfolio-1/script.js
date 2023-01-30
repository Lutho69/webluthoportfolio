const navBar = document.getElementById('navbar')
const sideMenu = document.getElementById('side-menu')
const sideMenuBar = document.querySelector('.side-menu-bar')
const hamburger = document.getElementById('hamburger')

window.onscroll = function () {
    var top = window.scrollY

    //SideMenu

    if (top >= 500) {
        sideMenu.style.display = 'none'
    }

    else{
        sideMenu.style.display = 'block'
    }

    //Navbar

    if (top >= 1000 ) {
        navBar.style.backgroundColor = 'rgb(59 130 246)'
        navBar.style.color = '#fff'
        navBar.style.padding = '0px 5px'
    }

    else{
        navBar.style.backgroundColor = '#fff'
        navBar.style.color = '#000'
    }
}

hamburger.addEventListener('click', () =>{
    sideMenuBar.classList.toggle('active')

    if (!sideMenuBar.classList.contains('active')) {
        hamburger.innerHTML = "<i class='fas fa-times'></i>"
    }
    else{
        hamburger.innerHTML = "<i class='fas fa-bars'></i>"
    }
})

