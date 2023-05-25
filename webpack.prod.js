const { merge } = require('webpack-merge')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const common = require('./webpack.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]
})
