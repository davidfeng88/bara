const path = require( "path" );

const webpack = require( "webpack" );

let plugins = []; // if using any plugins for both dev and production
const devPlugins = []; // if using any plugins for development

const prodPlugins = [
  new webpack.DefinePlugin( {
    'process.env': {
      'NODE_ENV': JSON.stringify( 'production' )
    }
  } ),
  new webpack.optimize.UglifyJsPlugin( {
    compress: {
      warnings: true
    }
  } )
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: "./frontend/bara.jsx",
  output: {
    path: path.join( __dirname, 'app', 'assets', 'javascripts' ),
    filename: "bundle.js"
  },
  plugins: plugins,
  resolve: {
    extensions: [ "*", ".js", ".jsx" ]
  },
  devtool: 'source-maps',
  module: {
    loaders: [ {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [ '@babel/es2015', '@babel/react' ],
          plugins: [ '@babel/plugin-proposal-class-properties' ]
        }
      },
      {
        test: /\.node$/,
        loader: "node-loader"
      }
    ]
  }
};