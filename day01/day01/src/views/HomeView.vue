<template>
  <div>
    <child :msg="msg" @add="add"></child>
    <p>{{list}}</p>
    <childs></childs>


    <h1>vuex的数据:{{$store.state.List}}</h1>

    <div>{{this.set}}</div>

    <my-input  ></my-input>
 </div>
</template>

<script>
import child from "../components/child.vue"
import childs from "../components/childs.vue"
import myInput from "../components/myInput.vue"
export default {
  data () {
    return {
      msg:'父传子',
      list:'',
      set:localStorage.getItem("name")||[],
      
    }
  },
  methods: {
    add(val){
      console.log(val);
      this.list=val
    }
  },
  created () {
    localStorage.setItem("name",'本地存储数据')
  },
  mounted () {

  },
  components: {
    child,
    childs,
    myInput
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
