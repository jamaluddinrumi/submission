const assert = require('assert')

Feature('Batal Favoritkan Restaurant')

Before(async ({ I }) => {
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

Scenario('batal favoritkan restaurant pertama yang baru saja difavoritkan', async ({ I }) => {
  I.amOnPage('/#/favorite')

  I.wait(1)

  I.seeElement('.favorites .restaurant')

  const firstRestaurant = locate('.restaurant .card-title').first()

  I.click(firstRestaurant)

  I.wait(1)

  I.seeElement('#likeButton')

  I.click('#likeButton')

  I.wait(1)

  I.amOnPage('/#/')

  I.wait(1)

  I.amOnPage('/#/favorite')

  I.wait(1)

  I.see('Belum ada restaurant yang difavoritkan.', '.favorites h3')
})
