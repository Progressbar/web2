const { join } = require('path');

exports.webpack = function (config, env) {
    const { production, webpack } = env;

    config.resolve.alias = {
        ...config.resolve.alias,
        '@store': join(env.src, 'store')
    }
}