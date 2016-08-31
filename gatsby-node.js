var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function (config, env) {
  config.removeLoader('sass');

  const sassLoaders = {
    develop: 'style!css?modules&localIdentName=[path][name]-[local]-[hash:base64:5]&importLoaders=1!postcss'
  };

  // const cssPath = { publicPath: ( ~process.argv.indexOf('--prefix-links') ? '../gds-hive/' : '../') };
  sassLoaders['build-javascript'] = sassLoaders['build-css'] = sassLoaders['build-html']
    = ExtractTextPlugin.extract('style', ['css?modules&localIdentName=[hash:base64:8]&minimize&importLoaders=1', 'postcss']);

  config.loader('sass', function (cfg) {
    cfg.test = /\.scss$/;
    cfg.exclude = /node_modules/;
    cfg.loader = sassLoaders[env];
    return cfg;
  });

  config.merge({
    postcss: [
      require('precss'),
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-cssnext')({
        browsers: 'last 2 versions'
      })
    ],
    devtool: env !== 'development' ? null : 'cheap-module-inline-source-map',
    plugins: [new ExtractTextPlugin('styles.css', { allChunks: true })]
  });

  return config;
};
