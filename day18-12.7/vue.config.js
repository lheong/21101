const { defineConfig } = require("@vue/cli-service")
// console.log(process)
// let target = process.env.VUE_APP_MOCK_ENABLE == "true" ? "http://localhost:8090/" : process.env.VUE_APP_CONSOLE_URL

module.exports = defineConfig({
	lintOnSave: false,
	// 根目录
	publicPath: "./",
	//默认关闭生产环境的资源
	productionSourceMap: false,
	//打包时候的文件名
	outputDir: "dist",
	//放置打包时生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	assetsDir: "assets",
	//本地的环境代理配置
	devServer: {
		//端口号
		port: "8080",
		//开发运行时的域名
		host: "localhost",
		//是否自动打开浏览器
		open: false,
		//是否打开浏览器
		https: false,

		// proxy: {
		// 	[process.env.VUE_APP_BASE_API]: {
		// 		// 默认开启代理模式
		// 		changeOrigin: true,
		// 		// 如果是http接口,需要配置该参数
		// 		secure: false,
		// 		// 代理的地址
		// 		target,
		// 		// 路径的重命名
		// 		pathRewrite: {
		// 			["^" + process.env.VUE_APP_BASE_API]: ""
		// 		}
		// 	}
		// }

		// 本地端口号的代理
		proxy: {
			"/api": {
				//默认开启代理模式
				changeOrigin: true,
				//如果是http接口，需要配置该参数
				secure: false,
				//代理地址
				target: "http://localhost:8090/",
				//路径的重命名
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	}
})
