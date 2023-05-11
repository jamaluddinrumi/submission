import './styles/main.scss'
import './styles/responsive.scss'
import App from './app'

const app = new App({
  content: document.querySelector('#main-content > .content')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})

const menu = document.querySelector('#menu')
const hero = document.querySelector('.hero') ?? null
const main = document.querySelector('main')
const drawer = document.querySelector('#drawer')
const navLinks = document.querySelectorAll('nav a')

navLinks.forEach((navLink) => navLink.addEventListener('click', () => {
  drawer.classList.remove('open')
}))

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open')
  event.stopPropagation()
})

if (hero !== null) {
  hero.addEventListener('click', function () {
    drawer.classList.remove('open')
  })
}

main.addEventListener('click', function () {
  drawer.classList.remove('open')
})
