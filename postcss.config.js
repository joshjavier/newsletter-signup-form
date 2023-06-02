module.exports = (ctx) => ({
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    'postcss-nested': {},
    cssnano: ctx.env === 'production' ? {} : false,
  },
})
