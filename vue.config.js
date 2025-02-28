'use strict'
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = defineConfig({
  publicPath: '/', // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  outputDir: 'dist', // build 时输出的文件目录
  assetsDir: 'assets', // 放置静态文件夹目录
  lintOnSave: false,
  productionSourceMap: false, // 生产环境是否要生成 sourceMap
  transpileDependencies: true,
  // dev环境下，webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: '9273',
    open: true,
    https: false
  },
  chainWebpack: config => {
    // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // types.forEach(type => {
    //   const rule = config.module.rule('less').oneOf(type)
    //   rule
    //     .use('style-resource')
    //     .loader('style-resources-loader')
    //     .options({
    //       patterns: [path.resolve(__dirname, './lessVariates.less')]
    //     })
    // })

    config.resolve.alias.set('@', resolve('src')).set('api', resolve('src/api')).set('common', resolve('src/common'))

    // config.module
    //   .rule('images')
    //   .use('url-loader')
    //   .tap(options => ({
    //     name: './assets/images/[name].[ext]',
    //     quality: 85,
    //     limit: 0,
    //     esModule: false
    //   }))

    // config.module
    //   .rule('svg')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/svg'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')

    config.plugin('define').tap(args => [{ ...args, 'window.isDefine': JSON.stringify(true) }])
  }
})
