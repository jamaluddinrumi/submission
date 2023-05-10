import data from './DATA.json'

import './styles/main.scss'
import './styles/responsive.scss'

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

const restaurants = data.restaurants

const restaurantsElement = document.querySelector('#restaurants')

restaurantsElement.innerHTML = restaurants.map((restaurant) => `
<div class="card bg-base-100 shadow-xl">
  <figure><img src="${restaurant.pictureId}" alt="Shoes" /></figure>
  <div class="city">${restaurant.city}</div>
  <div class="card-body">
    <div class="rating">Rating: ${restaurant.rating}</div>
    <h2 class="card-title">${restaurant.name}</h2>
    <p class="line-clamp-3">${restaurant.description}</p>
  </div>
</div>
`).join('')
