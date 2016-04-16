var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (config, env) {
  config.merge({
    postcss: [
      require('precss'),
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-cssnext')({
        browsers: 'last 2 versions',
      })
    ],
    devtool: (env === 'prod' || env === 'static') ? null : 'cheap-module-inline-source-map'
  });

  config.loader('png', function (cfg) {
    cfg.test    = /\.png$/;
    cfg.exclude = /node_modules/;
    cfg.loader  = 'url?limit=10000';
    return cfg;
  });

  config.loader('jpg', function (cfg) {
    cfg.test    = /\.jpg$/;
    cfg.exclude = /node_modules/;
    cfg.loader  = 'url?limit=10000';
    return cfg;
  });

  config.loader('svg', function (cfg) {
    cfg.test    = /\.svg$/;
    cfg.exclude = /node_modules/;
    cfg.loader  = 'url?limit=10000';
    return cfg;
  });

  const sassLoaders = {
    static:     'css?modules&localIdentName=[hash:base64:12]&minimize&importLoaders=1!postcss',
    production: 'css?modules&localIdentName=[hash:base64:12]&minimize&importLoaders=1!postcss',
    noEnv:      'style!css?modules&localIdentName=[path][name]-[local]-[hash:base64:5]&importLoaders=1!postcss'
  };

  config.loader('sass', function (cfg) {
    cfg.test    = /\.scss$/;
    cfg.exclude = /node_modules/;
    cfg.loader  = sassLoaders[env] ? ExtractTextPlugin.extract(sassLoaders[env]) : sassLoaders.noEnv;
    return cfg;
  });

  config.plugin('extract-css', ExtractTextPlugin,
    ['gds.css', { allChunks: true }]
  );

  return config;
};
