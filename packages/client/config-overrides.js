const { compose } = require('react-app-rewired')
const rewireTypescript = require('react-app-rewire-typescript')
const { createEmotionRewire } = require('react-app-rewire-emotion')

function createTypescriptRewire(options = {}) {
  return (config, env) => {
    return rewireTypescript(config, env)
  }
}

module.exports = function override(config, env) {
  const rewires = compose(
    createTypescriptRewire(),
    createEmotionRewire({ inline: process.env.NODE_ENV !== 'production' }),
  )
  return rewires(config, env)
}
