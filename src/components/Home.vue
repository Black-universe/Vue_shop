<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/Login')
    }
  },
  components: {}
}
</script>

<style scoped lang="less"></style>
