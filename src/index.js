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
const hero = document.querySelector('.hero')
const main = document.querySelector('main')
const drawer = document.querySelector('#drawer')

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open')
  event.stopPropagation()
})

hero.addEventListener('click', function () {
  drawer.classList.remove('open')
})

main.addEventListener('click', function () {
  drawer.classList.remove('open')
})
