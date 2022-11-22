<template>
  <div>
    <button @click="yeye">爷爷</button>
    <h1>拿到爷爷组件的数据{{$attrs.msg}}</h1>
 </div>
</template>

<script>
export default {

  data () {
    return {
        msg:'孙子组件的数据'
    }
  },
  methods: {
    yeye(){
        this.$emit("yeye",this.msg)

    }
  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
