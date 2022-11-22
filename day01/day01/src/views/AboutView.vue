<template>
  <div>
    <childa @yeye="yeye" :msg="msg"></childa>
 </div>
</template>

<script>
import childa from "../components/childa.vue"
export default {
  data () {
    return {
      msg:'000000111111111111111111爷爷组件数据'
    }
  },
  methods: {
    yeye(val){
        console.log(val);
      
    }
  },
  created () {

  },
  mounted () {

  },
  components: {
    childa
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>

