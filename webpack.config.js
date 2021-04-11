const HtmlWebpackPlugin = require('html-webpack-plugin') //自动生成index.html文件的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //每次生成打包生成dist后, 自动删除上次打包的内容

const path = require('path');

module.exports = (env) => {

   return {
        mode: env && env.production ? 'production' : 'development',
        entry: {
            main: './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
        },
        devServer: {
            port: 8080
        },
        plugins: [ //plugin配置
            new HtmlWebpackPlugin({ // 多页面时, entry中的每一个页面需要单独配一个HtmlWebpackPlugin, 同时需要配合splitChunks进行优化, 在common中配置相同的引用单独分包, 避免同样的引用被打入不同的包中造成重复代码
                template: 'src/index.html', //生成的html所使用的模板
                filename: 'index.html', //生成的页面名称
                chunks: ['main'] //需要引入的模块(模块名为entry中设置的入口文件对应的key)

            }), // 实例化HtmlWebpackPlugin对象, 每次打包后自动生成html页面, 并引入需要的js文件
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: ['dist'],
                verbose: true,
            }),
        ], //plugins的设置
    };
}