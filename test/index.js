const postcss = require('postcss')
const expect = require('chai').expect
const plugin = require('../')

const test = (input, output, opts, done) => {
  postcss([plugin(opts)]).process(input).then(result => {
    expect(result.css).to.eql(output)
    expect(result.warnings()).to.be.empty
    done()
  }).catch(error => {
    done(error)
  })
}

describe('postcss-z', () => {
  it('Should replace `z` with `z-index`', done => {
    test('.blackbriar { z: 1 }', '.blackbriar { z-index: 1 }', {}, done)
  })
})
