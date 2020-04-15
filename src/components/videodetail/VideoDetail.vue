<template>
  <div class="videodetail">
    <div class="shade" @click="onCloseVideo"></div>
    <video :src="vidoeList[id].src" controls="true" autoplay="true" objectFit="contain"></video>
    <img src="./pro-intro-close.png" alt class="close" @click="onCloseVideo" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      vidoeList: [
        {
          id: 0,
          src: "http://downloads-bim-en.yfway.com/yudezign/kitsun30s.mp4"
        },
        {
          id: 1,
          src: "http://downloads-bim-en.yfway.com/yudezign/wardrobesun30s.mp4"
        }
      ]
    };
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onCloseVideo() {
      this.$emit("onCloseVideo");
    }
  }
};
</script>
<style lang="less" scoped>
.videodetail {
  position: relative;
  .shade {
    position: fixed;
    z-index: 401;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
  }
  video {
    position: fixed;
    z-index: 402;
    top: 50%;
    left: 50%;
    width: 720px;
    height: 400px;
    transform: translate(-50%, -50%);
  }
  .close {
    position: fixed;
    z-index: 402;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: -196px 0 0 370px;
    cursor: pointer;
  }
}
</style>