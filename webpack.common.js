const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        app: './src/index.js'
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    // optimization: {
    //     usedExports: true
    // }
    // In order to take advantage of tree shaking, you must...
// 
    // Use ES2015 module syntax (i.e. import and export).
    // Ensure no compilers transform your ES2015 module syntax into CommonJS modules (this is the default behavior of popular Babel preset @babel/preset-env - see documentation for more details).
    // Add a "sideEffects" property to your project's package.json file.
    // Use production mode configuration option to enable various optimizations including minification and tree shaking.

}