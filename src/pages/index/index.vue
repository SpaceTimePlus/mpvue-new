<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="zan-panel-title">普通按钮</div>
    <div class="zan-panel">
      <div class="zan-btns">
        <button class="zan-btn">取消订单</button>
        <button class="zan-btn zan-btn--primary">确认付款</button>
        <button class="zan-btn zan-btn--danger">确认付款</button>
        <button class="zan-btn zan-btn--warn">确认付款</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        motto: 'Hello World',
        userInfo: {}
      }
    },
    components: {},
    methods: {
      log () {
        this.$router.push('../logs/index')
      },
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      }
    },

    created () {
    }
  }
</script>

<style scoped>
</style>
