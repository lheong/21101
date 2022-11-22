<template>
  <div>
    <input type="text" @input="input"> v-model
    {{msg}}
 </div>
</template>

<script>
export default {
    props:{
        value:String,

    },
  data () {
    return {
        msg:''
    }
  },
  methods: {
    input(e){
        this.$emit("input",e.target.value)
        this.msg=e.target.value
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
