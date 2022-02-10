const path = require('path');

module.exports = function override(config) {
    return { ...config, resolve: {
        alias: {
            '@variables': path.resolve('styles/vairables.scss'),
            '@mixins': path.resolve('styles/mixins.scss'),
            '@typography': path.resolve('styles/typography.scss'),
        }},
    };
};