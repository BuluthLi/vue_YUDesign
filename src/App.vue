<template>
  <div id="app">
    <Header></Header>
    <div class="review-content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <Footer></Footer>
    <Anchor></Anchor>
  </div>
</template>
<script>
import Footer from "./components/footer/Footer.vue";
import Header from "./components/header/Header.vue";
import Anchor from "./components/anchor/Anchor.vue";
export default {
  name: "App",
  created: function() {
    let isMobile = "ontouchstart" in document;
    if (isMobile) {
      this.$Message.warning({
        top: 50,
        duration: 2,
        content: "用电脑体验更佳!"
      });
    }
  },
  components: {
    Footer,
    Header,
    Anchor
  }
};
</script>

<style lang="less">
#app {
  font-family: "Roboto-Thin", "Avenir", Helvetica, Arial, sans-serif;
  color: #333333;
  font-size: 14px;
  .review-content {
    // min-height: 800px;
  }
}
/* iview默认样式修改 */
.ivu-input.ivu-input-default {
  height: 24px;
}

.ivu-input:focus,
.ivu-input:hover,
.ivu-btn:hover {
  box-shadow: none;
  border: 1px solid #dcdee2;
  outline: 0;
}
.ivu-input.ivu-input-small {
  height: 40px;
}

.swiper-pagination .swiper-pagination-bullet {
  width: 34px;
  height: 6px;
  display: inline-block;
  background: #9e9e9e;
  border-radius: 0;
  margin: 0 10px;
  border: 0;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 68px;
  background: #2e2e2e;
  border: transparent;
  outline: none;
}
.hover-scale {
  transform-origin: 50% 50%;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2, 1.2);
  }
}
.hover-rotate {
  transform-origin: 50% 50%;
  transition: all 1s ease;
  &:hover {
    transform: rotate3d(0, 1, 0, 360deg);
  }
}
.scroll-base {
  transition: all 0.8s;
}
.scroll-hidden {
  opacity: 0 !important;
  transform: translateY(50px);
}
.scroll-visible {
  opacity: 1;
  transform: translateY(0);
}
.ivu-input-wrapper {
  display: inline-block;
  width: 100%;
  position: relative;
  vertical-align: middle;
  line-height: normal;
}
</style>
