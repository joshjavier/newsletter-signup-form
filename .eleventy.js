module.exports = (config) => {
  config.addPassthroughCopy('src/fonts')
  config.addPassthroughCopy('src/images')
  config.addPassthroughCopy('src/index.js')

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
