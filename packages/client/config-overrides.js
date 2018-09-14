const { compose, injectBabelPlugin } = require('react-app-rewired')
const rewireTypescript = require('react-app-rewire-typescript')

function createTypescriptRewire(options = {}) {
  return (config, env) => {
    return rewireTypescript(config, env)
  }
}

module.exports = function override(config, env) {
  const rewires = compose(createTypescriptRewire())
  return rewires(config, env)
}
