const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

module.exports = (config) => {
  config.addPassthroughCopy('src/fonts')
  config.addPassthroughCopy('src/images')
  config.addPassthroughCopy('src/index.js')

  // Use 11ty HTML Base Plugin to fix absolute URLs in deployment
  config.addPlugin(EleventyHtmlBasePlugin)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    pathPrefix: '/newsletter-signup-form/',
  }
}
