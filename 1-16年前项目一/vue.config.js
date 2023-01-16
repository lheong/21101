const {
  defineConfig
} = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // publicPath: "./",
  // productionSourceMap: false,
  // outputDir: "Bag",
  // assetsDir: "assets",
  // devServer: {
  //   port: "8888",
  //   host: "localhost",
  //   open: true,
  //   https: false,
  //   proxy: {
  //     [process.env.VUE_APP_BASE_API]: {
  //       changeOrigin: true,
  //       secure: false,
  //       target: process.env.VUE_APP_CONSOLE_URL,
  //       pathRewrite: {
  //         ["^" + process.env.VUE_APP_BASE_API]: ""
  //       }
  //     }
  //   }
  // }
})