<template>
  <div class="footer" id="footer">
    <div class="contact-box anchor-hook">
      <img src="./message-pic.png" alt class="ad-img" />
      <div class="message-box">
        <div class="title" id="message">SEND US YOUR MESSAGE</div>
        <div class="tip">
          <p>Tips: in order to ensure the effectiveness of registration, please fill out the full name</p>
          <p>and contact information</p>
        </div>
        <div class="split-line"></div>
        <form>
          <div class="input-box">
            <div class="input-item">
              <span>Name:</span>
              <Input v-model="name" type="text" placeholder="name(Required Field)" style="width: 210px" />
              <span style="margin-left:40px;">Phone:</span>
              <Input v-model="phone" type="text" placeholder="phone(Required Field)" style="width: 210px" />
            </div>
            <div class="input-item">
              <span>Email:</span>
              <Input v-model="mailbox" placeholder="Mailbox" type="text" style="width: 210px" />
              <span style="margin-left:40px;">Zip Code:</span>
              <Input v-model="address" placeholder="address" type="text" style="width: 210px" />
            </div>
            <div class="input-item content">
              <p>Content:</p>
              <Input
                v-model="content"
                type="textarea"
                :autosize="{minRows: 5,maxRows: 7}"
                :maxlength="350"
                placeholder="Enter something..."
              />
            </div>
            <Button class="submit-btn" @click="onSubmit">SUBMIT</Button>
          </div>
        </form>
      </div>
    </div>
    <div class="footer-box" >
      <div class="footer-content">
        <div class="link-item">
          <div class="title">
            <img src="./logo.png" alt class="logo" />
          </div>
          <p
            class="text"
          >Yudezign brand is a professional service provider of customized kitchen cabinets in the United States. We design, production, sales of the overall service.</p>
        </div>
        <div class="link-item">
          <div class="title">
            <p>CONTACT US</p>
          </div>
          <p class="text">
            <img src="./icon-floor-tel.png" width="14" height="14" alt />
            <span>(+86) 1234 1234</span>
          </p>
          <p class="text">
            <img src="./icon-floor-mail.png" width="16" height="12" alt />
            <span>info@gmail.com</span>
          </p>
          <p class="text">
            <img src="./icon-floor-add.png" width="12" height="16" alt />
            <span>Infinite Loop Cupertino, CA 95014</span>
          </p>
        </div>
        <div class="link-item">
          <div class="title">
            <p>USERFUL LINKS</p>
          </div>
          <p class="text">About our company</p>
          <p class="text">Contact us</p>
          <p class="text">FAQ</p>
          <p class="text">Supports</p>
          <p class="text">Blog</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      mailbox: "",
      address: "",
      content: ""
    };
  },
  methods: {
    onSubmit: function() {
      let flag = /^1[3456789]\d{9}$/.test(this.phone);
      if (!flag || !this.name.trim()) {
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
.footer {
  padding-top: 140px;
  .contact-box {
    margin: 0 auto;
    width: 1000px;
    height: 415px;
    display: flex;
    justify-content: space-between;
    .ad-img {
      width: 330px;
      height: 415px;
    }
    .message-box {
      overflow: hidden;
      width: 614px;
      height: 415px;
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
        width: 614px;
        height: 1px;
        background: rgba(128, 128, 128, 1);
        margin: 17px 0;
      }
      .input-box {
        .input-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            display: inline-block;
            width: 60px;
            text-align: left;
            height: 24px;
          }
          &:nth-child(2) {
            margin-top: 16px;
          }
          &:nth-child(3) {
            margin-top: 16px;
            display: block;
            p {
              margin-bottom: 16px;
            }
          }
        }
        .submit-btn {
          margin-top: 38px;
          padding-top: 1px;
          width: 613px;
          height: 32px;
          background: rgba(189, 159, 111, 1);
          font-size: 18px;
          font-family: Roboto;
          font-weight: 100;
          color: rgba(255, 255, 255, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
    }
  }
  .footer-box {
    width: 100%;
    height: 363px;
    margin-top: 145px;
    background: #363636;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 100;
    color: rgba(153, 153, 153, 1);
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
        &:nth-child(2) {
          flex: 1 1 0;
          margin: 40px 120px 0 120px;
        }
        &:first-child {
          margin-top: 0;
        }
        .title {
          color: #fff;
        }
        .logo {
          width: 154px;
          height: 56px;
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