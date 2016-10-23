module.exports = {
  context : __dirname,
  entry   : [
    './index.js'
  ],  
  output : {
    path : 'dist',
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel',
        query : {
          presets : ['es2015']
        }
      }
    ]
  },
  resolve : {
    alias : {
      components : __dirname + '/src/components',
      utils      : __dirname + '/src/utils'
    }
  }
};
