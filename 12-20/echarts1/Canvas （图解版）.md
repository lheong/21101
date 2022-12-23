# Canvas （图解版）

# Canvas 是什么？



- `Canvas` 中文名叫 “画布”，是 `HTML5` 新增的一个标签。
- `Canvas` 允许开发者通过 `JS`在这个标签上绘制各种图案。
- `Canvas` 拥有多种绘制路径、矩形、圆形、字符以及图片的方法。
- `Canvas` 在某些情况下可以 “代替” 图片。
- `Canvas` 可用于动画、游戏、数据可视化、图片编辑器、实时视频处理等领域。





# Canvas 和 SVG 的区别

| Canvas                           | SVG                                                          |
| -------------------------------- | ------------------------------------------------------------ |
| 用JS动态生成元素（一个HTML元素） | 用XML描述元素（类似HTML元素那样，可用多个元素来描述一个图形） |
| 位图（受屏幕分辨率影响）         | 矢量图（不受屏幕分辨率影响）                                 |
| 不支持事件                       | 支持事件                                                     |
| 数据发生变化需要重绘             | 不需要重绘                                                   |

就上面的描述而言可能有点难懂，你可以打开 `AntV` 旗下的图形编辑引擎做对比。[G6](https://link.juejin.cn/?target=https%3A%2F%2Fantv-g6.gitee.io%2Fzh) 是使用 `canvas` 开发的，[X6](https://link.juejin.cn/?target=https%3A%2F%2Fantv-x6.gitee.io%2Fzh) 是使用 `svg` 开发的。



我的建议是：如果要展示的数据量比较大，比如一条数据就是一个元素节点，那使用 `canvas` 会比较合适；如果用户操作的交互比较多，而且对清晰度有要求（矢量图），那么使用 `svg` 会比较合适。





# 起步

学习前端一定要动手敲代码，然后看效果展示。

起步阶段会用几句代码说明 `canvas` 如何使用，本例会画一条直线。



## 画条直线

1. 在 `HTML` 中创建 `canvas` 元素
2. 通过 `js`  `canvas` 标签
3. 从 `canvas` 标签中获取到绘图工具
4. 通过绘图工具，在 `canvas` 标签上绘制图形



![02.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0f9758480234a49a37f655be0178ac0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<!-- 1、创建 canvas 元素 -->
<canvas
  id="c"
  width="300"
  height="200"
  style="border: 1px solid #ccc;"
></canvas>

<script>
  // 2、获取 canvas 对象
  const cnv = document.getElementById('c')

  // 3、获取 canvas 上下文环境对象
  const cxt = cnv.getContext('2d')

  // 4、绘制图形
  cxt.moveTo(100, 100) // 起点坐标 (x, y)
  cxt.lineTo(200, 100) // 终点坐标 (x, y)
  cxt.stroke() // 将起点和终点连接起来
</script>

```

`moveTo` 、 `lineTo` 和 `stroke` 方法暂时可以不用管，它们的作用是绘制图形，这些方法在后面会讲到~



## 注意点

### 1、默认宽高

`canvas` 有 **默认的 宽度(300px) 和 高度(150px)**

如果不在 `canvas` 上设置宽高，那 `canvas` 元素的默认宽度是300px，默认高度是150px。



### 2、设置 canvas 宽高

`canvas` 元素提供了 `width` 和 `height` 两个属性，可设置它的宽高。

需要注意的是，这两个属性只需传入数值，不需要传入单位（比如 `px` 等）。

```html
<canvas width="600" height="400"></canvas>

```



### 3、不能通过 CSS 设置画布的宽高

使用 `css` 设置 `canvas` 的宽高，会出现 **内容被拉伸** 的后果！！！

![03.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/187a45428f604a0389f3d097a2dbd69c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<style>
  #c {
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
  }
</style>

<canvas id="c"></canvas>

<script>
  // 1、获取canvas对象
  const cnv = document.getElementById('c')

  // 2、获取canvas上下文环境对象
  const cxt = cnv.getContext('2d')

  // 3、绘制图形
  cxt.moveTo(100, 100) // 起点
  cxt.lineTo(200, 100) // 终点
  cxt.stroke() // 将起点和终点连接起来

  console.log(cnv.width) // 获取 canvas 的宽度，输出：300
  console.log(cnv.height) // 获取 canvas 的高度，输出：150
</script>

```

`canvas` 的默认宽度是300px，默认高度是150px。

1. 如果使用 `css` 修改 `canvas` 的宽高（比如本例变成 400px * 400px），那宽度就由 300px 拉伸到 400px，高度由 150px 拉伸到 400px。
2. 使用 `js` 获取 `canvas` 的宽高，此时返回的是 `canvas` 的默认值。

最后出现的效果如上图所示。



### 4、线条默认宽度和颜色

线条的默认宽度是 `1px` ，默认颜色是黑色。

但由于默认情况下 `canvas` 会将线条的中心点和像素的底部对齐，所以会导致显示效果是 `2px` 和非纯黑色问题。



### 5、IE兼容性高

暂时只有 `IE 9` 以上才支持 `canvas` 。但好消息是 `IE` 已经有自己的墓碑了。

如需兼容 `IE 7 和 8` ，可以使用 [ExplorerCanvas ](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Farv%2Fexplorercanvas)。但即使是使用了 `ExplorerCanvas `仍然会有所限制，比如无法使用 `fillText()` 方法等。





# 基础图形

## 坐标系

在绘制基础图形之前，需要先搞清楚 `Canvas` 使用的坐标系。

`Canvas` 使用的是 **W3C 坐标系** ，也就是遵循我们屏幕、报纸的阅读习惯，从上往下，从左往右。

![04.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6c2e063a5b845f686db9ac558639442~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

**W3C 坐标系** 和 **数学直角坐标系** 的 `X轴` 是一样的，只是 `Y轴` 的反向相反。

**W3C 坐标系** 的 `Y轴` 正方向向下。



## 直线

### 一条直线

最简单的起步方式是画一条直线。这里所说的 “直线” 是几何学里的 “线段” 的意思。

需要用到这3个方法：

1. `moveTo(x1, y1)`：起点坐标 (x, y)
2. `lineTo(x2, y2)`：下一个点的坐标 (x, y)
3. `stroke()`：将所有坐标用一条线连起来



起步阶段可以先这样理解。

![05.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1efd647acdeb4c82869596fdcf31e7a7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 绘制直线
  cxt.moveTo(50, 100) // 起点坐标
  cxt.lineTo(200, 50) // 下一个点的坐标
  cxt.stroke() // 将上面的坐标用一条线连接起来
</script>

```

上面的代码所呈现的效果，可以看下图解释（手不太聪明，画得不是很标准，希望能看懂）

![06.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58cfcff9580349c980299d40bba0a54f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)



### 多条直线

如需画多条直线，可以用会上面那几个方法。

![07.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df4ce81c8e6142c7ae98a4477c76ebcb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.moveTo(20, 100)
  cxt.lineTo(200, 100)
  cxt.stroke()

  cxt.moveTo(20, 120.5)
  cxt.lineTo(200, 120.5)
  cxt.stroke()
</script>

```



仔细观察一下，为什么两条线的粗细不一样的？

明明使用的方法都是一样的，只是第二条直线的 `Y轴` 的值是有小数点。

答：**默认情况下 `canvas` 会将线条的中心点和像素的底部对齐，所以会导致显示效果是 `2px` 和非纯黑色问题。**

![08.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2da8e3a92d42424ebaf8e257e398e9db~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

上图每个格子代表 `1px`。

**线的中心点会和画布像素点的底部对齐**，所以会线中间是黑色的，但由于一个像素就不能再切割了，所以会有半个像素被染色，就变成了浅灰色。

所以如果你设置的 `Y轴` 值是一个整数，就会出现上面那种情况。



### 设置样式

- `lineWidth`：线的粗细
- `strokeStyle`：线的颜色
- `lineCap`：线帽：默认: `butt`; 圆形: `round`; 方形: `square`



![09.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e6f6986d8204052b8f2b036a1b24a22~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 绘制直线
  cxt.moveTo(50, 50)
  cxt.lineTo(200, 50)

  // 修改直线的宽度
  cxt.lineWidth = 20

  // 修改直线的颜色
  cxt.strokeStyle = 'pink'

  // 修改直线两端样式
  cxt.lineCap = 'round' // 默认: butt; 圆形: round; 方形: square

  cxt.stroke()
</script>

```



### 新开路径

开辟新路径的方法：

- `beginPath()`



在绘制多条线段的同时，还要设置线段样式，通常需要开辟新路径。

要不然样式之间会相互污染。

比如这样

![10.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27ddcc4c2d454edab66804f56b6d9ae6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 第一条线
  cxt.moveTo(20, 100)
  cxt.lineTo(200, 100)
  cxt.lineWidth = 10
  cxt.strokeStyle = 'pink'
  cxt.stroke()

  // 第二条线
  cxt.moveTo(20, 120.5)
  cxt.lineTo(200, 120.5)
  cxt.stroke()
</script>

```



如果不想相互污染，需要做2件事：

1. 使用 `beginPath()` 方法，重新开一个路径
2. 设置新线段的样式（必须项）



如果上面2步却了其中1步都会有影响。

#### 只使用 `beginPath()`

![11.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e51b859db494671b38c083ea6de95cb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 第一条线
  cxt.moveTo(20, 100)
  cxt.lineTo(200, 100)
  cxt.lineWidth = 10
  cxt.strokeStyle = 'pink'
  cxt.stroke()

  // 第二条线
  cxt.beginPath() // 重新开启一个路径
  cxt.moveTo(20, 120.5)
  cxt.lineTo(200, 120.5)
  cxt.stroke()
</script>

```

第一条线的样式会影响之后的线。

但如果使用了 `beginPath()` ，后面的线段不会影响前面的线段。

![12.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d87c907c12754cddb6ae6271901e9f69~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 第一条线
  cxt.moveTo(20, 100)
  cxt.lineTo(200, 100)
  cxt.stroke()

  // 第二条线
  cxt.beginPath() // 重新开启一个路径
  cxt.moveTo(20, 120.5)
  cxt.lineTo(200, 120.5)
  cxt.lineWidth = 4
  cxt.strokeStyle = 'red'
  cxt.stroke()
</script>

```



#### 设置新线段的样式，没使用 `beginPath()` 的情况

这个情况会反过来，后面的线能影响前面的线。

![13.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df75557c72c14fe0af7ab1e0fe867bf8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 第一条线
  cxt.moveTo(20, 100)
  cxt.lineTo(200, 100)
  cxt.lineWidth = 10
  cxt.strokeStyle = 'pink'
  cxt.stroke()

  // 第二条线
  cxt.moveTo(20, 120.5)
  cxt.lineTo(200, 120.5)
  cxt.lineWidth = 4
  cxt.strokeStyle = 'red'
  cxt.stroke()
</script>

```



#### 正确的做法

在设置 `beginPath()` 的同时，也各自设置样式。这样就能做到相互不影响了。

![14.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a25a7b9128b4fef8421fbdc79936ff9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.moveTo(20, 100)
  cxt.lineTo(200, 100)
  cxt.lineWidth = 10
  cxt.strokeStyle = 'pink'
  cxt.stroke()

  cxt.beginPath() // 重新开启一个路径
  cxt.moveTo(20, 120.5)
  cxt.lineTo(200, 120.5)
  cxt.lineWidth = 4
  cxt.strokeStyle = 'red'
  cxt.stroke()
</script>

```



## 折线

和 **直线** 差不多，都是使用 `moveTo()` 、`lineTo()` 和 `stroke()` 方法可以绘制折线。

![15.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4074da78effa49cab063b5ebe0fbfb6b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.moveTo(50, 200)
  cxt.lineTo(100, 50)
  cxt.lineTo(200, 200)
  cxt.lineTo(250, 50)

  cxt.stroke()
</script>

```

画这种折线，最好在草稿纸上画一个坐标系，自己计算并描绘一下每个点大概在什么什么位置，最后在 `canvas` 中看看效果。



## 矩形

根据前面的基础，我们可以 **使用线段来描绘矩形**，但 `canvas` 也提供了 `rect()` 等方法可以直接生成矩形。



### 使用线段描绘矩形

可以使用前面画线段的方法来绘制矩形

![16.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96b33761c6d34db5ba8cbb377ef4a41c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
 const cnv = document.getElementById('c')
 const cxt = cnv.getContext('2d')

 // 绘制矩形
 cxt.moveTo(50, 50)
 cxt.lineTo(200, 50)
 cxt.lineTo(200, 120)
 cxt.lineTo(50, 120)
 cxt.lineTo(50, 50) // 需要闭合，又或者使用 closePath() 方法进行闭合，推荐使用 closePath()

 cxt.stroke()
</script>

```



上面的代码几个点分别对应下图。

![17.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4b846e17c254273a06498118a61722e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)



### 使用 `strokeRect()` 描边矩形

- `strokeStyle`：设置描边的属性（颜色、渐变、图案）
- `strokeRect(x, y, width, height)`：描边矩形（x和y是矩形左上角起点；width 和 height 是矩形的宽高）
- `strokeStyle` 必须写在 `strokeRect()` 前面，不然样式不生效。



![18.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/044615a4850443779f0725a1c4602378~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // strokeStyle 属性
  // strokeRect(x, y, width, height) 方法
  cxt.strokeStyle = 'pink'
  cxt.strokeRect(50, 50, 200, 100)
</script>

```

上面的代码可以这样理解

![19.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed89c6dfb042428fb7dbd272b3918580~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)



### 使用 `fillRect()` 填充矩形

`fillRect()` 和 `strokeRect()` 方法差不多，但 `fillRect()` 的作用是填充。

**需要注意的是，`fillStyle` 必须写在 `fillRect()` 之前，不然样式不生效。**

![20.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3de94dcadbf4c1db44b56817cff379c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // fillStyle 属性
  // fillRect(x, y, width, height) 方法
  cxt.fillStyle = 'pink'
  cxt.fillRect(50, 50, 200, 100) // fillRect(x, y, width, height)
</script>

```



### 同时使用 `strokeRect()` 和 `fillRect()`

同时使用 `strokeRect()` 和 `fillRect()` 会产生描边和填充的效果

![21.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2815aaafb4cf44d29a1e5bab68eaf2d1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.strokeStyle = 'red'
  cxt.strokeRect(50, 50, 200, 100) // strokeRect(x, y, width, height)
  cxt.fillStyle = 'yellow'
  cxt.fillRect(50, 50, 200, 100) // fillRect(x, y, width, height)
</script>

```



### 使用 `rect()` 生成矩形

`rect()` 和 `fillRect() 、strokeRect()` 的用法差不多，唯一的区别是：

**`strokeRect()` 和 `fillRect()` 这两个方法调用后会立即绘制；`rect()` 方法被调用后，不会立刻绘制矩形，而是需要调用 `stroke()` 或 `fill()` 辅助渲染。**



![22.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a32dd51dd384a5c805e2b1a4ad727e1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.strokeStyle = 'red'
  cxt.fillStyle = 'pink'

  cxt.rect(50, 50, 200, 100) // rect(x, y, width, height)

  cxt.stroke()
  cxt.fill()
</script>

```



**等价公式：**

```js
cxt.strokeStyle = 'red',
cxt.rect(50, 50, 200, 100)
cxt.stroke()

// 等价于
cxt.strokeStyle = 'red'
cxt.strokerect(50, 50, 200, 100)


// -----------------------------


cxt.fillStyle = 'hotpink'
cxt.rect(50, 50, 200, 100)
cxt.fill()

// 等价于
cxt.fillStyle = 'yellowgreen'
cxt.fillRect(50, 50, 200, 100)

```



### 使用 `clearRect()` 清空矩形

使用 `clearRect()` 方法可以清空指定区域。

```js
clearRect(x, y, width, height)

```

其语法和创建 `cxt.rect()` 差不多。



![23.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/068f7366d6404226b5f1465cf7056f9c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.fillStyle = 'pink' // 设置填充颜色
  cxt.fillRect(50, 50, 200, 200) // 填充矩形

  cxt.clearRect(60, 60, 180, 90) // 清空矩形
</script>

```



### 清空画布

`canvas` 画布元素是矩形，所以可以通过下面的代码把整个画布清空掉。

```js
// 省略部分代码

cxt.clearRect(0, 0, cnv.width, cnv.height)

```

要清空的区域：从画布左上角开始，直到画布的宽和画布的高为止。



## 多边形

`Canvas` 要画多边形，需要使用 `moveTo()` 、 `lineTo()` 和 `closePath()` 。



### 三角形

虽然三角形是常见图形，但 `canvas` 并没有提供类似 `rect()` 的方法来绘制三角形。

需要确定三角形3个点的坐标位置，然后使用 `stroke()` 或者 `fill()` 方法生成三角形。



![24.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ece479373524fcab7c3bcbc25468f32~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>

  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.moveTo(50, 50)
  cxt.lineTo(200, 50)
  cxt.lineTo(200, 200)

  // 注意点：如果使用 lineTo 闭合图形，是不能很好闭合拐角位的。
  cxt.lineTo(50, 50) // 闭合

  cxt.stroke()

</script>

```

注意，默认情况下不会自动从最后一个点连接到起点。最后一步需要设置一下 `cxt.lineTo(50, 50)` ，让它与 `cxt.moveTo(50, 50)` 一样。这样可以让路径回到起点，形成一个闭合效果。

但这样做其实是有点问题的，而且也比较麻烦，要记住起始点坐标。

上面的闭合操作，如果遇到设置了 `lineWidth` 或者 `lineJoin` 就会有问题，比如：

![25.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e6175addee142409e39c265b156dd50~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```js
// 省略部分代码
cxt.lineWidth = 20

```

当线段变粗后，起始点和结束点的链接处，拐角就出现“不正常”现象。



如果需要真正闭合，可以使用 `closePath()` 方法。

![26.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ecada62cde24a8c9061b60ef6ddafc9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.moveTo(50, 50)
  cxt.lineTo(200, 50)
  cxt.lineTo(200, 200)
  // 手动闭合
  cxt.closePath()

  cxt.lineJoin = 'bevel' // 线条连接的样式。miter: 默认; bevel: 斜面; round: 圆角
  cxt.lineWidth = 20
  cxt.stroke()
</script>

```

使用 `cxt.closePath()` 可以自动将终点和起始点连接起来，此时看上去就正常多了。



### 菱形

有一组邻边相等的平行四边形是菱形

![27.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a8a42f9dc014797b69f6ea0fb41be19~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.moveTo(150, 50)
  cxt.lineTo(250, 100)
  cxt.lineTo(150, 150)
  cxt.lineTo(50, 100)
  cxt.closePath()
  cxt.stroke()
</script>

```



要绘制直线类型的图形，在草稿纸上标记出起始点和每个拐角的点，然后再连线即可。相对曲线图形来说，直线图形是比较容易的。



## 圆形

绘制圆形的方法是 `arc()`。

**语法：**

```js
arc(x, y, r, sAngle, eAngle，counterclockwise)

```

- `x` 和 `y`: 圆心坐标
- `r`: 半径
- `sAngle`: 开始角度
- `eAngle`: 结束角度
- `counterclockwise`: 绘制方向（true: 逆时针; false: 顺时针），默认 false



![28.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b78a879ad83a401a8d3405d828701257~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

开始角度和结束角度，都是以**弧度**为单位。例如 180°就写成 `Math.PI` ，360°写成 `Math.PI * 2` ，以此类推。

在实际开发中，为了让自己或者别的开发者更容易看懂**弧度的数值**，1°应该写成 `Math.PI / 180`。

- 100°: `100 * Math.PI / 180`
- 110°: `110 * Math.PI / 180`
- 241°: `241 * Math.PI / 180`



**注意：绘制圆形之前，必须先调用 `beginPath()` 方法！！！ 在绘制完成之后，还需要调用 `closePath()` 方法！！！**



![29.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6287f45d2d049809a58970c6964c0a7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.beginPath()
  cxt.arc(150, 150, 80, 0, 360 * Math.PI / 180)
  cxt.closePath()

  cxt.stroke()
</script>

```



## 半圆

如果使用 `arc()` 方法画圆时，没做到刚好绕完一周（360°）就直接闭合路径，就会出现半圆的状态。

![30.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf0c609b880a4586b84781dc8fd3355a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.beginPath()
  cxt.arc(150, 150, 100, 0, 180 * Math.PI / 180) // 顺时针
  cxt.closePath()

  cxt.stroke()
</script>

```

上面的代码中，`cxt.arc` 最后一个参数没传，默认是 `false` ，所以是顺时针绘制。

![31.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4cd13fe25c047a79dc909cb8041552c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)



如果希望半圆的弧面在上方，可以将 `cxt.arc` 最后一个参数设置成 `true`

![32.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d6e4f7531054131999daf8468d3e8aa~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.beginPath()
  cxt.arc(150, 150, 100, 0, 180 * Math.PI / 180, true)
  cxt.closePath()

  cxt.stroke()
</script>

```



## 弧线

使用 `arc()` 方法画半圆时，如果最后不调用 `closePath()` 方法，就不会出现闭合路径。也就是说，那是一条弧线。

在 `canvas` 中，画弧线有2中方法：`arc()` 和 `arcTo()` 。



### arc() 画弧线

如果想画一条 `0° ~ 30°` 的弧线，可以这样写

![33.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/077a91072dee455c878120f36a37e99f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.beginPath()
  cxt.arc(150, 150, 100, 0, 30 * Math.PI / 180)

  cxt.stroke()
</script>

```



原理如下图所示，红线代表画出来的那条弧线。

![34.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1378d53ece814df39d5eddcd8e4fa532~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)



### arcTo() 画弧线

`arcTo()` 的使用方法会更加复杂，如果初学看不太懂的话可以先跳过，看完后面的再回来补补。

**语法：**

```scss
arcTo(cx, cy, x2, y2, radius)

```

- `cx`: 两切线交点的横坐标
- `cy`: 两切线交点的纵坐标
- `x2`: 结束点的横坐标
- `y2`: 结束点的纵坐标
- `radius`: 半径

其中，`(cx, cy)` 也叫控制点，`(x2, y2)` 也叫结束点。

是不是有点奇怪，为什么没有 `x1` 和 `y1` ？

`(x1, y1)` 是开始点，通常是由 `moveTo()` 或者 `lineTo()` 提供。



`arcTo()` 方法利用 **开始点、控制点和结束点形成的夹角，绘制一段与夹角的两边相切并且半径为 `radius` 的圆弧**。

![35.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3842a72c0e2d4ac7acca713bc2ab83b8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)



举个例子

![36.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0822f0251bd84b758d3548e39717ce0e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.moveTo(40, 40)
  cxt.arcTo(120, 40, 120, 120, 80)

  cxt.stroke()
</script>

```





# 基础样式

前面学完基础图形，接下来可以开始了解一下如何设置元素的基础样式。



## 描边 stroke()

前面的案例中，其实已经知道使用 `stroke()` 方法进行描边了。这里就不再多讲这个方法。



## 线条宽度 lineWidth

`lineWidth` 默认值是 `1` ，默认单位是 `px`。

**语法：**

```js
lineWidth = 线宽

```



![37.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ccb416d88d94c869b948975e1c19962~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 线宽 10
  cxt.beginPath()
  cxt.moveTo(50, 50)
  cxt.lineTo(250, 50)
  cxt.lineWidth = 10 // 设置线宽
  cxt.stroke()

  // 线宽 20
  cxt.beginPath()
  cxt.moveTo(50, 150)
  cxt.lineTo(250, 150)
  cxt.lineWidth = 20 // 设置线宽
  cxt.stroke()

  // 线宽 30
  cxt.beginPath()
  cxt.moveTo(50, 250)
  cxt.lineTo(250, 250)
  cxt.lineWidth = 30 // 设置线宽
  cxt.stroke()
</script>

```



## 线条颜色 strokeStyle

使用 `strokeStyle` 可以设置线条颜色

**语法:**

```js
strokeStyle = 颜色值

```



![38.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aae98a09ef604d6eb981b23a73d3b365~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.moveTo(50, 50)
  cxt.lineTo(250, 50)
  cxt.lineWidth = 20
  cxt.strokeStyle = 'pink' // 设置颜色
  cxt.stroke()
</script>

```

为了展示方便，我将 `lineWidth` 设为 20。



## 线帽 lineCap

线帽指的是线段的开始和结尾处的样式，使用 `lineCap` 可以设置

**语法：**

```js
lineCap = '属性值'

```



属性值包括：

- `butt`: 默认值，无线帽
- `square`: 方形线帽
- `round`: 圆形线帽



![39.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a86ac78e621041c6a8c08eb1dbba1777~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 设置线宽，方便演示
  cxt.lineWidth = 16

  // 默认线帽 butt
  cxt.beginPath()
  cxt.moveTo(50, 60)
  cxt.lineTo(250, 60)
  cxt.stroke()


  // 方形线帽 square
  cxt.beginPath()
  cxt.lineCap = 'square'
  cxt.moveTo(50, 150)
  cxt.lineTo(250, 150)
  cxt.stroke()


  // 圆形线帽 round
  cxt.beginPath()
  cxt.lineCap = 'round'
  cxt.moveTo(50, 250)
  cxt.lineTo(250, 250)
  cxt.stroke()
</script>

```



使用 `square` 和 `round` 的话，会使线条变得稍微长一点点，这是给线条增加线帽的部分，这个长度在日常开发中需要注意。

**线帽只对线条的开始和结尾处产生作用，对拐角不会产生任何作用。**



## 拐角样式 lineJoin

如果需要设置拐角样式，可以使用 `lineJoin` 。

**语法：**

```js
lineJoin = '属性值'

```



属性值包括：

- `miter`: 默认值，尖角
- `round`: 圆角
- `bevel`: 斜角



![40.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68e2544ae37047d5bc0b1b7e89b29bc6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')
  
  cxt.lineWidth = 20

  // 默认，尖角
  cxt.moveTo(50, 40)
  cxt.lineTo(200, 40)
  cxt.lineTo(200, 90)
  cxt.stroke()

  // 斜角 bevel
  cxt.beginPath()
  cxt.moveTo(50, 140)
  cxt.lineTo(200, 140)
  cxt.lineTo(200, 190)
  cxt.lineJoin = 'bevel'
  cxt.stroke()

  // 圆角 round
  cxt.beginPath()
  cxt.moveTo(50, 240)
  cxt.lineTo(200, 240)
  cxt.lineTo(200, 290)
  cxt.lineJoin = 'round'
  cxt.stroke()
</script>

```



## 虚线 setLineDash()

使用 `setLineDash()` 方法可以将描边设置成虚线。

**语法：**

```js
setLineDash([])

```

需要传入一个数组，且元素是数值型。



虚线分3种情况

1. 只传1个值
2. 有2个值
3. 有3个以上的值



![41.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd781e281b8c4e429746d7cbead831c0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.lineWidth = 20
  cxt.strokeStyle = 'pink'

  cxt.moveTo(50, 50)
  cxt.lineTo(200, 50)
  cxt.setLineDash([10]) // 只传1个参数，实线与空白都是 10px
  cxt.stroke()


  cxt.beginPath()
  cxt.moveTo(50, 100)
  cxt.lineTo(200, 100)
  cxt.setLineDash([10, 20]) // 2个参数，此时，实线是 10px, 空白 20px
  cxt.stroke()


  cxt.beginPath()
  cxt.moveTo(50, 150)
  cxt.lineTo(200, 150)
  cxt.setLineDash([10, 20, 5]) // 传3个以上的参数，此例：10px实线，20px空白，5px实线，10px空白，20px实线，5px空白 ……

  cxt.stroke()
</script>

```



此外，还可以始终 `cxt.getLineDash()` 获取虚线不重复的距离；

用 `cxt.lineDashOffset` 设置虚线的偏移位。



## 填充

使用 `fill()` 可以填充图形，根据前面的例子应该掌握了如何使用 `fill()`



![42.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0df09e48c4142f2a08c8d141898fc83~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.fillStyle = 'pink'

  cxt.rect(50, 50, 200, 100)

  cxt.fill()
</script>

```



可以使用 `fillStyle` 设置填充颜色，默认是黑色。



## 非零环绕填充

在使用 `fill()` 方法填充时，需要注意一个规则：**非零环绕填充**。

在使用 `moveTo` 和 `lineTo` 描述图形时，如果是按顺时针绘制，计数器会加1；如果是逆时针，计数器会减1。

当图形所处的位置，计数器的结果为0时，它就不会被填充。



这样说有点复杂，先看看例子

![43.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57ef9a8982f14570812dbf32ee3bac13~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 外层矩形
  cxt.moveTo(50, 50)
  cxt.lineTo(250, 50)
  cxt.lineTo(250, 250)
  cxt.lineTo(50, 250)
  cxt.closePath()

  // 内层矩形
  cxt.moveTo(200, 100)
  cxt.lineTo(100, 100)
  cxt.lineTo(100, 200)
  cxt.lineTo(200, 200)
  cxt.closePath()
  cxt.fill()
</script>

```

请看看上面的代码，我画了2个矩形，它们都没有用 `beginPath()` 方法开辟新路径。

![44.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc064f7fe5134f0784353708c88a2dce~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

内层矩形是逆时针绘制的，所以内层的值是 `-1` ，它又经过外层矩形，而外层矩形是顺时针绘制，所以经过外层时值 `+1`，最终内层的值为 `0` ，所以不会被填充。





# 文本

`Canvas` 提供了一些操作文本的方法。

为了方便演示，我们先了解一下在 `Canvas` 中如何给本文设置样式。



## 样式 font

和 `CSS` 设置 `font` 差不多，`Canvas` 也可以通过 `font` 设置样式。

**语法：**

```js
cxt.font = 'font-style font-variant font-weight font-size/line-height font-family'

```



如果需要设置字号 `font-size`，需要同时设置 `font-family`。

```js
cxt.font = '30px 宋体'

```



## 描边 strokeText()



使用 `strokeText()` 方法进行文本描边

**语法：**

```scss
strokeText(text, x, y, maxWidth)

```

- `text`: 字符串，要绘制的内容
- `x`: 横坐标，文本**左边**要对齐的坐标（默认左对齐）
- `y`: 纵坐标，文本**底边**要对齐的坐标
- `maxWidth`: 可选参数，表示文本渲染的最大宽度（px），如果文本超出 `maxWidth` 设置的值，文本会被压缩。

![45.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb7bc68dc69d4194a4f75c9ca23c8c7b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.font = '60px Arial' // 将字号设置成 60px，方便观察
  cxt.strokeText('雷猴', 30, 90)
</script>

```



## 设置描边颜色 strokeStyle

使用 `strokeStyle` 设置描边颜色。



![46.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe421dcb0db648278427adbf2640c47a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.font = '60px Arial' // 将字号设置成 60px，方便观察
  cxt.strokeStyle = 'pink' // 设置文本描边颜色
  cxt.strokeText('雷猴', 30, 90)
</script>

```



## 填充 fillText

使用 `fillText()` 可填充文本。

语法和 `strokeText()` 一样。

```js
fillText(text, x, y, maxWidth)

```



![47.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e407ab1f232b4774a47cf1d492fbd9cf~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.font = '60px Arial'
  cxt.fillText('雷猴', 30, 90)
</script>

```



## 设置填充颜色 fillStyle

使用 `fillStyle` 可以设置文本填充颜色。



![48.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b7ab7c1090342a298a5b5eea09c960a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  cxt.font = '60px Arial'
  cxt.fillStyle = 'pink'
  cxt.fillText('雷猴', 30, 90)
</script>

```



## 获取文本长度 measureText()

`measureText().width` 方法可以获取文本的长度，单位是 `px` 。

```html
<canvas id="c" width="300" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  let text = '雷猴'
  cxt.font = 'bold 40px Arial'
  cxt.fillText(text, 40, 80)

  console.log(cxt.measureText(text).width) // 80
</script>

```



## 水平对齐方式 textAlign

使用 `textAlign` 属性可以设置文字的水平对齐方式，一共有5个值可选

- `start`: 默认。在指定位置的横坐标开始。
- `end`: 在指定坐标的横坐标结束。
- `left`: 左对齐。
- `right`: 右对齐。
- `center`: 居中对齐。



![49.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c9f403d9ed3486ba8496a81f3c14779~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

红线是辅助参考线。

```html
<canvas id="c" width="400" height="400" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 竖向的辅助线（参考线，在画布中间）
  cxt.moveTo(200, 0)
  cxt.lineTo(200, 400)
  cxt.strokeStyle = 'red'
  cxt.stroke()

  cxt.font = '30px Arial'

  // 横坐标开始位对齐
  cxt.textAlign = 'start' // 默认值,
  cxt.fillText('雷猴 start', 200, 40)

  // 横坐标结束位对齐
  cxt.textAlign = 'end' // 结束对齐
  cxt.fillText('雷猴 end', 200, 100)

  // 左对齐
  cxt.textAlign = 'left' // 左对齐
  cxt.fillText('雷猴 left', 200, 160)

  // 右对齐
  cxt.textAlign = 'right' // 右对齐
  cxt.fillText('雷猴 right', 200, 220)

  // 居中对齐
  cxt.textAlign = 'center' // 右对齐
  cxt.fillText('雷猴 center', 200, 280)
</script>

```



从上面的例子看，`start` 和 `left` 的效果好像是一样的，`end` 和 `right` 也好像是一样的。

在大多数情况下，它们的确一样。但在某些国家或者某些场合，阅读文字的习惯是 **从右往左** 时，`start` 就和 `right` 一样了，`end` 和 `left` 也一样。这是需要注意的地方。



## 垂直对齐方式 textBaseline

使用 `textBaseline` 属性可以设置文字的垂直对齐方式。

在使用 `textBaseline` 前，需要自行了解 `css` 的文本基线。

![50.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f48b35482cb4bba8180788bdd5f1769~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

用一张网图解释一下基线



**`textBaseline` 可选属性：**

- `alphabetic`: 默认。文本基线是普通的字母基线。
- `top`: 文本基线是 `em` 方框的顶端。
- `bottom`: 文本基线是 `em` 方框的底端。
- `middle`: 文本基线是 `em` 方框的正中。
- `hanging`: 文本基线是悬挂基线。



![51.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b1680c39fa945faa5e6f4244e6668a8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

红线是辅助参考线。

```html
<canvas id="c" width="800" height="300" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 横向的辅助线（参考线，在画布中间）
  cxt.moveTo(0, 150)
  cxt.lineTo(800, 150)
  cxt.strokeStyle = 'red'
  cxt.stroke()

  cxt.font = '20px Arial'

  // 默认 alphabetic
  cxt.textBaseline = 'alphabetic'
  cxt.fillText('雷猴 alphabetic', 10, 150)

  // 默认 top
  cxt.textBaseline = 'top'
  cxt.fillText('雷猴 top', 200, 150)

  // 默认 bottom
  cxt.textBaseline = 'bottom'
  cxt.fillText('雷猴 bottom', 320, 150)

  // 默认 middle
  cxt.textBaseline = 'middle'
  cxt.fillText('雷猴 middle', 480, 150)

  // 默认 hanging
  cxt.textBaseline = 'hanging'
  cxt.fillText('雷猴 hanging', 640, 150)
</script>

```



**注意：在绘制文字的时候，默认是以文字的左下角作为参考点进行绘制**





# 图片

在 `Canvas` 中可以使用 `drawImage()` 方法绘制图片。



## 渲染图片

渲染图片的方式有2中，一种是**在JS里加载图片再渲染**，另一种是**把DOM里的图片拿到 `canvas` 里渲染**。

**渲染的语法：**

```js
drawImage(image, dx, dy)

```

- `image`: 要渲染的图片对象。
- `dx`: 图片左上角的横坐标位置。
- `dy`: 图片左上角的纵坐标位置。



### JS版

在 `JS` 里加载图片并渲染，有以下几个步骤：

1. 创建 `Image` 对象
2. 引入图片
3. 等待图片加载完成
4. 使用 `drawImage()` 方法渲染图片



![52.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4515dd93ab294a86ae7e06df3d89a78f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="500" height="500" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  // 1 创建 Image 对象
  const image = new Image()

  // 2 引入图片
  image.src = './images/dog.jpg'

  // 3 等待图片加载完成
  image.onload = () => {
    // 4 使用 drawImage() 方法渲染图片
    cxt.drawImage(image, 30, 30)
  }
</script>

```



### DOM版

![53.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d42bbc58407a47239b0043132785870c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<style>
  #dogImg {
    display: none;
  }
</style>

<img src="./images/dog.jpg" id="dogImg"/>
<canvas id="c" width="500" height="500" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  const image = document.getElementById('dogImg')

  cxt.drawImage(image, 70, 70)
</script>

```



因为图片是从 `DOM` 里获取到的，所以一般来说，只要在 `window.onload` 这个生命周期内使用 `drawImage` 都可以正常渲染图片。



本例使用了 `css` 的方式，把图片的 `display` 设置成 `none` 。因为我不想被 `<img>` 影响到本例讲解。

实际开发过程中按照实际情况设置即可。



## 设置图片宽高

前面的例子都是直接加载图片，图片默认的宽高是多少就加载多少。

如果需要指定图片宽高，可以在前面的基础上再添加两个参数：

```js
drawImage(image, dx, dy, dw, dh)

```

`image、 dx、 dy` 的用法和前面一样。

`dw` 用来定义图片的宽度，`dh` 定义图片的高度。



![54.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9be2236ce8804cebab4c37cfb39c68c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="500" height="500" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  const image = new Image()
  image.src = './images/dog.jpg'

  image.onload = () => {
    cxt.drawImage(image, 30, 30, 100, 100)
  }
</script>

```

我把图片的尺寸设为 100px * 100px，图片看上去比之前就小了很多。



## 截取图片

截图图片同样使用`drawImage()` 方法，只不过传入的参数数量比之前都多，而且顺序也有点不一样了。

```js
drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)

```

以上参数缺一不可

- `image`: 图片对象
- `sx`: 开始截取的横坐标
- `sy`: 开始截取的纵坐标
- `sw`: 截取的宽度
- `sh`: 截取的高度
- `dx`: 图片左上角的横坐标位置
- `dy`: 图片左上角的纵坐标位置
- `dw`: 图片宽度
- `dh`: 图片高度



![55.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18f0784fd1da4ec4bfa6c372a2ebac54~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```html
<canvas id="c" width="500" height="500" style="border: 1px solid #ccc;"></canvas>

<script>
  const cnv = document.getElementById('c')
  const cxt = cnv.getContext('2d')

  const image = new Image()
  image.src = './images/dog.jpg'

  image.onload = () => {
    cxt.drawImage(image, 0, 0, 100, 100, 30, 30, 200, 200)
  }
</script>
```