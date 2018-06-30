<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="container">

      <div class="doc-title zan-hairline--bottom">BUTTON</div>

      <div class="zan-panel-title">普通按钮</div>
      <div class="zan-panel">
        <div class="zan-btns">
          <button class="zan-btn">取消订单</button>
          <button class="zan-btn zan-btn--primary">确认付款</button>
          <button class="zan-btn zan-btn--danger">确认付款</button>
          <button class="zan-btn zan-btn--warn">确认付款</button>
        </div>
      </div>

      <div class="zan-panel-title">大号按钮，没有边框线及圆角</div>
      <div class="zan-panel">
        <button class="zan-btn zan-btn--large zan-btn--primary">确认付款</button>
        <button class="zan-btn zan-btn--large zan-btn--warn">立即购买</button>
        <button class="zan-btn zan-btn--large zan-btn--danger">立即购买</button>
      </div>

      <div class="zan-panel-title">小号按钮</div>
      <div class="zan-panel" style="padding: 15px;">
        <button class="zan-btn zan-btn--small">取消订单</button>
        <button class="zan-btn zan-btn--small zan-btn--primary">确认付款</button>
      </div>

      <div class="zan-panel-title">迷你按钮</div>
      <div class="zan-panel" style="padding: 15px;">
        <button class="zan-btn zan-btn--mini zan-btn--plain">取消订单</button>
        <button class="zan-btn zan-btn--mini zan-btn--primary zan-btn--plain">确认付款</button>
        <button class="zan-btn zan-btn--mini zan-btn--warn zan-btn--plain">确认付款</button>
        <button class="zan-btn zan-btn--mini zan-btn--danger zan-btn--plain">确认付款</button>
      </div>

      <div class="zan-panel-title">Loading</div>
      <div class="zan-panel">
        <div class="zan-btns">
          <button class="zan-btn zan-btn--loading">取消订单</button>
          <button class="zan-btn zan-btn--loading zan-btn--primary">确认付款</button>
          <button class="zan-btn zan-btn--loading zan-btn--danger">确认付款</button>
          <button class="zan-btn zan-btn--loading zan-btn--warn">确认付款</button>
        </div>
      </div>

      <div class="zan-panel-title">Disabled</div>
      <div class="zan-panel">
        <div class="zan-btns">
          <button class="zan-btn zan-btn--disabled" disabled>取消订单</button>
          <button class="zan-btn zan-btn--disabled zan-btn--primary" disabled>确认付款</button>
          <button class="zan-btn zan-btn--disabled zan-btn--danger" disabled>确认付款</button>
          <button class="zan-btn zan-btn--disabled zan-btn--warn" disabled>确认付款</button>
        </div>
      </div>

    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/index" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/index'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
