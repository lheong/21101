<template>
  <div id="app">
    <router-view class="page" />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

body,
html,
#app,
.page {
  width: 100%;
  height: 100%;
}
.el-container{
	width: 100%;
	height: 100%;
	padding: 0;
}
.el-aside{
	height: 100%;
	background:#333744 ;
	color: #fff;
}
.el-main{
	padding: 0 !important;
	margin: 0;
	width: 100%;
	height: 100%;

}
.el-menu{
	border: 0 !important;
}

</style>
