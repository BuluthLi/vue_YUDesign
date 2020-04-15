<template>
  <div class="vr">
    <div class="shade" @click="onCloseVR"></div>
    <div class="swiper-container vr-swiper swiper-no-swiping">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in vrData" :key="index">
          <div class="left">
            <img :src="vrData[currentActive].detailList[detailActive].imgList[imgActive].src" alt />
            <div class="img-list">
              <div
                class="img-item"
                v-for="(innerItemL,innerIndexL) in vrData[currentActive].detailList[detailActive].imgList"
                :key="innerIndexL"
                :style="{backgroundImage:'url('+innerItemL.src+')'}"
                :class="imgActive==innerIndexL?'img-item-active':''"
                @click="onChangeImg(innerIndexL)"
              ></div>
            </div>
          </div>
          <div class="right" :style="{backgroundImage:'url('+rightBg+')'}">
            <div class="title">{{vrData[currentActive].title}}</div>
            <div class="split-line black-gold"></div>
            <div class="intro-block">
              <div class="intro-left">
                <div class="item-name">Door Finish</div>
                <div class="cover-list">
                  <div
                    class="cover-item"
                    v-for="(innerItemR,innerIndexR) in vrData[currentActive].detailList"
                    :key="innerIndexR"
                    :class="detailActive==innerIndexR?'cover-item-active':''"
                    @click="onChangeDetail(innerIndexR)"
                  >
                    <div class="cover" :style="{backgroundImage:'url('+innerItemR.src+')'}"></div>
                    <div class="name">{{innerItemR.title}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-name item-name-description">Description</div>
            <div
              class="text"
            >Mr. Zhang, with a family of five, has many requirements for thekitchen. He likes the dark wood color on the door, dark grey color on the countertop. In addition to the most basic require-ments of a reasonable layout, color matching, he hopes that the kitchen can have more storage functions. he hopes that the kitchen can have more storage functions.</div>
            <!-- 暂时隐藏vr按钮 -->
            <!-- <div class="btn" @click.stop="onOpenVR(item.vrUrl)">→ VR PANORAMA</div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev vr-prev"></div>
    <div class="swiper-button-next vr-next"></div>
    <div class="close" @click="onCloseVR">
      <img src="./pro-intro-close.png" alt />
    </div>
  </div>
</template>
<script>
import rightBg from "./right-bg.jpg";
import Swiper from "swiper";
export default {
  data() {
    return {
      vrSwiper: null,
      detailActive: 0,
      imgActive: 0,
      currentActive: 0,
      rightBg: rightBg
    };
  },
  props: {
    vrData: {
      type: Array,
      default: []
    },
    active: {
      type: Number,
      default: 0
    }
  },
  watch: {
    //监测对象类型
    vrData: {
      handler: function(val, oldval) {
        console.log(val, oldval);
      },
      deep: true //对象内部的属性监听，也叫深度监听
    },
    active(val, oldval) {
      console.log(val);
    }
  },
  mounted() {
    this.currentActive = this.active;
    this.$nextTick(() => {
      this.initSwiper();
    });
  },
  methods: {
    initSwiper() {
      let _this = this;
      _this.vrSwiper = new Swiper(".swiper-container.vr-swiper", {
        //   小数2.5不可以loop
        // loop: true,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 1000
        // },
        navigation: {
          nextEl: ".vr-next",
          prevEl: ".vr-prev"
        },
        on: {
          transitionEnd: function() {
            let active = _this.vrSwiper.activeIndex;
            _this.currentActive = active;
            _this.detailActive = 0;
            _this.imgActive = 0;
          }
        }
      });
      // console.log(this.currentActive);
      // this.vrSwiper.slideTo(this.currentActive, 500, false); //切换到第一个slide，速度为1秒
    },
    onOpenVR: function(url) {
      console.log(url);
      window.open(url);
    },
    onCloseVR: function() {
      this.$emit("onCloseVR");
    },
    //改变材料
    onChangeDetail(index) {
      this.detailActive = index;
      this.imgActive = 0;
    },
    //改变图片
    onChangeImg(index) {
      this.imgActive = index;
    }
  }
};
</script>
<style lang="less" scoped>
.vr {
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
  .vr-swiper {
    position: fixed;
    z-index: 402;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13.5rem;
    height: 8.1rem;
    .swiper-slide {
      display: flex;
      .left {
        display: inline-block;
        width: 10.3rem;
        height: 8.1rem;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .img-list {
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 1.1rem;
          text-align: center;
          .img-item {
            height: 0.9rem;
            width: 0.9rem;
            margin: 0.1rem 0.05rem;
            background-size: cover;
            display: inline-block;
            box-sizing: border-box;
            cursor: pointer;
            &.img-item-active {
              border: 2px solid #32b67a;
            }
          }
        }
      }
      .right {
        display: inline-block;
        width: 4.2rem;
        padding: 0 0.3rem;
        box-sizing: border-box;
        background: white;
        position: relative;
        background-size: 4.09rem 1.23rem;
        background-position: 0rem 10%;
        background-repeat: no-repeat;
        .title {
          margin-top: 1.18rem;
          font-size: 0.28rem;
          font-family: Roboto;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          white-space: nowrap;
          @media screen and (max-width: 1400px) {
            font-size: 0.24rem;
            margin-top: 0.4rem;
          }
        }
        .split-line {
          width: 1.24rem;
          height: 3px;
          background: #32b67a;
          margin: 0.3rem 0 0.6rem 0;
          @media screen and (max-width: 1400px) {
            margin: 0.1rem 0 0.2rem 0;
          }
        }
        .intro-block {
          display: flex;
          .intro-left {
            width: 100%;
            .cover-list {
              margin-bottom: 0.2rem;
              .cover-item {
                width: 1.1rem;
                height: 1.4rem;
                box-sizing: border-box;
                padding-top: 0.14rem;
                display: inline-block;
                margin-top: 0.2rem;
                vertical-align: top;
                cursor: pointer;
                .cover {
                  border-radius: 50%;
                  width: 0.66rem;
                  height: 0.66rem;
                  background-size: cover;
                  margin: 0 auto;
                }
                .name {
                  text-align: center;
                  font-size: 0.14rem;
                  font-family: Roboto;
                  font-weight: 400;
                  color: rgba(51, 51, 51, 1);
                  margin: 0.06rem auto 0 auto;
                  width: 0.9rem;
                }
                &.cover-item-active {
                  background: rgba(255, 255, 255, 1);
                  box-shadow: 0px 10px 24px 0px rgba(97, 97, 97, 0.28);
                  border-bottom: 2px solid rgba(50, 182, 122, 1);
                }
              }
            }
            .intro-img {
              width: 1.2rem;
              height: 100%;
            }
          }
        }
        .item-name-description {
          margin-top: 0.6rem;
          @media screen and (max-width: 1400px) {
            margin-top: 0.2rem;
          }
        }
        .text {
          font-size: 14px;
          font-family: Roboto;
          font-weight: 300;
          color: rgba(51, 51, 51, 1);
          line-height: 22px;
          margin-top: 0.2rem;
          word-break: break-all;
          @media screen and (max-width: 1400px) {
            margin-top: 0.2rem;
            line-height: 20px;
            font-size: 12px;
          }
        }
        .btn {
          position: absolute;
          bottom: 0;
          width: 105%;
          padding: 36px 100px;
          background: #32b67a;
          left: -5%;
          font-size: 22px;
          font-family: Roboto;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
          text-align: center;
          cursor: pointer;
          @media screen and (max-width: 1400px) {
            font-size: 14px;

            line-height: 20px;
          }
        }
      }
    }
  }
  .close {
    position: fixed;
    z-index: 402;
    right: 10%;
    top: 18%;
    left: 94%;
    top: 10%;
    width: 18px;
    height: 18px;
    cursor: pointer;
    img {
      width: 100%;
    }
    @media screen and (max-width: 1400px) {
      right: 10%;
      top: 21%;
    }
  }
  .vr-prev {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-image: url("./pro-intro-pre.png");
    background-size: 56px 56px;
    position: fixed;
    z-index: 402;
    top: 50%;
    left: 2%;
    outline: none;
    border: transparent;
  }
  .vr-next {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-image: url("./pro-intro-next.png");
    background-size: 56px 56px;
    position: fixed;
    z-index: 402;
    top: 50%;
    left: 94%;
    outline: none;
    border: transparent;
  }
}
</style>