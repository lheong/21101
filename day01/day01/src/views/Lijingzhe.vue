<template>
  <div>
    <pgone></pgone>
    <jonyj></jonyj>
 </div>
</template>

<script>
import pgone from "../components/pgone.vue"
import jonyj from "../components/jonyj.vue"

export default {
  data () {
    return {
        msg:'父组件的数据'
    }
  },
  provide () {
    return {
        msg:'父传递给子'
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  components: {
pgone,
jonyj
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
