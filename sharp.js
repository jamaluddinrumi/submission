const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const destinationPath = process.argv[2] === 'prod' ? 'dist' : 'public'

const target = path.resolve(__dirname, 'src/images')
const destination = path.resolve(__dirname, `${destinationPath}/images`)

if (!fs.existsSync(destinationPath)) {
  fs.mkdirSync(destinationPath)
}

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}

const includeExtension = ['.png', '.jpg', '.jpeg', '.gif']

fs.readdirSync(target)
  .forEach(image => {
    const imageExtension = image.substring(image.lastIndexOf('.'))

    if (!includeExtension.includes(imageExtension)) return

    sharp(`${target}/${image}`)
      .resize(320)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-320.jpg`)
      )

    sharp(`${target}/${image}`)
      .resize(640)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-640.jpg`)
      )

    sharp(`${target}/${image}`)
      .resize(768)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-768.jpg`)
      )

    sharp(`${target}/${image}`)
      .resize(1024)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-1024.jpg`)
      )
  })
