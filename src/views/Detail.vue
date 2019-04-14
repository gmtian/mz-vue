<template>
  <div>
    <h1>我是详情页</h1>
    <ul>
      <li>影片ID：{{ filmInfo.id }}</li>
      <li>影片名称：{{ filmInfo.name }}</li>
      <li>影片评分：{{ filmInfo.grade }}</li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: "myDetail",
  data() {
    return {
      filmInfo:{}
    }
  },

  // watch: {
  //   "$route"() {
  //     this.getDetailData()
  //   }
  // },

  methods: {
    getDetailData() {
      Axios.get('/json/detail.json').then(res => {
        var data = res.data;
        var tmp = data.find(item => {
          return item.id === parseInt(this.$route.params.id)
        })
        this.filmInfo = tmp;
      })
    }
  },

  created() {
    this.getDetailData()
  },

  beforeRouteEnter (to, from, next) {
    // console.log('当要进去详情的时候触发')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // console.log('当这个组件被复用时触发')
    this.getDetailData()
    next()
  },
  beforeRouteLeave (to, from, next) {
    // console.log('当这个组件离开时触发')
    next();
  }
}
</script>
