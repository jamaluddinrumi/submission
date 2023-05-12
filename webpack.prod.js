const { merge } = require('webpack-merge')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ request, url }) => url.origin === 'https://restaurant-api.dicoding.dev',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'dicoding-api-cache',
            cacheableResponse: {
              statuses: [200]
            }
          }
        }
      ]
    })
  ]
})
