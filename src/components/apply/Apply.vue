<template>
  <div class="apply">
    <div class="init-block" v-if="!showDetail">
      <img src="./liangchi-house.png" alt class="init-house" />
      <img src="./btn-liangchi-apply.png" alt class="init-btn" @click="onChangeFlag" />
    </div>
    <div class="extend-block" v-if="showDetail">
      <div class="swiper-box" v-show="showSwiper">
        <div class="bg"></div>
        <div class="content-box">
          <div class="name">
            TODAY APPLY
            <span style="color:#FFC80B;">456456</span> TIMES:
          </div>
          <div class="swiper">
            <marquee style="margin:0 20px;"
              direction="left"
              scrolldelay="10"
              scrollamount="10"
              loop="-1"
              behavior="scroll"
              hspace="0"
              vspace="0"
              @mouseover="stop"
              @mouseout="start"
              width="500px"
              height="36px"
              align="left"
              class="word-swiper"
            >
              <p>BuluthLi 150****4278</p>
              <p>Ruos 138****4588</p>
              <p>Tom 139****6524</p>
              <p>Smith 156****0012</p>
            </marquee>
          </div>
          <div class="close" @click="onCloseDetail">X</div>
        </div>
      </div>
      <div class="BM-box">
        <div class="bg"></div>
        <div class="content-box">
          <img src="./liangchi-house.png" alt class="BM-img" />
          <img src="./liangchi-title.png" class="name-img" />
          <div class="input-box">
            <Input
              v-model="name"
              size="small"
              placeholder="NAME(Required Field)"
              class="bm-input input-name"
            />
            <Input
              v-model="tel"
              size="small"
              placeholder="TEL(Required Field)"
              class="bm-input input-tel"
            />
            <Input
              v-model="province"
              size="small"
              placeholder="PROVINCE"
              class="bm-input input-province"
            />
            <img src="./btn-liangchi-submit.png" class="submit-btn" alt @click="onApply" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDetail: false,
      showSwiper: true,
      name: "",
      tel: "",
      province: ""
    };
  },
  methods: {
    onChangeFlag: function() {
      this.showDetail = true;
    },
    start: function() {},
    stop: function() {},
    onCloseDetail: function() {
      this.showDetail = false;
    },
    onApply: function() {
      // let flag = /^1[3456789]\d{9}$/.test(this.tel);
      // console.log(flag,this.name.trim());
      if (!this.tel.trim() || !this.name.trim()) {
        this.$Notice.error({
          title: "Notice Error",
          desc: "Please enter the correct information"
        });
        return;
      }
      this.$Notice.success({
        title: "Notice Success",
        desc: "Submit Successfully!"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.apply {
  position: fixed;
  z-index: 101;
  .init-block {
    position: fixed;
    bottom: 120px;
    right: 20px;
    img {
      display: block;
    }
    .init-house {
      width: 185px;
      height: auto;
      margin: 0 auto;
    }
    .init-btn {
      width: 120px;
      height: auto;
      margin: 0 auto;
      cursor: pointer;
    }
  }
  .extend-block {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;
    .swiper-box {
      width: 100%;
      height: 36px;
      position: relative;
      .bg {
        width: 100%;
        height: 36px;
        background: rgba(16, 16, 16, 1);
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 201;
      }
      .content-box {
        font-size: 18px;
        font-family: Roboto;
        font-weight: 400;
        color: #ffffff;
        position: absolute;
        top: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: flex-end;
        z-index: 202;
        min-width: 1166px;
        .name {
          display: inline-block;
          font-size: 18px;
          font-family: Roboto;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          height: 36px;
          line-height: 36px;
        }
        .swiper {
          display: inline-block;
          height: 36px;
          line-height: 36px;
          font-size: 18px;
          font-family: Roboto;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          .word-swiper {
            p {
              display: inline-block;
            }
          }
        }
        .close {
          display: inline-block;
          height: 36px;
          line-height: 36px;
          padding: 0 6px;
          background: rgba(32, 32, 28, 1);
          color: white;
        }
      }
    }
    .BM-box {
      width: 100%;
      height: 100px;
      position: relative;
      display: flex;
      align-items: center;
      .bg {
        width: 100%;
        height: 100px;
        background: rgba(16, 16, 16, 1);
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 201;
      }
      .content-box {
        font-size: 18px;
        font-family: Roboto;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        z-index: 202;
        padding-left: 316px;
        .BM-img {
          width: 276px;
          height: auto;
          position: absolute;
          left: 0;
          bottom: -30px;
        }
        .name-img {
          width: 463px;
          height: 33px;
        }
        .input-box {
          width: 656px;
          height: auto;
          margin-top: -4px;
          .bm-input {
            width: 140px;
            height: 40px;
            display: inline-block;
            margin: 0 10px;

            flex: 1 1 0;
          }
          .submit-btn {
            width: 150px;
            height: 40px;
            display: inline-block;
            flex: 1 1 0;
            vertical-align: middle;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>