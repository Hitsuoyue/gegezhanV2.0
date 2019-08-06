const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const marked = require("marked");
const renderer = new marked.Renderer();
const rewiredMap = () => config => {
  if(config.mode === 'production'){
    config.module.rules[2].oneOf.splice(0,1,{
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      use: [{
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: '[name].[hash:8].[ext]',
          outputPath: 'images',
          // publicPath: './images'
        }
      }]
    }, {
      test: [/\.mp3$/],
      use: [{
        loader: require.resolve('file-loader'),
        options: {
          name: '[name].[ext]',
          outputPath: 'music',
          publicPath: './music'
        }
      }]
    },
    );
  }
  config.resolve.extensions.push('.less');
  return config;
};
const paths = require('react-scripts/config/paths');
paths.servedPath = './';
module.exports = override(
  rewiredMap(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  addWebpackAlias({
    ["aliasimgurl"]: path.resolve(__dirname, "src/images"),
  }),
);