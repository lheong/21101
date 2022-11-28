<template>
  <div class="temobox">
    <div class="box">
      <main class="temo">
        <!-- 头部图片 -->
        <header class="header">
          <div class="img">
            <img src="../assets/note.75134fb0.svg" alt="note" />
          </div>
          <div class="todo">To-DoList</div>
        </header>
        <!-- 中间字体 -->
        <div class="font">
          <p class="title">~ Today I need to ~</p>
          <!-- input输入框 按钮 -->
          <div class="doxInput">
            <div class="input">
              <!-- // 输入框自动获取焦点 autofocus -->
              <input
                type="text"
                class="enter"
                placeholder="Add new todo..."
                autofocus
                v-model="msg"
                @keyup.enter="enter(msg)"
              />
            </div>
            <button type="submit" class="add">
              <span>Submit</span>
            </button>
          </div>
        </div>
        <!-- 内容 -->
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div class="inp" @click="flag = !flag">
              <div v-show="flag == true" class="smallbox"></div>
              <span v-show="flag == false">✔</span>
            </div>
            <p>{{ item.msg }}</p>
            <button @click="del(index)">×</button>
          </li>
        </ul>
        <!-- 下面字体 -->
        <div class="bottomOne" v-show="list.length == 0">
          <img src="../assets/笔记.png" alt="note" class="image" />
          <span class="msg">Congrat, you have no more tasks to do</span>
        </div>
        <!-- 下面字体 -->
        <div class="bottomTwo" v-show="list.length != 0">
          <div><span class="num">0</span> item left</div>
          <div class="option all">All</div>
          <div class="option active">Active</div>
          <div class="option completed">Completed</div>
          <div class="option clear">Clear completed</div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      list: [],
      msg: "",
      flag: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    enter(msg) {
      this.msg = msg;
      this.list.push({ msg: this.msg });
      this.msg = "";
    },
    del(i) {
      this.list.splice(i, 1);
    },
  },
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Yanone Kaffeesatz", sans-serif;
  color: #494a4b;
  list-style: none;
}

.temobox {
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
  background-repeat: no-repeat;
}

.box {
  width: 440px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 20px;
}

/* 大盒子样式 */
.temo {
  padding: 30px 40px 20px;
  text-align: center;
  width: 440px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
}

/* 头部图片 */
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 右边todolist */
.header .img {
  width: 80px;
  margin-right: 10px;
}

.header .todo {
  transform: rotate(3deg);
  font-size: 26px;
  padding: 0.25em 0.8em 0.15em;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  color: #fff;
  background: #fe7345;
  font-weight: 400;
}

/* 中间todolist  */
.font {
  margin-top: 25px;
}

.font .title {
  font-size: 22px;
  margin-bottom: 18px;
  font-weight: 400;
  font-family: "Yanone Kaffeesatz", sans-serif;
}

/* 输入框 */
.doxInput {
  display: flex;
  justify-content: center;
}

.input {
  display: inline-block;
  flex-grow: 0.65;
  margin-right: 15px;
}

.input input {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 3px dashed #fe7345;
  padding: 5px 0 3px;
  font-size: 18px;
  background: transparent;
}

/* 按钮 */
.add {
  position: relative;
  transform: rotate(4deg);
  border-radius: 6px;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.add:before {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  transform: scaleY(1.1);
  border: 1px solid #494a4b;
  border-radius: inherit;
  transform-origin: top;
  background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
  background-color: #fe7345;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.add span {
  position: relative;
  display: block;
  font-size: 16.5px;
  padding: 0.34em 0.84em;
  border-radius: inherit;
  background-color: #fff;
}

/* 下面字体 */
.bottomOne {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
  -webkit-animation: zoom-132cabf7 0.45s ease-in-out;
  animation: zoom-132cabf7 0.45s ease-in-out;
}

.bottomTwo {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 30px;
  gap: 10px;
  -webkit-animation: zoom-132cabf7 0.45s ease-in-out;
  animation: zoom-132cabf7 0.45s ease-in-out;
}

/* bottomOne 内容样式 */
.bottom .msg {
  font-size: 17px;
  padding-top: 5px;
  color: rgba(73, 74, 75, 0.45);
}

.bottom img {
  width: 18px;
  height: 20px;
}

/* bottomTwo 内容样式 */
.option {
  padding: 0 0.6em;
  border-radius: 4px;
  transition: all 60ms ease-out;
  cursor: pointer;
  user-select: none;
}

/* 内容部分 */
ul {
  margin-top: 20px;
  perspective: 350px;
}

li {
  display: flex;
  align-items: center;
  padding: 8px 10px 8px 0;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

/* 左边 */
li .inp {
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

li .smallbox {
  width: 14px;
  height: 14px;
  border: #494a4b solid 2px;
  border-radius: 0.2rem;
  /* display: none; */
}

li .flag {
  font-weight: 700;
}

/* 中间内容 */
li p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 7px;
}

/* 右边叉号 */
li button {
  margin: 0 -8px 0 auto;
  padding: 0 8px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 34px;
}

/* 状态改变样式 */
.option:hover {
  color: #fff;
  background-color: #fe7345;
}
</style>
