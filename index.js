const postcss = require('postcss')

module.exports = postcss.plugin('postcss-z', () => {
  return css => {
    css.walkDecls('z', decl => {
      decl.prop = 'z-index'
    })
  }
})
