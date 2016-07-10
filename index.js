const postcss = require('postcss')

module.exports = postcss.plugin('postcss-z', () => {
  return css => {
    css.walkDeclas('z', decl => {
      decl.prop = 'z-index'
    })
  }
})
