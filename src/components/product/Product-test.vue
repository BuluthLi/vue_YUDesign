<template>
  <div class="product">
    <div class="banner scroll-base scroll-hidden">
      <div class="left">
        <img src="./prolist-list-titlebg.png" alt />
        <div class="spectial-title">{{vrCoverData[mySwiperActive].title}}</div>
        <div class="text">{{vrCoverData[mySwiperActive].text}}</div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </div>
      <div class="swiper-container my-swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item,index) in vrCoverData"
            :key="index"
            :data-i="index"
          >
            <div class="img-box click-img-box" :data-i="index">
              <div class="cover-box">
                <img :src="item.src" alt class="cover hover-scale" />
              </div>
              <img src="./enter-det.jpg" alt class="detail-img" />
            </div>
            <div class="tip">{{item.title}}</div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="box">
      <!-- <div
        class="box-item anchor-hook scroll-base scroll-hidden"
        id="newgenerationofcustomizedlifestylekitchen"
      >
        <div class="title">INNOVATIVE KITCHEN LOGISTIC IDEA</div>
        <div class="intro">Multi-functioning kitchen arrangements to fit your lifestyle!</div>
        <div class="content">
          <div class="content-item">
            <img
              src="./icon-about-advantage-1.png"
              width="124"
              height="124"
              alt
              class="hover-rotate"
            />
            <div class="tip">Sink Area</div>
            <div class="split-line blue"></div>
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-2.png"
              width="124"
              height="124"
              class="hover-rotate"
              alt
            />
            <div class="tip">Prep Area</div>
            <div class="split-line green"></div>
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-3.png"
              width="124"
              class="hover-rotate"
              height="124"
              alt
            />
            <div class="tip">Cooking Area</div>
            <div class="split-line orange"></div>
          
          </div>
          <div class="content-item">
            <img
              src="./icon-about-advantage-4.png"
              width="124"
              height="124"
              class="hover-rotate"
              alt
            />
            <div class="tip">Storage Area</div>
            <div class="split-line blue"></div>
           
          </div>
        </div>
      </div>-->
      <div class="box-item left-item anchor-hook scroll-base scroll-hidden" id="lshapekitchen">
        <div class="title">L-Shape Kitchen</div>
        <div class="intro">
          <div>Even in small spaces,each cabinet is reasonably arranged to maximize the use of each foot of space.</div>
        </div>
        <!-- <div class="intro-img">
          <img src="./prolist-fashion-1-bg.jpg" alt />
        </div>-->
        <div class="kitchen-box">
          <div class="kitchen-img-box">
            <div class="bg"></div>
            <img
              src="./mainoneL_test.jpg"
              alt
              class="mainone"
              @click="onPreImg('./mainoneL_test.jpg')"
            />
            <img
              src="./maintwoL_test.jpg"
              alt
              class="maintwo"
              @click="onPreImg('./maintwoL_test.jpg')"
            />
            <img
              src="./mainthreeL_test.jpg"
              alt
              class="mainthree"
              @click="onPreImg('./mainthreeL_test.jpg')"
            />
          </div>
          <div class="kitchen-text-box">
            <div class="key">Door Finish</div>
            <div class="points">of TheLayout</div>
            <div
              class="text"
            >Taking people as foremost, pay attention to the comfort while using kitchen. Starting from the operation sequence of washing, cutting and cooking, designer will arrange the countertop reasonably.</div>
          </div>
        </div>
      </div>
      <div class="box-item right-item scroll-base scroll-hidden">
        <div class="title">U-Shape Kitchen</div>
        <div class="intro">
          <div>The U-Shape kitchen appeals directly to customers who would like to utilize countertops and preparation space.In addition to this, it also provides the maximum area for storage purposes.</div>
        </div>
        <div class="kitchen-box">
          <div class="kitchen-text-box">
            <div class="key">Door Finish</div>
            <div class="points">of TheLayout</div>
            <div
              class="text"
            >The use of the open type of bar counter, combining dining area and kitchen, which makes a wider space.</div>
          </div>
          <div class="kitchen-img-box">
            <div class="bg"></div>
            <img
              src="./mainoneU_test.jpg"
              alt
              class="mainone"
              @click="onPreImg('./mainoneU_test.jpg')"
            />
            <img
              src="./maintwoU_test.jpg"
              alt
              class="maintwo"
              @click="onPreImg('./maintwoU_test.jpg')"
            />
            <img
              src="./mainthreeU_test.jpg"
              alt
              class="mainthree"
              @click="onPreImg('./mainthreeU_test.jpg')"
            />
          </div>
        </div>
      </div>
      <div class="box-item left-item scroll-base scroll-hidden">
        <div class="title">Island Kitchen</div>
        <div class="intro">
          <div>By using the U-shaped kitchen design, washing area, preparing area and cooking area form golden triangle operation area.</div>
        </div>
        <div class="kitchen-box">
          <div class="kitchen-img-box">
            <div class="bg"></div>
            <img
              src="./mainoneI_test.jpg"
              alt
              class="mainone"
              @click="onPreImg('./mainoneI_test.jpg')"
            />
            <img
              src="./maintwoI_test.jpg"
              alt
              class="maintwo"
              @click="onPreImg('./maintwoI_test.jpg')"
            />
            <img
              src="./mainthreeI_test.jpg"
              alt
              class="mainthree"
              @click="onPreImg('./mainthreeI_test.jpg')"
            />
          </div>
          <div class="kitchen-text-box">
            <div class="key">Door Finish</div>
            <div class="points">of TheLayout</div>
            <div
              class="text"
            >Taking people as foremost, pay attention to the comfort while using kitchen. Starting from the operation sequence of washing, cutting and cooking, designer will arrange the countertop reasonably.</div>
          </div>
        </div>
      </div>
      <div
        class="box-item anchor-hook swiper-item scroll-base scroll-hidden"
        id="betterproductquality"
      >
        <div class="title">Products INSIDE that make your life easier!</div>
        <div class="intro">Racks for Selection</div>
        <div class="swiper-container normal-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-1-pic.png')+')'}"
            >
              <div class="cover-block">
                <div class="title">Stainless Steel Spice Rack</div>
                <div class="split-line"></div>
                <div
                  class="intro"
                >This conveniently stores condiments and spices as well as frequently used kitchen tools. Perfect for a food preparation area.</div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-2-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">Narrow Storage</div>
                <div class="split-line"></div>
                <div class="intro">Maximize your storage; use every inch.</div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-3-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">Corner Flying Saucer</div>
                <div class="split-line"></div>
                <div
                  class="intro"
                >Efficient use of corner space for storing pots and pans or pantry items.</div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-4-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">Stainless Steel Full Height Pull Out</div>
                <div class="split-line"></div>
                <div class="intro">Organize like a professional.</div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-1-pic.png')+')'}"
            >
              <div class="cover-block">
                <div class="title">Stainless Steel Seasoning Rack</div>
                <div class="split-line"></div>
                <div class="intro">Store the incredients, spoon, scissor, knife and cutting board.</div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-2-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">Side Pull Rack</div>
                <div class="split-line"></div>
                <div class="intro">Store all kinds of condiments.</div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-3-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">Corner Flying Saucer</div>
                <div class="split-line"></div>
                <div
                  class="intro"
                >It is mainly used for storing pots, lid and large bowls and dishes.</div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-4-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">High Cabinet Linkage Rack</div>
                <div class="split-line"></div>
                <div class="intro">Store condiments, dried food and bottled goods.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-item anchor-hook scroll-base scroll-hidden" id="industyleadingquality">
        <div class="title">Industry-Leading Quality</div>
        <div class="intro">The 11 Technologies For Cabinets</div>
        <div class="intro-img">
          <img src="./prolist-12tedian-pic-test.png" alt class="scroll-base" />
        </div>
      </div>
    </div>
    <div class="preimg-block" v-if="showPreImg">
      <div class="shade" @click="onCLosePreImg"></div>
      <div class="img-box" :style="{backgroundImage:'url('+currentUrl+')'}" @click="onCLosePreImg"></div>
    </div>
    <!-- <InnerPageLink :linkData="linkData"></InnerPageLink> -->
    <VR
      :active="active"
      v-on:onCloseVR="onCloseVR"
      v-on:onChangeActive="onChangeActive"
      v-show="showVR"
    ></VR>
  </div>
</template>
<script>
import Swiper from "swiper";
import InnerPageLink from "../innerpagelink/InnerPageLink";
import VR from "../vr/VR";

import pro1 from "./prolist-list-pro1.jpg";
import pro2 from "./prolist-list-pro2.jpg";
import pro3 from "./prolist-list-pro3.jpg";
import pro4 from "./prolist-list-pro4.jpg";
import pro5 from "./prolist-list-pro5.jpg";
import pro6 from "./prolist-list-pro6.jpg";

export default {
  data() {
    return {
      linkData: [
        {
          id: "#newgenerationofcustomizedlifestylekitchen",
          name: "New Generation of Customized Lifestyle Kitchen",
          idx: 0
        },
        {
          id: "#lshapekitchen",
          name: "L-Shape Kitchen",
          idx: 1
        },
        {
          id: "#betterproductquality",
          name: "Better Product Quality",
          idx: 2
        },
        {
          id: "#industyleadingquality",
          name: "Industy-leading Quality",
          idx: 3
        }
      ],
      vrCoverData: [
        {
          src: pro1,
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 100, //id区分不同图片作用
          title: "GEMSTONE",
          text:
            "Polished. Sophisticated. Sleek.  The Gemstone collection of finishes gives a high gloss finish to your cabinetry. Perfect for those who seek a modern, uncluttered, minimalist vibe for their home or office. The stark colors of the cabinets allow for dramatic splashes of color for those rare pieces of art you want noticed."
        },
        {
          src: pro2,
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          title: "HERITAGE",
          id: 200,
          text:
            "Bring the feel of Colonial Williamsburg into your home with this color collection. Heritage colors are classics that never go out of style. This palette also works well for a coastal feel: light and airy, you can almost smell the sea salt in the air."
        },
        {
          src: pro3,
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 300,
          title: "ALASKA",
          text:
            "White. This timeless color can be used for almost all styles. It creates a blank palette that works well with any metal hardware.  In a kitchen, whether you want a classic, traditional style or a severe, contemporary look – you can’t go wrong with white.  Used in a bath or any other room, you can soften it with pastels or neutrals or add shock value with jewel and neon colors."
        },
        {
          src: pro4,
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 400,
          title: "EXOTIC",
          text:
            "The deep, rich tones of the Exotic collection make a bold statement. Mix the vertical and horizontal pattern of the finish to add depth and interest to your room.  This collection works well with either cool or warm tones, bringing a totally different feel to the room. Lend a sense of adventure to your home or office with the Exotic Collection."
        },
        {
          src: pro5,
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 500,
          title: "FARMHOUSE",
          text:
            "People have gone crazy over the farmhouse look!  Perhaps it is the desire to bring the feel of open land and sunshine into our homes while living in the hustle and bustle of city life.  The Farmhouse Collection offers a textured, weathered wood finish to your cabinetry.  Mix classic, contemporary, transitional styles with farmhouse cabinetry to give your home a casual feel.  Dress this style up or down to create a feel that makes you happy."
        },
        {
          src: pro6,
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 600,
          title: "UPTOWN",
          text:
            "Linen.  A beautiful, natural fabric – that wrinkles like crazy.  Uptown gives you the opportunity to bring a linen look into your home; without the wrinkles.  Pair this interesting pattern with rich colored walls and – dare I say it? - crisp linen draperies, for a dramatic yet airy effect.  Understated, yet elegant and quite unique."
        }
      ],

      showVR: false,
      mySwiper: null,
      mySwiperActive: 0,
      normalSwiper: null,
      active: 0,
      detailActive: 0,
      imgActive: 0,
      currentUrl: "",
      showPreImg: false
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResizeChagne);
    this.$nextTick(() => {
      this.initSwiper();
      this.initNormalSwiper();
    });
  },
  methods: {
    initSwiper: function() {
      let _this = this;
      _this.mySwiper = new Swiper(".swiper-container.my-swiper", {
        //   小数2.5不可以loop,循环的又slide点击事件不生效（插件自动复制的slide上的事件不生效）
        loop: true,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 1000
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: 2,
        spaceBetween: 60,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        on: {
          slideChangeTransitionEnd: function() {
            let count = (this.activeIndex % _this.vrCoverData.length) - 2;
            if (count < 0) {
              count = count + _this.vrCoverData.length;
            }
            _this.mySwiperActive = count;
          }
        }
      });
      let target = document.getElementsByClassName("click-img-box");
      for (let i = 0; i < target.length; i++) {
        let active = parseInt(target[i].getAttribute("data-i"), 10);
        target[i].addEventListener("click", () => {
          this.onShowVR(active);
        });
      }
    },
    initNormalSwiper: function() {
      this.normalSwiper = new Swiper(".swiper-container.normal-swiper", {
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 1000
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        loopAdditionalSlides: 2,
        loopedSlides: 9
      });
      let target = document.getElementsByClassName("normal-swiper")[0];
      target.addEventListener("mouseover", () => {
        this.normalSwiper.autoplay.stop();
      });
      target.addEventListener("mouseleave", () => {
        this.normalSwiper.autoplay.start();
      });
    },
    onResizeChagne() {
      if (this.mySwiper) {
        this.mySwiper.update();
      } else {
        this.initSwiper();
      }
      if (this.normalSwiper) {
        this.normalSwiper.update();
      } else {
        this.initNormalSwiper();
      }
    },
    onShowVR: function(active) {
      // console.log(active);
      this.active = active;
      this.showVR = true;
    },
    onCloseVR: function() {
      this.showVR = false;
    },
    onChangeActive: function(val) {
      this.active = val;
    },
    onPreImg(src) {
      let url = require("" + src);
      this.showPreImg = true;
      this.currentUrl = url;
    },
    onCLosePreImg() {
      this.showPreImg = false;
    }
  },
  components: {
    InnerPageLink,
    VR
  }
};
</script>
<style lang="less" scoped>
.product {
  .banner {
    width: 100%;
    height: auto;
    display: flex;
    background: #f7f7f5;
    padding: 108px 0 146px 0;
    position: relative;
    .left {
      width: 580px;
      position: relative;
      .spectial-title {
        font-size: 42px;
        font-family: Roboto;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        margin: -46px 0 0 170px;
      }
      img {
        width: 221%;
        height: auto;
      }
      .text {
        margin: 40px 0 0 170px;
        width: 310px;
        height: 134px;
        font-size: 14px;
        font-family: "Arial";
        font-weight: 100;
        color: rgba(51, 51, 51, 1);
        line-height: 24px;
      }
      .swiper-button-prev {
        outline: none;
        width: 53px;
        height: 53px;
        background-size: 53px 53px;
        background-image: url(./prolist-list-l.png);
        left: 189px;
        top: 520px;
      }

      .swiper-button-next {
        outline: none;
        width: 53px;
        height: 53px;
        background-size: 53px 53px;
        background-image: url(./prolist-list-r.png);
        left: 288px;
        top: 520px;
      }
    }
    .my-swiper {
      flex: 1 1 0;
      @media screen and (min-width: 1400px) {
        margin-left: 120px;
      }
      .swiper-slide {
        .img-box {
          position: relative;
          cursor: pointer;
          .cover-box {
            overflow: hidden;
            .cover {
              width: 100%;
            }
          }
          .detail-img {
            width: 76px;
            height: 76px;
            position: absolute;
            bottom: -20px;
            right: 20px;
            cursor: pointer;
          }
        }
        .tip {
          margin-top: 50px;
          font-size: 26px;
          font-family: Roboto;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
      }
    }
    .swiper-pagination {
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      outline: none;
      border: 0px;
    }
  }
  .box {
    .box-item {
      .title {
        margin: 120px auto 40px auto;
        width: 1000px;
        text-align: center;
        font-size: 34px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(51, 51, 51, 1);
      }
      .content {
        display: flex;
        width: 1000px;
        height: auto;
        margin: 70px auto 0 auto;
        font-size: 16px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(51, 51, 51, 1);
        line-height: 26px;
        position: relative;
        .content-item {
          flex: 1 1 0;
          text-align: center;
          .tip {
            font-size: 16px;
            font-family: Roboto;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 28px;
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
            &.orange {
              background: #f26a57;
            }
          }
          .intro {
            font-size: 14px;
            font-family: Roboto;
            font-weight: 100;
            width: 200px;
            margin: 0 auto;
            color: rgba(153, 153, 153, 1);
            line-height: 21px;
          }
        }
      }
      .intro {
        font-size: 18px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(102, 102, 102, 1);
        text-align: center;
        width: 1000px;
        margin: 0 auto;
        div {
          width: 600px;
          text-align: left;
          margin: 0 auto;
        }
      }
      .intro-img {
        width: 983px;
        margin: 60px auto 0 auto;
        img {
          width: 100%;
        }
      }
    }
    .left-item {
      .intro-img {
        width: 100%;
        margin: 60px auto 0 0;
        img {
          width: 100%;
        }
      }
      .kitchen-box {
        width: 100%;
        height: 527px;
        margin: 60px auto 0 0;
        display: flex;
        align-items: center;
        .kitchen-text-box {
          width: 272px;
          font-size: 18px;
          font-family: Roboto;
          font-weight: 100;
          color: rgba(96, 96, 96, 1);
          line-height: 32px;
          margin-left: 47px;
          margin-right: 24%;
          .key {
            font-size: 36px;
            font-family: Roboto;
            font-weight: 400;
            line-height: 48px;
            color: rgba(51, 51, 51, 1);
          }
          .points {
            line-height: 48px;
            font-size: 28px;
            font-family: Roboto;
            color: #606060;
            text-decoration: underline;
          }
          .text {
            margin-top: 20px;
          }
        }
        .kitchen-img-box {
          width: 60%;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          img {
            cursor: pointer;
          }
          .bg {
            width: 100%;
            height: 300px;
            @media screen and (max-width: 1400px) {
              height: 200px;
            }
            background: #32b67a;
            opacity: 0.6;
          }
          .mainone {
            width: 54%;
            height: auto;
            position: absolute;
            z-index: 5;
            right: 0;
          }
          .maintwo {
            width: 24%;
            height: auto;
            position: absolute;
            z-index: 6;
            bottom: -70px;
            @media screen and (max-width: 1400px) {
              bottom: 40px;
            }
            right: 42%;
          }
          .mainthree {
            width: 24%;
            height: auto;
            position: absolute;
            z-index: 6;
            bottom: -70px;
            @media screen and (max-width: 1400px) {
              bottom: 40px;
            }
            right: 12%;
          }
        }
      }
    }
    .right-item {
      .intro-img {
        width: 100%;
        margin: 60px 0 0 auto;
        img {
          width: 100%;
        }
      }
      .kitchen-box {
        width: 100%;
        height: 527px;
        margin: 60px auto 0 0;
        display: flex;
        align-items: center;
        .kitchen-text-box {
          width: 272px;
          font-size: 18px;
          font-family: Roboto;
          font-weight: 100;
          color: rgba(96, 96, 96, 1);
          line-height: 32px;
          margin-right: 47px;
          margin-left: 24%;
          .key {
            font-size: 36px;
            font-family: Roboto;
            font-weight: 400;
            line-height: 48px;
            color: rgba(51, 51, 51, 1);
          }
          .points {
            line-height: 48px;
            font-size: 28px;
            font-family: Roboto;
            color: #606060;
            text-decoration: underline;
          }
        }
        .kitchen-img-box {
          width: 60%;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          img {
            cursor: pointer;
          }
          .bg {
            width: 100%;
            height: 300px;
            @media screen and (max-width: 1400px) {
              height: 200px;
            }
            background: #32b67a;
            opacity: 0.6;
          }
          .mainone {
            width: 54%;
            height: auto;
            position: absolute;
            z-index: 5;
            left: 0;
          }
          .maintwo {
            width: 24%;
            height: auto;
            position: absolute;
            z-index: 6;
            bottom: -70px;
            @media screen and (max-width: 1400px) {
              bottom: 40px;
            }
            left: 12%;
          }
          .mainthree {
            width: 24%;
            height: auto;
            position: absolute;
            z-index: 6;
            bottom: -70px;
            @media screen and (max-width: 1400px) {
              bottom: 40px;
            }
            left: 42%;
          }
        }
      }
    }
    .swiper-item {
      .normal-swiper {
        margin-top: 120px;
        .swiper-slide {
          width: 306px;
          height: 524px;
          background-position: center;
          position: relative;
          background-repeat: no-repeat;
          background-size: contain;
          .cover-block {
            position: absolute;
            z-index: 101;
            bottom: -265px;
            left: 0;
            width: 306px;
            height: 265px;
            background: #32b67a;
            padding: 44px 24px 0 24px;
            .title {
              font-size: 20px;
              font-family: Roboto;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              margin: 0;
              width: 100%;
              text-align: left;
            }
            .split-line {
              width: 58px;
              height: 2px;
              background: rgba(255, 255, 255, 1);
              margin: 20px 0;
            }
            .intro {
              font-size: 14px;
              font-family: Roboto;
              font-weight: 100;
              width: 100%;
              color: rgba(255, 255, 255, 1);
              text-align: left;
            }
          }
          &:hover {
            .cover-block {
              animation: move 0.5s ease-in-out;
              animation-fill-mode: forwards;
            }
          }
        }
      }
    }
  }
  .preimg-block {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 398;
    .shade {
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.8);
      z-index: 398;
    }
    .img-box {
      width: 70%;
      height: 70%;
      z-index: 399;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
@keyframes move {
  0% {
    position: absolute;
    z-index: 101;
    bottom: -345px;
    left: 0;
  }
  100% {
    position: absolute;
    z-index: 101;
    bottom: 0;
    left: 0;
  }
}
@media screen and (max-width: 1400px) {
  .product .banner .left {
    .swiper-button-prev {
      outline: none;
      width: 53px;
      height: 53px;
      background-size: 53px 53px;
      background-image: url(./prolist-list-l.png);
      left: 35%;
      top: 88%;
    }

    .swiper-button-next {
      outline: none;
      width: 53px;
      height: 53px;
      background-size: 53px 53px;
      background-image: url(./prolist-list-r.png);
      left: 50%;
      top: 88%;
    }
  }
}
</style>