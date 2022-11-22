<template>
  <div>
    <jonyj></jonyj>
 </div>
</template>

<script>
import jonyj from "../components/jonyj.vue"
export default {
  data () {
    return {
        msg:'父组件数据',
        
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {
    console.log(this.$children[0].msgd);
  },
  components: {
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
