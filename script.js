const menuBox = document.querySelector('.menu-box')
const logo = document.querySelector('.logo')
const menu = document.querySelector('.menu')

window.addEventListener('scroll', () => {
        menuBox.classList.toggle('active', scrollY > 400)
        logo.classList.toggle('active', scrollY > 400)
        menu.classList.toggle('active', scrollY > 400)
})