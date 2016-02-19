var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (config, env) {
  config.removeLoader('scss');
  config.merge({
    postcss: [
      require('autoprefixer'),
      require('precss')
    ],
    devtool: null
  });

  if (env === 'static') {
    config.loader('scss', function (cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = ExtractTextPlugin.extract('css?modules&localIdentName=[hash:base64:12]&minimize&importLoaders=1!postcss');
      return cfg
    });
  } else if (env === 'production'){
    config.loader('scss', function (cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = ExtractTextPlugin.extract('css?modules&localIdentName=[hash:base64:12]&minimize&importLoaders=1!postcss');
      return cfg
    });
  } else {
    config.loader('scss', function (cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = 'style!css?modules&localIdentName=[path][name]-[local]-[hash:base64:5]&importLoaders=1!postcss';
      return cfg
    });
    config.devtool =  'cheap-module-inline-source-map';
  }

  config.plugin('extract-css',
    ExtractTextPlugin,
    ["yellow.css", { allChunks: true }]);

  return config;
};
