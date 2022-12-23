## canvas 是什么？
    Canvas 中文名叫 “画布”，是 HTML5 新增的一个标签。
    Canvas 允许开发者通过 JS在这个标签上绘制各种图案。
    Canvas 拥有多种绘制路径、矩形、圆形、字符以及图片的方法。
    Canvas 在某些情况下可以 “代替” 图片。
    Canvas 可用于动画、游戏、数据可视化、图片编辑器、实时视频处理等领域。

## Canvas 和 SVG 的区别

	Canvas 
	用JS动态生成元素（一个HTML元素）	 
	位图（受屏幕分辨率影响）
	不支持事件
	数据发生变化需要重绘
	SVG
	用XML描述元素（类似HTML元素那样，可用多个元素来描述一个图形）
	矢量图（不受屏幕分辨率影响）
	支持事件
	不需要重绘

## 起步

	1. 在 `HTML` 中创建 `canvas` 元素
	2. 通过 `js` 获取 `canvas` 标签
	3. 从 `canvas` 标签中获取到绘图工具
	4. 通过绘图工具，在 `canvas` 标签上绘制图形
```
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

## 注意点

### 1、默认宽高
	canvas 有 默认的 宽度(300px) 和 高度(150px)
	如果不在 canvas 上设置宽高，那 canvas 元素的默认宽度是300px，默认高度是150px。


### 2、设置 canvas 宽高
	canvas 元素提供了 width 和 height 两个属性，可设置它的宽高。
	需要注意的是，这两个属性只需传入数值，不需要传入单位（比如 px 等）。

### 3、不能通过 CSS 设置画布的宽高

	使用 css 设置 canvas 的宽高，会出现 内容被拉伸 的后果！！！
	canvas 的默认宽度是300px，默认高度是150px。
	
	1、如果使用 css 修改 canvas 的宽高（比如本例变成 400px * 400px），那宽度就由 300px 拉伸到 400px，高度由 150px 拉伸到 400px。
	2、使用 js 获取 canvas 的宽高，此时返回的是 canvas 的默认值。
### 4、线条默认宽度和颜色

	线条的默认宽度是 1px ，默认颜色是黑色。
	
	但由于默认情况下 canvas 会将线条的中心点和像素的底部对齐，所以会导致显示效果是 2px 和非纯黑色问题。
###  5、IE兼容性高

	暂时只有 IE 9 以上才支持 canvas 。但好消息是 IE 已经有自己的墓碑了。
	
	如需兼容 IE 7 和 8 ，可以使用 ExplorerCanvas 。但即使是使用了 ExplorerCanvas  仍然会有所限制，比如无法使用 fillText() 方法等。
## 坐标系

	Canvas 使用的是 W3C 坐标系 ，也就是遵循我们屏幕、报纸的阅读习惯，从上往下，从左往右。
	W3C 坐标系 和 数学直角坐标系 的 X轴 是一样的，只是 Y轴 的反向相反。
	W3C 坐标系 的 Y轴 正方向向下。
## 直线

### 一条直线
	最简单的起步方式是画一条直线。这里所说的 “直线” 是几何学里的 “线段” 的意思。
	需要用到这3个方法：
	
	moveTo(x1, y1)：起点坐标 (x, y)
	lineTo(x2, y2)：下一个点的坐标 (x, y)
	stroke()：将所有坐标用一条线连起来
