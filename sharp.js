const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const destinationPath = process.argv[2] === 'prod' ? 'dist' : 'public'

const target = path.resolve(__dirname, 'src/images')
const destination = path.resolve(__dirname, `${destinationPath}/images`)

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}

const includeExtension = ['.png', '.jpg', '.jpeg', '.gif']

fs.readdirSync(target)
  .forEach(image => {
    const imageExtension = image.substring(image.lastIndexOf('.'))

    if (!includeExtension.includes(imageExtension)) return

    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(1280)
      .toFile(path.resolve(
        __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`)
      )

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`)
      )
  })
