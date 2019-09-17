<template>
  <div class="product">
    <div class="banner">
      <div class="left">
        <img src="./prolist-list-titlebg.png" alt />
        <div class="text">
          Mr. Zhang, with a family of five, has many requirements for
          the kitchen. He likes the dark wood color on the door, dark
          grey color on the countertop. In addition to the most basicrequirements
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </div>
      <div class="swiper-container my-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="img-box">
              <img src="./prolist-list-pro1.jpg" alt class="cover" />
              <img src="./prolist-list-go.png" alt class="detail-img" />
            </div>
            <div class="tip">WINDSOR FRIENDSHIP</div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="./prolist-list-pro2.jpg" alt class="cover" />
              <img src="./prolist-list-go.png" alt class="detail-img" />
            </div>
            <div class="tip">WINDSOR FRIENDSHIP</div>
          </div>
          <div class="swiper-slide">
            <div class="img-box">
              <img src="./prolist-list-pro3.jpg" alt class="cover" />
              <img src="./prolist-list-go.png" alt class="detail-img" />
            </div>
            <div class="tip">WINDSOR FRIENDSHIP</div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="box">
      <div class="box-item anchor-hook" id="newgenerationofcustomizedlifestylekitchen">
        <div class="title">NEW GENERATION OF CUSTOMIZED LIFESTYLE KITCHEN</div>
        <div class="intro">We can customize the kitchen upgrades according to your needs.</div>
        <div class="intro-img">
          <img src="./prolist-2-pic.png" alt />
        </div>
      </div>
      <div class="box-item left-item anchor-hook" id="lshapekitchen">
        <div class="title">L-Shape Kitchen</div>
        <div class="intro">
          <div>Even in small spaces,each cabinet is reasonably arranged</div>
          <div>to maximize the use of each foot of space.</div>
        </div>
        <div class="intro-img">
          <img src="./prolist-fashion-1-bg.jpg" alt />
        </div>
      </div>
      <div class="box-item left-item">
        <div class="title">U-Shape Kitchen</div>
        <div class="intro">
          <div>U-Shape kitchen is more in line with storage requirements and daily operation.</div>
          <div>The design of the bar counter increases the kitchen usage.</div>
        </div>
        <div class="intro-img">
          <img src="./prolist-fashion-3-bg.jpg" alt />
        </div>
      </div>
      <div class="box-item right-item">
        <div class="title">Island Kitchen</div>
        <div
          class="intro"
        >The operation island in the center is the area where family members eat and interact.</div>
        <div class="intro-img">
          <img src="./prolist-fashion-2-bg.jpg" alt />
        </div>
      </div>
      <div class="box-item anchor-hook swiper-item" id="betterproductquality">
        <div class="title">Better Product Quality!</div>
        <div class="intro">There Are More Storage Rck For Selection</div>
        <div class="swiper-container normal-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-1-pic.png')+')'}"
            >
              <div class="cover-block">
                <div class="title">Corner Flying Saucer</div>
                <div class="split-line"></div>
                <div class="intro">
                  Side Pull Basket
                  Stainless Steel Seasoning Basket
                  High Cabinet Linkage Basket
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-2-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">Corner Flying Saucer</div>
                <div class="split-line"></div>
                <div class="intro">
                  Side Pull Basket
                  Stainless Steel Seasoning Basket
                  High Cabinet Linkage Basket
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-3-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">Corner Flying Saucer</div>
                <div class="split-line"></div>
                <div class="intro">
                  Side Pull Basket
                  Stainless Steel Seasoning Basket
                  High Cabinet Linkage Basket
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-1-pic.png')+')'}"
            >
              <div class="cover-block">
                <div class="title">Corner Flying Saucer</div>
                <div class="split-line"></div>
                <div class="intro">
                  Side Pull Basket
                  Stainless Steel Seasoning Basket
                  High Cabinet Linkage Basket
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-2-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">Corner Flying Saucer</div>
                <div class="split-line"></div>
                <div class="intro">
                  Side Pull Basket
                  Stainless Steel Seasoning Basket
                  High Cabinet Linkage Basket
                </div>
              </div>
            </div>
            <div
              class="swiper-slide"
              :style="{backgroundImage:'url('+require('./prolist-chuwu-3-pic.jpg')+')'}"
            >
              <div class="cover-block">
                <div class="title">Corner Flying Saucer</div>
                <div class="split-line"></div>
                <div class="intro">
                  Side Pull Basket
                  Stainless Steel Seasoning Basket
                  High Cabinet Linkage Basket
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-item anchor-hook" id="industyleadingquality">
        <div class="title">Industy-leading Quality</div>
        <div class="intro">Th12 Technologies For Kitchen Cabinet.</div>
        <div class="intro-img">
          <img src="./prolist-12tedian-pic.png" alt />
        </div>
      </div>
    </div>
    <InnerPageLink :linkData="linkData"></InnerPageLink>
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
      mySwiper: null,
      normalSwiper: null
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
      this.mySwiper = new Swiper(".swiper-container.my-swiper", {
        //   小数2.5不可以loop
        loop: true,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 1000
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: 2.5,
        spaceBetween: 56,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
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
    }
  },
  components: {
    InnerPageLink
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
      img {
        width: 100%;
        height: auto;
      }
      .text {
        margin: 60px 0 0 170px;
        width: 310px;
        height: 134px;
        font-size: 14px;
        font-family: Roboto;
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
        top: 460px;
      }

      .swiper-button-next {
        outline: none;
        width: 53px;
        height: 53px;
        background-size: 53px 53px;
        background-image: url(./prolist-list-r.png);
        left: 258px;
        top: 460px;
      }
    }
    .my-swiper {
      flex: 1 1 0;
      .swiper-slide {
        .img-box {
          position: relative;
          .cover {
            width: 100%;
          }
          .detail-img {
            width: 76px;
            height: 76px;
            position: absolute;
            bottom: -20px;
            right: 20px;
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
      .intro {
        font-size: 18px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(102, 102, 102, 1);
        text-align: center;
      }
      .intro-img {
        width: 1000px;
        margin: 60px auto 0 auto;
        img {
          width: 100%;
        }
      }
    }
    .left-item {
      .intro-img {
        width: 1460px;
        margin: 60px auto 0 0;
        img {
          width: 100%;
        }
      }
    }
    .right-item {
      .intro-img {
        width: 1460px;
        margin: 60px 0 0 auto;
        img {
          width: 100%;
        }
      }
    }
    .swiper-item {
      .normal-swiper {
        margin-top: 120px;
        .swiper-slide {
          width: 306px;
          height: 574px;
          background-position: center;
          position: relative;
          .cover-block {
            position: absolute;
            z-index: 101;
            bottom: -345px;
            left: 0;
            width: 306px;
            height: 345px;
            background: #bd9f6f;
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
      top: 96%;
    }

    .swiper-button-next {
      outline: none;
      width: 53px;
      height: 53px;
      background-size: 53px 53px;
      background-image: url(./prolist-list-r.png);
      left: 50%;
      top: 96%;
    }
  }
}
</style>