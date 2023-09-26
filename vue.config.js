/*
 * @Author: lizucheng LZCNice2021@163.com
 * @Date: 2023-09-25 20:55:25
 * @LastEditors: lizucheng LZCNice2021@163.com
 * @LastEditTime: 2023-09-25 21:03:10
 * @FilePath: \record-video\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    port: 8090,
    host: 'localhost',
    https: false,
    open: true
  }
})
