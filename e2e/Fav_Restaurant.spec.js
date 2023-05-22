const assert = require('assert')

Feature('Favoritkan Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/')

  I.wait(1)
})

Scenario('tampilkan memang belum ada restaurant yang pernah difavoritkan di halaman favorites', ({ I }) => {
  I.amOnPage('/#/favorite')

  I.wait(1)

  I.see('Belum ada restaurant yang difavoritkan.', '.favorites h3')
})

Scenario('favoritkan restaurant pertama yang ada di halaman depan', async ({ I }) => {
  I.amOnPage('/#/')

  I.wait(1)

  I.seeElement('.restaurant')

  const firstRestaurant = locate('.restaurant .card-title').first()

  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)

  I.click(firstRestaurant)

  I.wait(1)

  I.seeElement('#likeButton')

  I.click('#likeButton')

  I.wait(1)

  I.amOnPage('/#/favorite')

  I.wait(1)

  I.seeElement('.favorites .restaurant')

  const favedRestaurantTitle = await I.grabTextFrom('.restaurant .card-title')

  assert.strictEqual(firstRestaurantTitle, favedRestaurantTitle)
})
