const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    publicPath: "http://localhost:5173/",
    outputDir: "./dist/",

    chainWebpack: config => {
        config.optimization.splitChunks(false)

        config.plugin('BundleTracker').use(BundleTracker, [
            {
                filename: './webpack-stats.json'
            }
        ])

        config.resolve.alias.set('__STATIC__', 'static')

        config.devServer
            .public('http://localhost:5173/')
            .host('localhost')
            .port(5173)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .headers({'Access-Control-Allow-Origin': ['\*']})
    }
};