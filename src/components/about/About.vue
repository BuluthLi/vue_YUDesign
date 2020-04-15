<template>
  <div class="index">
    <div class="banner scroll-base scroll-hidden">
      <img src="./about-banner.jpg" alt />
    </div>
    <div class="box">
      <div class="box-item anchor-hook scroll-base scroll-hidden">
        <div class="title" id="aboutus">ABOUT US</div>
        <div
          class="content"
        >In 2007, Yukon Group was founded with the ideals and values of providing impeccable customer service while supplying beautiful, high-end products for residential as well as commercial projects.  We are proud to announce the establishment of a sister-company: Yudezign.  Identical to Yukon regarding vision and values, Yudezign additionally offers vast and versatile custom cabinetry design options. Our US-based manufacturing site is equipped with the most advanced manufacturing equipment and talented professionals utilizing integrated design-to-completion software, ensuring delivery of consistently high quality products.
        </div>
      </div>
      <div class="box-item anchor-hook scroll-base scroll-hidden">
        <div class="title" id="companyadvantage">COMPANY ADVANTAGES</div>
        <div class="content">
          <div class="content-item">
            <img
              src="./icon-about-advantage-1.png"
              width="110"
              height="110"
              alt
              class="hover-rotate"
            />
            <div class="tip">PROUDLY</div>
            <div class="tip" style="margin-top:0px;">MADE IN THE US</div>
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-2.png"
              width="110"
              height="110"
              class="hover-rotate"
              alt
            />
            <div class="tip">PREMIUM</div>
            <div class="tip" style="margin-top:0px;">QUALITY</div>
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-3.png"
              width="110"
              class="hover-rotate"
              height="110"
              alt
            />
            <div class="tip">UNLIMITED</div>
            <div class="tip" style="margin-top:0px;">CUSTOMIZATION</div>
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-4.png"
              width="110"
              height="110"
              class="hover-rotate"
              alt
            />
            <div class="tip">EXTENSIVE</div>
            <div class="tip" style="margin-top:0px;">DESIGN LIBRARY</div>
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-5.png"
              width="110"
              height="110"
              alt
              class="hover-rotate"
            />
            <div class="tip">MOISTURE</div>
            <div class="tip" style="margin-top:0px;">RESISTANT*</div>
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-6.png"
              width="110"
              height="110"
              class="hover-rotate"
              alt
            />
            <div class="tip">FAST 48 HOUR</div>
            <div class="tip" style="margin-top:0px;">INITIAL 3D DESIGN TURN-AROUND</div>
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-7.png"
              width="110"
              class="hover-rotate"
              height="110"
              alt
            />
            <div class="tip">ECO-FRIENDLY</div>
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-8.png"
              width="110"
              height="110"
              class="hover-rotate"
              alt
            />
            <div class="tip">RELIABLE</div>
            <div class="tip" style="margin-top:0px;">
              AND DURABLE
            </div>
          </div>
        </div>
      </div>
      <!-- 发展历程 -->
      <!-- <div class="box-item">
        <div class="special">
          <div class="title">DEVELOPMENT PLAN</div>
          <div class="special-content">
            <img src="./about-development-pic.png" alt />
          </div>
        </div>
      </div>-->
      <!-- 公司新闻 -->
      <!-- <div class="box-item anchor-hook">
        <div class="title" id="companynews">COMPANY NEWS</div>
        <div class="content">
          <div class="swiper-container my-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slide-box">
                  <div class="slide-detail">
                    <div
                      class="title"
                    >Casino Plus Collection. This is how we make 1+1 greater than 2</div>
                    <div class="split-line"></div>
                    <div
                      class="text"
                    >Casino Collection was introduced in 2018 and it was a phenomenal success thanks to its incomparable design and features. At UFS we value our customer’s feedback on our product, and this time we will provide a new feature to our best-selling collection: same great product with underlayment integration</div>
                  </div>
                  <div class="slide-detail">
                    <div
                      class="title"
                    >Casino Plus Collection. This is how we make 1+1 greater than 2</div>
                    <div class="split-line"></div>
                    <div
                      class="text"
                    >Casino Collection was introduced in 2018 and it was a phenomenal success thanks to its incomparable design and features. At UFS we value our customer’s feedback on our product, and this time we will provide a new feature to our best-selling collection: same great product with underlayment integration</div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-box">
                  <div class="slide-detail">
                    <div
                      class="title"
                    >Casino Plus Collection. This is how we make 1+1 greater than 2</div>
                    <div class="split-line"></div>
                    <div
                      class="text"
                    >Casino Collection was introduced in 2018 and it was a phenomenal success thanks to its incomparable design and features. At UFS we value our customer’s feedback on our product, and this time we will provide a new feature to our best-selling collection: same great product with underlayment integration</div>
                  </div>
                  <div class="slide-detail">
                    <div
                      class="title"
                    >Casino Plus Collection. This is how we make 1+1 greater than 2</div>
                    <div class="split-line"></div>
                    <div
                      class="text"
                    >Casino Collection was introduced in 2018 and it was a phenomenal success thanks to its incomparable design and features. At UFS we value our customer’s feedback on our product, and this time we will provide a new feature to our best-selling collection: same great product with underlayment integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev prev">
            <img src="./about-news-left.png" alt />
          </div>
          <div class="swiper-button-next next">
            <img src="./about-news-right.png" alt />
          </div>
        </div> 
      </div>-->
    </div>
    <!-- <InnerPageLink :linkData="linkData"></InnerPageLink> -->
  </div>
</template>
<script>
import Swiper from "swiper";
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
          id: "#companyadvantage",
          name: "COMPANY ADVANTAGE",
          idx: 1
        },
        {
          id: "#message",
          name: "message",
          idx: 2
        }
      ]
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
  mounted: function() {
    this.initSwiper();
  },
  destroyed: function() {},
  methods: {
    initSwiper: function() {
      var mySwiper = new Swiper(".swiper-container.my-swiper", {
        loop: true,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 3000
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  },
  components: {
    InnerPageLink
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
        font-size: 16px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(51, 51, 51, 1);
        line-height: 26px;
        position: relative;
        flex-wrap: wrap;
        .content-item {
          width: 25%;
          text-align: center;
          .tip {
            font-size: 16px;
            font-family: Roboto;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 24px;
            margin-top: 14px;
          }
          .split-line {
            width: 36px;
            height: 4px;
            margin: 14px auto;
            background: rgba(59, 217, 129, 1);
            &.yellow {
              background: rgba(245, 175, 75, 1);
            }
            &.blue {
              background: rgba(28, 169, 232, 1);
            }
          }
          .intro {
            font-size: 14px;
            font-family: Roboto;
            font-weight: 100;
            width: 270px;
            margin: 0 auto;
            color: rgba(153, 153, 153, 1);
            line-height: 21px;
          }
          &:nth-child(n + 5) {
            margin-top: 98px;
          }
        }
      }
      .point-box {
        margin: 70px auto;
        width: 520px;
        display: flex;
        text-align: center;
        .point {
          flex: 1 1 0;
          .num {
            font-size: 42px;
            font-family: Roboto;
            font-weight: 300;
            color: rgba(189, 159, 111, 1);
            line-height: 28px;
          }
          .tip {
            margin-top: 20px;
            font-size: 14px;
            font-family: Roboto;
            font-weight: 100;
            color: rgba(51, 51, 51, 1);
            line-height: 28px;
          }
        }
      }
      .special {
        width: 100%;
        height: 820px;
        position: relative;
        background-image: url("./about-development-bg.jpg");
        background-size: auto 820px;
        background-position: center;
        overflow: hidden;
        margin-top: 100px;
        .title {
          margin-top: 100px;
          font-size: 30px;
          font-family: Roboto;
          font-weight: 100;
          color: rgba(255, 255, 255, 1);
        }
        .special-content {
          width: 751px;
          height: 475px;
          margin: 0 auto;
        }
      }
    }
    .swiper-button-prev {
      right: auto;
      left: -46px;
    }
    .swiper-button-next {
      right: -46px;
      left: auto;
    }
    .my-swiper {
      width: 100%;
      height: 396px;
      .swiper-item {
        width: 100%;
      }

      .next,
      .prev,
      .next img,
      .next img {
        width: 34px;
        height: 56px;
        visibility: visible;
      }
      .slide-box {
        display: flex;
        .slide-detail {
          flex: 1 1 0;
          height: 396px;
          border: 1px solid rgba(235, 235, 235, 1);
          padding: 44px;
          box-sizing: border-box;
          &:last-child {
            margin-left: 36px;
          }
          .title {
            font-size: 18px;
            font-family: Roboto;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 28px;
            margin: 0;
            text-align: left;
          }
          .split-line {
            width: 70px;
            height: 1px;
            margin: 24px 0 24px 0;
            background: rgba(189, 159, 111, 1);
          }
          .text {
            font-size: 14px;
            font-family: Roboto;
            font-weight: 100;
            color: rgba(102, 102, 102, 1);
            line-height: 36px;
          }
        }
      }
    }
  }
}
</style>