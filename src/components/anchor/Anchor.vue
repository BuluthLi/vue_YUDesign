<template>
  <div class="anchor" :style="{bottom:bottom}">
    <a href="#header">
      <div class="top-block">
        <img src="./icon-right-top.png" alt />
        <div class="text">Top</div>
      </div>
    </a>
    <a href="#footer">
      <div class="footer-block" style="font-size:12px;">
        <img src="./icon-right-apply.png" alt />
        <div class="text">CONTACT US</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    bottom: function() {
      if (this.$route.path == "/home") {
        return "300px";
      } else {
        return "120px";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.anchor {
  position: fixed;
  bottom: 400px;
  right: 20px;
  z-index: 301;
  .top-block,
  .footer-block {
    width: 74px;
    height: 74px;
    box-sizing: border-box;
    background: #535353;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin-top: 4px;
    text-align: center;
    line-height: 1.2;
    img {
      display: block;
      width: 100%;
      padding: 0 26px;
    }
    .text {
      margin-top: 10px;
      color: white;
    }
  }
}
</style>