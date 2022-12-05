# 跨域

## 产生的原因

因为浏览器的同源策略的原因,一旦协议,域名,端口任何一个不同就会产生跨域问题

## 解决跨域的方法有哪些

 1.CORS

![image-20221205184642471](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221205184642471.png)

2.Widnow.domain

3. location.href
4. proxy(本地)
5. jsop
6. Script src解决跨域,img src
7. nginx(线上代理的方式解决跨域)

# HTTPS和HTTP的区别主要如下：

HTTP：是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。

HTTPS：是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入[SSL](https://so.csdn.net/so/search?q=SSL&spm=1001.2101.3001.7020)层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。

HTTPS协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全；另一种就是确认网站的真实性。

1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。

2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。

3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

# 开发环境

![image-20221205213243019](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221205213243019.png)

![image-20221205213322540](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221205213322540.png)

# 环境配置

一般一个项目都会有以下 3 种环境：

- 开发环境（开发阶段，本地开发版本，一般会使用一些调试工具或额外的辅助功能）；

- 测试环境（测试阶段，上线前版本，除了一些 bug 的修复，基本不会和上线版本有很大差别）；

- 生产环境（上线阶段，正式对外发布的版本，一般会进行优化，关掉错误报告）；

  ### 1. 配置文件

  正确的配置环境首先需要我们认识不同环境配置之间的关系

![image-20221205211843805](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221205211843805.png)

### 2. 环境注入

### 3. 额外配置

### 4. 实际场景

# scss Less stules都有自己的Loader

如果当时没有选择，内置的 [webpack](https://so.csdn.net/so/search?q=webpack&spm=1001.2101.3001.7020) 仍然会被预配置为可以完成所有的处理，也可以手动安装相应的 webpack loader：

```
# Sass
npm install -D sass-loader node-sass

# Less
npm install -D less-loader less

# Stylus
npm install -D stylus-loader stylus
```

然后，就可以导入相应的文件类型，或在 .vue 文件中这样来使用：

```
<style lang="scss">
   $color: red;
</style>
```

下面主要讲解一下vue中应用less或者[sass](https://so.csdn.net/so/search?q=sass&spm=1001.2101.3001.7020)的方法，以less为例(style.less)。

**写在 vue 中的 less**

所有vue文件的

,会被vue-loader处理编译到一个css文件中，最终自动通过link标签写入index.html（在vue-loader.conf.js中配置）

```
<style scoped lang="less">
.notFoundPage {
    background-color: #0a8acd;
    color: #fff;
    position: relative;
    h1 {
        font-weight: 500;
    }
}
</style>
```

``

**对于外 less 文件**

在main.js中import style.less 。

此时webpack会把style.less和各个vue文件的less部分一起编译到同一个css文件，并在index.html的link中自动引入。

在webpack的入口文件entry中加上style.less，编译完的出口文件会被自动注入到index.html文件中。

```
entry: {
  app: './src/main.js',
  style: './src/style/style.less'
},
```

<script type="text/javascript" src="/static/js/style.c67fefaf3f60c5ca074a.js"></script>

注：在vue2.x的webpack.base.conf.js：

```
{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
},
```

以上是针对.vue文件的处理规则，其中vueLoaderConfig是vue-cli自己定义的加载器，专门处理css样式。
vueLoaderConfig引用的utils.js:

```
return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
 }
```

# 客户端侧与服务器侧总结

客户端

![image-20221205222442307](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221205222442307.png)

# 生产环境和测试环境打出来的包有什么区别

环境分以下几种：

**1.开发和配置环境：**

所有的开发和配置在这个环境里进行。一般情况下，只有这个环境可以改配置和进行开发，并且一般不在这个环境下创建数据。（开发环境就是每个开发人员电脑上的开发环境，只有开发人员可以配置和开发，写数据测试放在测试环境）

**2.测试环境：**

新开发和配置通过系统传输到测试环境，进行功能测试，可以创建数据。（开发人员开发完上传到 [SVN](https://so.csdn.net/so/search?q=SVN&spm=1001.2101.3001.7020)，测试人员下载下来测试。如果测试人员不懂 IDE，就由开发人员下载好，直接通过IP地址访问来测试的。） 

**3.预生产环境（不是必须的）：**

从生产环境不定期同步，保持和生产环境的设置、数据一致性，也是用于测试，它和测试环境最大的区别就是它和生产系统的同步性最高，几乎一样，有些测试，比如需要大数据量的，用这个环境测试看程序性能比用测试环境（一般情况下数据较少）会更准确。(不是必须的，有的公司没有) 

**4.生产环境：**

正式使用的系统环境。 一般情况下，一个环境对应一个服务器，也有一些公司把开发、测试等环境放到一个服务器的。（从SVN上通过 FTP 下载下来，然后在服务器上的 tomcat 部署、发布，服务器是 linux 的） 

Tips:测试环境还有一个用处。向开发中的外部系统提供服务时，直接用生产环境进行联调是不合适，用测试环境就没什么风险了。因此，我们的产品上线后，测试环境仍要与生产环境长期共存、并保持开放状态（测试环境和生产环境一致，用测试环境的目的是，测试时，不影响线上项目的正常使用，等测试完毕，再上生产环境。）