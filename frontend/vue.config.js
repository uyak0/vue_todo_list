const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    publicPath: "http://127.0.0.1:8000/",
    outputDir: "./dist/",
    indexPath: "backend/templates/index.html",

    chainWebpack: config => {
        config.optimization.splitChunks(false)

        config.plugin('BundleTracker').use(BundleTracker, [
            {
                filename: './webpack-stats.json'
            }
        ])

        config.resolve.alias.set('__STATIC__', 'static')

        config.devServer
            .public('http://127.0.0.1:8000/')
            .host('127.0.0.1')
            .port(8000)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .headers({'Access-Control-Allow-Origin': ['*']})
    }
};
