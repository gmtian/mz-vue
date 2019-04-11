<template>
  <ul class="nav-bar">
    <li
    v-for="(tab,index) in tabs"
    :key="index"
     >
      <router-link :to="tab.href" active-class="active">
        <i :class="['iconfont', tab.icon]"></i>
        <span>{{ tab.name }}</span>
      </router-link>
    </li>
    <!-- <li class="films">
      <a href="/cinemas.html">
        <i class="iconfont icon-cinemas"></i>
        <span>影院</span>
      </a>
    </li>
    <li class="films">
      <a href="#/films/nowPlaying">
        <i class="iconfont icon-sales"></i>
        <span>特惠</span>
      </a>
    </li>
    <li class="films">
      <a href="/center.html">
        <i class="iconfont icon-center"></i>
        <span>我的</span>
      </a>
    </li> -->
  </ul>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array
        }
    }
}
</script>

<style lang="less">
@import '../styles/common/mixins.less';

.nav-bar {
  .border-1-top;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  z-index: 100;
  background: #fff;
  list-style: none;

  li {
    width: 25%;
    text-align: center;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 49px;
    line-height: 28px;
    position: relative;
    color: #797d82;

    .iconfont {
      font-size: 22px;
    }

    span {
      font-size: 10px;
      line-height: 12px;
      word-break: keep-all;
    }

    &.active {
      color: #ff5f16;
    }
  }
}
</style>