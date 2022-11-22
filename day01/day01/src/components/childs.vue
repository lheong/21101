<template>
  <div>
    {{name}}
 </div>
</template>

<script>
export default {
  data () {
    return {
        name:''
    }
  },
  methods: {

  },
  created () {
    this.$bus.$on("db",(val)=>{
        this.name=val
    })
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
