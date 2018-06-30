<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ expire }} {{test}}</p>
    <a href="/pages/index/index" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      expire: state => state.member.expire
    }),
    ...mapGetters(['test'])
  },
  mounted () {
    console.log('test', this.test, this.expire)

    this.getProvince({
      testParams: '1'
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    ...mapActions([
      'getProvince'
    ])
  }
}

</script>
<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
