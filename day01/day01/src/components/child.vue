<template>
  <div>
    <p>{{msg}}</p>
    <button @click="add">子传父</button>
    <p>
        <button @click="puit">兄弟传值</button>
    </p>
 </div>
</template>

<script>
export default {
    props:{
        msg:String
    },
  data () {
    return {
        list:'123',
        msgg:'兄弟传值' 
    }
  },
  methods: {
    add(){
        this.$emit("add",this.list)
    },
    puit(){
        this.$bus.$emit("db",this.msgg)
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
