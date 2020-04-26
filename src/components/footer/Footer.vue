<template>
  <div class="footer scroll-base scroll-hidden" id="footer">
    <div class="map-box">
      <div id="map" v-show="showMap"></div>
      <div class="map-intro">
        <div
          class="intro-item"
          v-for="(item,index) in locations"
          :key="index"
          @click="changeLocation(index)"
          @mouseenter="onSetHover(index)"
          @mouseleave="onCancelHover(index)"
          :class="(currentIndex==index)?'active':''"
        >
          <div v-show="currentIndex!=index">
            <img :src="(hoverIndex==index)?white:gray" alt width="12" height="16" />
            <span class="map-text">{{item.shop_name}}</span>
          </div>
          <div v-show="currentIndex==index">
            <div class="location">
              <img :src="white" class="icon-add" alt />
              <span>{{item.shop_name}}</span>
            </div>
            <div class="split-line"></div>
            <div class="full-address">{{item.address}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-box anchor-hook">
      <div class="message-box">
        <img
          src="./message.png"
          alt
          width="48"
          height="48"
          style="display:inline-block;vertical-align:top;margin-top: 8px;"
        />
        <div style="display:inline-block;margin-left:10px;vertical-align:top;">
          <div class="title" id="message">INTERESTED? CONTACT US</div>
          <div class="tip">
            <p>Tip: in order to ensure the effectiveness of communication, please fill out the full name and contact information</p>
          </div>
        </div>
        <div class="split-line"></div>
        <form>
          <div class="input-box">
            <div style="display:flex;justify-content:space-between;">
              <div class="input-item" style="display:inline-flex;">
                <span>Name:</span>
                <Input
                  v-model="name"
                  type="text"
                  placeholder="name(Required Field)"
                  style="width:100%;"
                />
              </div>
              <div class="input-item" style="margin:0 72px;display:inline-flex;">
                <span>Phone:</span>
                <Input
                  v-model="phone"
                  type="text"
                  placeholder="phone(Required Field)"
                  style="width:100%;"
                />
              </div>
              <div class="input-item" style="display:inline-flex;">
                <span>Email:</span>
                <Input v-model="mailbox" placeholder="Mailbox" type="text" style="width:100%;" />
              </div>
            </div>
            <div class="input-item content" style="width:100%;">
              <p style="margin:30px 0 12px 0 ;">Content:</p>
              <Input
                v-model="content"
                type="textarea"
                :autosize="{minRows: 5,maxRows: 7}"
                :maxlength="350"
                placeholder="Enter something..."
                style="width:100%"
              />
            </div>
            <!-- <div class="security">
              <img :src="securityImg" alt @click="onChangeSecurity" />
              <span>By using this form you agree with the storage and handling of your data by this Yudezign.</span>
            </div>-->
            <Button class="submit-btn" @click="onSubmit">SUBMIT</Button>
          </div>
        </form>
      </div>
    </div>
    <div class="footer-box">
      <div class="footer-content">
        <div class="link-item">
          <div class="title">
            <img src="./foot_logo.jpg" alt class="logo" />
          </div>
          <p
            class="text"
          >Yudezign is a professional service provider of customized kitchen cabinets in the United States. We provide dealer support from design consultation, production to installation instructions</p>
        </div>
        <div class="link-item">
          <div class="title">
            <p>CONTACT US</p>
          </div>
          <p class="text">
            <img src="./icon-floor-tel.png" width="14" height="14" alt />
            <span>1-281-208-0000</span>
          </p>
          <p class="text">
            <img src="./icon-floor-mail.png" width="16" height="12" alt />
            <a href="mailto:orders@yudezign.com" style="color:#222;">orders@yudezign.com</a>
          </p>
          <p class="text">
            <img src="./icon-floor-add.png" width="12" height="16" alt />
            <span>13246 Murphy Road, Suite 400 Stafford, TX 77477</span>
          </p>
        </div>
        <div class="link-item">
          <div class="title">
            <p>USEFUL LINKS</p>
          </div>
          <p class="text">About our company</p>
          <p class="text">Contact us</p>
          <p class="text">FAQ</p>
          <p class="text">Support</p>
          <p class="text">Blog</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import get from "./get.png";
import no from "./no.png";
import add from "./add-flag.png";
import white from "./location-white.png";
import gray from "./location-gray.png";
export default {
  data() {
    return {
      // 提交个人信息
      name: "",
      phone: "",
      mailbox: "",
      address: "",
      content: "",
      addressSwiper: null,
      security: 1,
      // 地图相关数据
      showMap: true,
      locations: [],
      map: null,
      markers: [],

      // 效果相关
      hoverIndex: -1,
      currentIndex: 0,
      gray: gray,
      white: white
    };
  },
  computed: {
    securityImg() {
      return this.security == 1 ? get : no;
    }
  },
  created() {
    // var mapJS = document.createElement("script");
    // mapJS.setAttribute("type", "text/javascript");
    // var len = document.getElementsByTagName("head").length;
    // const headEle = document.getElementsByTagName("head")[len - 1];
    // mapJS.src =
    //   "https://maps.googleapis.com/maps/api/js?key=AIzaSyD0ozzDLpblYqEVGUhL5BUmNgXYOMaprJU&callback=initMap";
    // headEle.appendChild(mapJS);
  },
  mounted: function() {
    window.addEventListener("resize", this.onResizeChagne);
    this.initAddressSwiper();
    setTimeout(this.initMap, 2000);
    // this.initMap();
  },
  methods: {
    // 此处使用在axios人为扩展的jsonp方式，进行数据请求
    onSubmit: function() {
      let name = this.name.trim();
      let phone = this.phone.trim();
      let mailbox = this.mailbox.trim();
      let address = this.address.trim();
      let content = this.content.trim();
      if (!phone || !name) {
        this.$Notice.error({
          title: "Notice Error",
          desc: "Please enter the correct information"
        });
        return;
      }
      let params = {
        name: name,
        phone: phone,
        email: mailbox,
        address: address,
        content: content
      };
      this.$http
        .jsonp("http://admin.yudezign.com/contactUs", params)
        .then(res => {
          let data = res;
          if (typeof data == "string") {
            data = JSON.parse(data);
          }
          if (data.status == 1) {
            this.$Notice.success({
              title: data.msg || "Notice Success",
              desc: "Submit Successfully!"
            });
          } else {
            this.$Notice.success({
              title: "Notice Error",
              desc: "Please enter the correct information"
            });
          }
        });
    },
    // 谷歌地图初始化
    initMap() {
      let _this = this;
      try {
        _this.map = new google.maps.Map(document.getElementById("map"), {
          center: new google.maps.LatLng(29.6303338, -95.5675904),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoom: 10,
          gestureHandling: "greedy"
        });
        let params = {};
        _this.$http
          .get("http://admin.yudezign.com/index.php/shopAddress", params)
          .then(res => {
            console.log(res.data.data);
            if (res.data.status == 1) {
              _this.locations = res.data.data;
              _this.changeLocation(0);
            }
          });
      } catch (e) {
        console.log("google map is display none");
        this.showMap = false;
      }
    },
    // 改变地图位置
    changeLocation(index) {
      let _this = this;
      _this.currentIndex = index;
      this.$Message.config({
        top: 50,
        duration: 2
      });
      this.$Message.info("Position switching, please  wait for a moment");
      var image = {
        // 最好先import
        url: add,
        scaledSize: new google.maps.Size(22, 32)
      };
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { address: _this.locations[index].address },
        (results, status) => {
          console.log(results, status, results[0].geometry.location);
          if (status === "OK") {
            _this.setMapOnAll(null);
            _this.markers = [];
            var marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: _this.map,
              title: _this.locations[index].shop_name,
              icon: image,
              animation: google.maps.Animation.DROP
            });
            _this.markers.push(marker);
            _this.map.setCenter(results[0].geometry.location);
            marker.addListener("click", function() {
              _this.map.setZoom(10);
              _this.map.setCenter(marker.getPosition());
            });
          } else {
            alert(
              "Geocode Maps was not successful for the following reason: " +
                status
            );
          }
        }
      );
    },
    setMapOnAll(map) {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    },

    onChangeSecurity() {
      this.security = !this.security;
    },
    initAddressSwiper: function() {
      this.addressSwiper = new Swiper(".swiper-container.address-swiper", {
        loop: true,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 2000
        // },
        noSwiping: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: ".swiper-button-next.address-next",
          prevEl: ".swiper-button-prev.address-prev"
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true
      });
    },
    onResizeChagne() {
      if (this.mySwiper) {
        this.addressSwiper.update();
      } else {
        this.initAddressSwiper();
      }
    },
    // 达成某些效果的操作
    onSetHover(index) {
      if (index == this.hoverIndex) return;
      this.hoverIndex = index;
    },
    onCancelHover(index) {
      this.hoverIndex = -1;
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  padding-top: 120px;
  .map-box {
    position: relative;
    #map {
      margin: 20px auto 60px auto;
      width: 100%;
      height: 500px;
      transition: all 0.3s ease-in;
    }
    .map-intro {
      max-width: 1000px;
      width: auto;
      transform: translateX(-50%);
      position: absolute;
      z-index: 56;
      bottom: 0;
      left: 50%;
      display: flex;
      align-items: flex-end;
      overflow-y: visible;
      overflow-x: auto;
      &::-webkit-scrollbar {
        /*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
        width: 10px;
        height: 6px;
      }
      &::-webkit-scrollbar-button {
        /*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
        display: none;
      }
      &::-webkit-scrollbar-track {
        /*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
        background: #747474;
      }
      &::-webkit-scrollbar-track-piece {
        /*内层轨道，滚动条中间部分（位置4）*/
        background: #e6e6e6;
      }
      &::-webkit-scrollbar-thumb {
        /*滚动条里面可以拖动的那部分（位置5）*/
        background: #747474;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-corner {
        /*边角（位置6）*/
        background: #82afff;
      }
      &::-webkit-scrollbar-resizer {
        /*定义右下角拖动块的样式（位置7）*/
        background: #ff0bee;
      }

      .intro-item {
        width: 250px;
        flex: 0 0 250px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 18px;
        font-family: Roboto;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        border-right: 1px solid rgba(211, 211, 211, 1);
        background: #f0f0f0;
        cursor: pointer;
        .location {
          width: 100%;
          font-size: 20px;
          font-family: Roboto;
          font-weight: 300;
          line-height: 22px;
          vertical-align: middle;
          .icon-add {
            width: 12px;
            height: 16px;
            vertical-align: middle;
          }
        }
        .split-line {
          width: 70px;
          height: 1px;
          margin: 12px 0;
          background: rgba(201, 201, 201, 1);
        }
        .full-address {
          font-size: 14px;
          font-family: Roboto;
          font-weight: 300;
          line-height: 18px;
        }
        &:last-child {
          border: none;
        }
        .map-text {
          margin-left: 8px;
        }
        &:hover,
        &.active {
          background: #32b67a;
          color: white;
        }
        &.active {
          height: 110px;
          font-size: 18px;
          font-family: Roboto;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          display: flex;
          justify-content: flex-start;
          padding: 10px;
        }
      }
    }
  }
  .contact-box {
    margin: 0 auto;
    width: 1000px;
    // height: 415px;
    display: flex;
    justify-content: space-between;
    .address-swiper {
      width: 330px;
      height: 415px;
      .swiper-slide {
        .address-img {
          width: 100%;
          height: auto;
        }
      }
      .swiper-button-prev {
        outline: none;
        width: 26px;
        height: 26px;
        background-size: 26px 26px;
        background-image: url(./prolist-list-l.png);
        right: 44px;
        left: auto;
        top: 360px;
      }

      .swiper-button-next {
        outline: none;
        width: 26px;
        height: 26px;
        background-size: 26px 26px;
        background-image: url(./prolist-list-r.png);
        right: 10px;
        left: auto;
        top: 360px;
      }
    }
    .message-box {
      overflow: hidden;
      width: 100%;
      // height: 415px;
      .title {
        font-size: 24px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(102, 102, 102, 1);
      }
      .tip {
        font-size: 14px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(102, 102, 102, 1);
      }
      .split-line {
        width: 100%;
        height: 1px;
        background: rgba(128, 128, 128, 1);
        margin: 32px 0 20px 0;
      }
      .input-box {
        .input-item {
          display: inline-block;
          align-items: center;
          width: 33%;
          // justify-content: space-between;
          span {
            display: inline-block;
            width: 60px;
            text-align: left;
            height: 24px;
          }
        }
        .security {
          margin-top: 10px;
          img {
            width: 14px;
            height: 14px;
            display: inline-block;
            vertical-align: middle;
          }
          span {
            display: inline;
            vertical-align: middle;
            font-size: 14px;
            font-family: Roboto;
            font-weight: 100;
            margin-left: 4px;
            color: rgba(153, 153, 153, 1);
          }
        }
        .submit-btn {
          margin-top: 32px;
          padding-top: 1px;
          width: 191px;
          height: 32px;
          background: #32b67a;
          font-size: 18px;
          font-family: Roboto;
          font-weight: 100;
          color: #ffffff;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          cursor: pointer;
          float: right;
        }
      }
    }
  }
  .footer-box {
    width: 100%;
    height: 363px;
    margin-top: 145px;
    background: #f0f0f0;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 100;
    color: #222;
    line-height: 3 4;
    .footer-content {
      margin: 0 auto;
      width: 1000px;
      height: 363px;
      box-sizing: border-box;
      padding-top: 48px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .link-item {
        width: 241px;
        text-align: left;
        margin-top: 40px;
        &:nth-child(1) {
          .title {
            margin-bottom: 16px;
          }
        }
        &:nth-child(2) {
          flex: 1 1 0;
          margin: 12px 120px 0 120px;
        }
        &:nth-child(3) {
          margin-top: 12px;
        }
        &:first-child {
          margin-top: 0;
        }
        .title {
          color: #333;
          font-weight: bold;
          margin-bottom: 30px;
          p {
            position: relative;
            &::after {
              display: block;
              position: absolute;
              bottom: -10px;
              left: 0;
              z-index: 5;
              content: "";
              width: 50px;
              height: 1px;
              background: #32b67a;
            }
          }
        }
        .logo {
          width: 206px;
          height: 45px;
          vertical-align: middle;
        }
        .text {
          margin-top: 10px;
          line-height: 28px;
          img {
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>