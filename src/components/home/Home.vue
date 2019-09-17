<template>
  <div class="index">
    <div class="banner">
      <img src="./home-banner1.jpg" alt />
    </div>
    <div class="box">
      <div class="box-item anchor-hook">
        <div class="title" id="aboutus">ABOUT US</div>
        <div class="content box">
          <div class="left">
            <img src="./home-about-pic.jpg" alt />
          </div>
          <div class="right">
            <div
              class="text"
            >Yudezign brand belongs to universal flooring supply company, which was founded in 2007, specializing in customized kitchen, and is a professional service provider of customized kitchen cabinets in the United States. We have the industry's advanced intelligent manufacturing production base, engaged in the overall kitchen cabinets and custom home research and development, design, production, sales of the overall service.</div>
            <div class="btn" @click="onIntoAbout('/about')">
              MORE
              >
            </div>
            <a class="btn" href="#message">CONTACT US</a>
          </div>
        </div>
      </div>
      <div class="box-item anchor-hook">
        <div class="title" id="vrexperience">VR EXPERIENCE</div>
        <div class="special">
          <div class="vr-box">
            <img src="./home-quanjigntu.jpg" width="100%" alt />
            <!-- <iframe
              id="myiframe"
              src="https://pano.yfway.com/32762724"
              width="100%"
              height="100%"
              frameborder="false"
              align="top"
              onload
            >该网站使用了iframe框架技术，但是您的浏览器不支持框架，请升级您的浏览器以便正常访问</iframe>-->
          </div>

          <div class="bg-block"></div>
        </div>
      </div>
      <div class="box-item anchor-hook">
        <div class="title" id="superiority">STANDARD PROCESS</div>
        <div class="content">
          <img src="./home-Superiority-pic.png" alt />
        </div>
      </div>
    </div>
    <Apply></Apply>
    <InnerPageLink :linkData="linkData"></InnerPageLink>
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
      listHeight: []
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
  destroyed() {
  },
  components: {
    Apply,
    InnerPageLink
  },
  methods: {
    onIntoAbout(path) {
      this.$router.push({
        path: path,
        query: {}
      });
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  .banner {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
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
            margin-top: 22px;
            margin-right: 22px;
            width: 134px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            vertical-align: middle;
            background: rgba(189, 159, 111, 1);
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
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
        .bg-block {
          position: absolute;
          bottom: 10px;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 265px;
          background: rgba(189, 159, 111, 1);
        }
      }
    }
  }
}
</style>