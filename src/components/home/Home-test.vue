<template>
  <div class="index">
    <div class="banner">
      <img src="./index_banner_test.jpg" alt />
      <div class="kitchen-box">
        <div class="video-box">
          <img src="./kitchen-designs.jpg" width="100%" alt class="video-cover" />
          <div class="shade" @click="OnIntoVideo(0)"></div>
          <img src="./bofang.png" alt class="icon-play" @click="OnIntoVideo(0)" />
        </div>
        <div class="split split-video"></div>
        <div class="video-intro">KITCHEN DESIGNS</div>
      </div>
      <div class="closet-box">
        <div class="video-box">
          <img src="./closet-designs.jpg" width="100%" alt class="video-cover" />
          <div class="shade" @click="OnIntoVideo(1)"></div>
          <img src="./bofang.png" alt class="icon-play" @click="OnIntoVideo(1)" />
        </div>
        <div class="split split-video"></div>
        <div class="video-intro">CLOSET DESIGNS</div>
      </div>
    </div>
    <div class="box">
      <div class="box-item anchor-hook scroll-base scroll-hidden">
        <div class="title" id="aboutus">ABOUT US</div>
        <div class="content box">
          <div class="left">
            <img src="./home-about-pic.jpg" alt />
          </div>
          <div class="right">
            <div
              class="text"
            >In 2007, Yukon Group was founded with the ideals and values of providing impeccable customer service while supplying beautiful, high-end products for residential as well as commercial projects. We are proud to announce the establishment of a sister-company: Yudezign. Identical to Yukon regarding vision and values, Yudezign additionally offers vast and versatile custom cabinetry design options. Our US-based manufacturing site is equipped with the most advanced manufacturing equipment and talented professionals utilizing integrated design-to-completion software, ensuring delivery of consistently high quality products.</div>
            <div class="btn" @click="onIntoAbout('/about-test')">
              MORE
              >
            </div>
            <a class="btn" href="#message">CONTACT US</a>
          </div>
        </div>
      </div>
      <div class="box-item anchor-hook scroll-base">
        <div class="title" id="vrexperience">VR EXPERIENCE</div>
        <div class="special">
          <div class="vr-box" @click="onIntoVR">
            <img src="./home-quanjigntu.jpg" width="100%" alt class="hover-scale vr-cover" />
            <div class="shade"></div>
            <img src="./360.png" alt class="icon-vr" />
            <div class="vr-btn">Enter the VR</div>
          </div>

          <div class="bg-block"></div>
        </div>
      </div>
    </div>
    <!-- <Apply></Apply> -->
    <!-- <InnerPageLink :linkData="linkData"></InnerPageLink> -->
    <div v-if="showVideo">
      <VideoDetail :id="currentVideo" v-on:onCloseVideo="onCloseVideo"></VideoDetail>
    </div>
  </div>
</template>
<script>
// 访问store的数据放式
/**
 *  放式1：
 * import { mapGetters, mapState, mapMutations } from "vuex";
 * computed:{
      ...mapGetters("user", {
        headerActive: "value"
      }),
      ...mapGetters("user", {
        ceshi: "hai"
      })
 }
   ...mapState({
        headerActive: state => state.value
      }),
*放式2：
methods:{
  add(step){
      // actions异步方式
      this.$store.dispatch("user/acChangeValue",step);
      // mutations同步方式
      this.$store.commit("user/changeValue",step);
    },
}
放式三：
//  使用辅助函数 mapMutations
    ...mapMutations({
      add: "user/add"
    }),
*
*/
import { mapGetters, mapState, mapMutations } from "vuex";
import Apply from "../apply/Apply";
import InnerPageLink from "../innerpagelink/InnerPageLink";
import VideoDetail from "../videodetail/VideoDetail";
export default {
  data() {
    return {
      linkData: [
        {
          id: "#aboutus",
          name: "ABOUT US",
          idx: 0
        },
        {
          id: "#vrexperience",
          name: "VR EXPERIENCE",
          idx: 1
        },
        {
          id: "#superiority",
          name: "SUPERIORITY",
          idx: 2
        },
        {
          id: "#message",
          name: "message",
          idx: 3
        }
      ],
      listHeight: [],
      currentVideo: 0,
      showVideo: false
    };
  },
  computed: {
    width: function() {
      if (window.innerHeight !== undefined) {
        return window.innerWidth;
      } else if (document.compatMode === "CSS1Compat") {
        return document.documentElement.clientWidth;
      } else {
        return document.body.clientWidth;
      }
    }
  },
  mounted: function() {},
  destroyed() {},
  components: {
    Apply,
    InnerPageLink,
    VideoDetail
  },
  methods: {
    onIntoAbout(path) {
      this.$router.push({
        path: path,
        query: {}
      });
    },
    onIntoVR() {
      window.open(
        "http://bimosscdn.yfway.com/project/pano/32762724/index.html"
      );
    },
    OnIntoVideo(id) {
      this.currentVideo = id;
      this.showVideo = true;
    },
    onCloseVideo() {
      this.showVideo = false;
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  .banner {
    width: 100%;
    height: auto;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    .video-cover {
      width: 100%;
      display: block;
      cursor: pointer;
    }
    .icon-play,
    .shade {
      opacity: 0;
      display: none;
      transition: opacity 0.3s ease-in-out;
      cursor: pointer;
    }
    .closet-box {
      position: absolute;
      z-index: 42;
      top: 58.8%;
      left: 24%;
      width: 13.75%;
      height: auto;
    }
    .kitchen-box {
      position: absolute;
      z-index: 42;
      top: 58.8%;
      left: 44%;
      width: 13.75%;
      height: auto;
    }
    .video-box {
      width: 100%;
      height: auto;
      position: relative;
      &:hover {
        .shade {
          position: absolute;
          z-index: 63;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          opacity: 1;
          display: block;
          transition: opacity 0.3s ease-in-out;
        }
        .icon-play {
          position: absolute;
          z-index: 64;
          top: 50%;
          left: 50%;
          width: 52px;
          height: 52px;
          transform: translate(-50%, -50%);
          opacity: 1;
          display: block;
          @media screen and (max-width: 1400px) {
            width: 38px;
            height: 38px;
          }
        }
      }
    }
    .split.split-video {
      width: 50px;
      height: 2px;
      background: rgba(255, 255, 255, 1);
      margin: 20px 0 16px 0;
      @media screen and (max-width: 1400px) {
        margin: 12px 0 8px 0;
      }
    }
    .video-intro {
      font-size: 18px;
      font-family: FZXiaoBiaoSong-B05S;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      @media screen and (max-width: 1400px) {
        font-size: 14px;
      }
    }
  }
  .box {
    .box-item {
      .title {
        margin: 100px auto 50px auto;
        font-size: 30px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(51, 51, 51, 1);
        text-align: center;
      }
      .content {
        display: flex;
        width: 1000px;
        height: auto;
        margin: 0 auto;
        .left {
          flex: 1 1 0;
          img {
            width: 100%;
            height: auto;
          }
        }
        .right {
          margin-left: 24px;
          flex: 1 1 0;
          .text {
            font-size: 13px;
            font-family: Roboto;
            font-weight: 100;
            color: rgba(51, 51, 51, 1);
            line-height: 28px;
          }
          .btn {
            display: inline-block;
            margin-top: 44px;
            margin-right: 22px;
            width: 134px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            vertical-align: middle;
            background: #32b67a;
            font-size: 16px;
            font-family: DIN Light;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            cursor: pointer;
          }
        }
      }
      .special {
        width: 100%;
        height: 518px;
        position: relative;
        .vr-box {
          width: 1000px;
          height: 518px;
          overflow: hidden;
          margin: 0 auto;
          cursor: pointer;
          .vr-cover {
            width: 100%;
            transform-origin: 50% 50%;
            transition: all 0.3s ease-in-out;
          }
          .shade {
            opacity: 0.4;
          }
          .vr-btn {
            opacity: 0;
          }
          &:hover {
            .hover-scale {
              transform: scale(1.1, 1.1);
            }
            .shade {
              position: absolute;
              z-index: 63;
              top: 0;
              left: 50%;
              width: 1000px;
              height: 518px;
              margin-left: -500px;
              background: rgba(0, 0, 0, 0.5);
              opacity: 1;
              transition: opacity 0.3s ease-in-out;
            }
            .icon-vr {
              position: absolute;
              z-index: 64;
              top: 180px;
              left: 50%;
              margin-left: -37.5px;
              width: 93px;
              height: 75px;
            }
            .vr-btn {
              width: 178px;
              height: 47px;
              background: #32b67a;
              position: absolute;
              z-index: 64;
              bottom: 136px;
              left: 50%;
              margin-left: -89px;
              line-height: 47px;
              text-align: center;
              font-size: 18px;
              font-family: Roboto;
              font-weight: 100;
              color: rgba(255, 255, 255, 1);
              opacity: 1;
              transition: opacity 0.5s ease-in-out;
            }
          }
        }
        .bg-block {
          position: absolute;
          bottom: 10px;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 265px;
          background: #f2f2f2;
        }
      }
    }
  }
}
</style>