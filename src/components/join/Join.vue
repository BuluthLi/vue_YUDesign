<template>
  <div class="index">
    <div class="banner">
      <img src="./join-banner1.jpg" alt />
    </div>
    <div class="box">
      <div class="box-item anchor-hook" style="margin-top:100px">
        <div class="content-box">
          <div class="left">
            <div class="s-title" id="brandintroduction">BRAND</div>
            <div class="s-title">INTRODUCTION</div>
            <div class="split-line"></div>
            <div class="intro">Speciality because of dedication</div>
            <div
              class="text"
            >Yudezign brand belongs to universal flooring supply company, which was founded in 2007, specializing in customized kitchen, and is a professional service provider of customized kitchen cabinets in the United States. We have the industry's advanced intelligent manufacturing production base, engaged in the overall kitchen cabinets and custom home research and development, design, production, sales of the overall service.</div>
          </div>
          <div class="right">
            <img src="./join-brand-pic.jpg" alt />
          </div>
        </div>
      </div>
      <div class="box-item anchor-hook">
        <div class="title" id="joinprocess">APPLICATION PROCESS</div>
        <div class="content-box">
          <img src="./join-process-pic.png" alt class="join-process" />
        </div>
      </div>
      <div class="special-item anchor-hook">
        <div class="title" id="companyadvantage">COMPANY ADVANTAGE</div>
        <div class="content-box">
          <div class="tip">
            Yudezign leads kitchen cabinet customization for 12 years, with 3 core competitiveness,
            strives to improve terminal sales strength
          </div>
          <div class="step-img">
            <img src="./join-advantage-pic.png" alt />
          </div>
          <a class="apply-btn" href="#message">Join partnership</a>
        </div>
      </div>
      <div class="box-item step-item">
        <div class="icon-step">
          <img src="./join-advantage-title1.png" alt />
        </div>
        <div class="se-title">INTELLIGENT MANUFACTURING HIGHLY EFFICIENT PRODUCTION CAPACITY</div>
        <div class="text">
          With the advanced flexible production line leading the industry, the cost and efficiency of mass production, we can produce completely personalized products for every customer.
          Not only is the daily production capacity 10 times higher than the traditional production, but the material utilization rate is increased from 85% to 93%, so as to ensure the quality and cycle of delivery and guarantee the guarantee of franchisee's terminal sales.
        </div>
        <div class="intro-img">
          <img src="./join-advantage-1-pic.jpg" alt />
        </div>
      </div>
      <div class="box-item step-item">
        <div class="icon-step">
          <img src="./join-advantage-title2.png" alt />
        </div>
        <div class="se-title">STRONG IT SUPPORT TO CREAT A SOFTWARE PLATFORM</div>
        <div class="text">
          The YFCAD information system is fully introduced at the sales end, and Yudezign provides franchisees with information technical support from sales to production -- kitchen cabinet design system, cloud rendering, measurement, communication, plan, enabling terminal designers to accurately grasp customer needs, intelligent generation of design plan, improve the quality and efficiency of the drawing, help designers to easily close a large order,
          help franchisees to reduce sales costs.
        </div>
        <div class="intro-img">
          <img src="./join-advantage-2-pic.png" alt />
        </div>
      </div>
      <div class="box-item step-item">
        <div class="icon-step">
          <img src="./join-advantage-title3.png" alt />
        </div>
        <div class="se-title">MILLIONS OF DESIGN SOLUTIONS IN THE CLOUD</div>
        <div
          class="text"
        >Relying on the IT strength of YFCAD, the sales end system contains tens of thousands of product and room-scene database. Through cloud computing and big data technology for different people, living in different space behavior and conduct thorough research to the functional requirements, the development of millions of "space overall solution". The design lead time will bo significantly reduced so you can stay focused on your customers.</div>
        <div class="intro-img">
          <img src="./join-advantage-3-pic.png" alt />
        </div>
      </div>
      <div class="box-item transition-item">
        <img src="./join-newgen-bg.jpg" alt />
        <div class="tip">A new generation of lifestyle kitchens</div>
        <div class="intro">Lead the trend of hutch ark industry, ignite customer to buy desire</div>
        <a class="apply-btn" href="#message">Join partnership</a>
      </div>
      <div class="box-item anchor-hook" style="margin-top:100px" id="theleaderambryindustry">
        <div class="content-box">
          <div class="left">
            <div class="s-title" id="brandintroduction">THE EMGERGING</div>
            <div class="s-title">INDUSTRY LEADER</div>
            <div class="split-line"></div>
            <div class="intro">multiply customer satisfaction with Game-changer Solution</div>
            <div
              class="text"
            >According to your needs, we can customize the points, lines and surfaces that others are studying in the kitchen function upgrade. We are already studying the lifestyle. Every customer has their own needs, Yudezign according to different life cycle, living habits, occupation, family members, use requirements, budget, etc., to provide customers with personalized design services, innovation proposed "new generation of lifestyle kitchen".</div>
          </div>
          <div class="right">
            <img src="./join-leader-pic.jpg" alt />
          </div>
        </div>
      </div>
      <div class="box-item">
        <div class="title">EIGHT ADVANTAGES OF NEW LIFTSTYLE KITCHEN</div>
        <div class="content-box">
          <img src="./join-8advantages-pic.png" alt class="join-process" />
        </div>
      </div>
      <div class="box-item" style="margin-top:100px">
        <div class="content-box">
          <div class="left">
            <div class="s-title" id="brandintroduction">ONE-TO-ONE</div>
            <div class="s-title">DESIGN SERVICE</div>
            <div class="split-line"></div>
            <div class="intro">Differentiated services to maximize satisfaction</div>
            <div
              class="text"
            >Yudezign designers provide one-on-one design services to every customer. Free measurement, free design of 3D renderings, dedicated to the personalized design for every family, just for the exclusive ideal "home"!</div>
          </div>
          <div class="right">
            <img src="./join-121-pic.jpg" alt />
          </div>
        </div>
      </div>
      <div class="box-item">
        <div class="title">
          <div>JOIN THE NEW INDUSTRY</div>
          <div style="font-size: 14px;color: rgba(51, 51, 51, 1);margin-top:20px;">Join Yudezign to initiate kitchen cabinet customization business</div>
        </div>
        <div class="content-box">
          <img src="./join-object-pic.jpg" alt class="join-process" />
        </div>
      </div>
    </div>
    <InnerPageLink :linkData="linkData"></InnerPageLink>
  </div>
</template>
<script>
import InnerPageLink from "../innerpagelink/InnerPageLink";
export default {
  data() {
    return {
      linkData: [
        {
          id: "#brandintroduction",
          name: "BRAND INTRODUCTION",
          idx: 0
        },
        {
          id: "#joinprocess",
          name: "joinprocess",
          idx: 1
        },
        {
          id: "#companyadvantage",
          name: "COMPANY ADVANTAGE",
          idx: 2
        },
        {
          id: "#theleaderambryindustry",
          name: "The Leaderambry Industry",
          idx: 3
        },
        {
          id: "#message",
          name: "message",
          idx: 4
        }
      ]
    };
  },
  computed: {},
  mounted: function() {},
  destroyed: function() {
  },
  methods: {},
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
      img {
        width: 100%;
      }
      .title {
        margin: 100px auto 50px auto;
        font-size: 30px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(51, 51, 51, 1);
        text-align: center;
      }

      .content-box {
        display: flex;
        width: 1000px;
        height: auto;
        margin: 0 auto;
        .left {
          flex: 1 1 0;
          .s-title {
            font-size: 40px;
            font-family: Roboto;
            font-weight: 100;
            color: rgba(51, 51, 51, 1);
            line-height: 46px;
          }
          .intro {
            font-size: 14px;
            font-family: Roboto;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }
          .split-line {
            width: 149px;
            height: 1px;
            background: rgba(133, 133, 133, 1);
            margin: 14px 0 34px 0;
          }

          .text {
            font-size: 14px;
            font-family: Roboto;
            font-weight: 100;
            color: #333333;
            line-height: 24px;
            margin-top: 20px;
          }
        }
        .right {
          margin-left: 24px;
          width: 417px;
          height: 307px;
          img {
            width: 417px;
            height: 307px;
          }
        }
        .join-process {
          width: 1000px;
          height: auto;
        }
      }
    }
    .special-item {
      width: 100%;
      height: 700px;
      background-image: url(./join-advantage-bg.jpg);
      background-position: center;
      background-size: auto 700px;
      margin-top: 100px;
      overflow: hidden;
      .title {
        margin: 60px auto 50px auto;
        text-align: center;
        font-size: 34px;
        font-family: Roboto;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
      .content-box {
        width: 1000px;
        margin: 0 auto;
        text-align: center;
        .tip {
          width: 754px;
          font-size: 18px;
          font-family: Roboto;
          font-weight: 100;
          margin: 0 auto;
          color: rgba(255, 255, 255, 1);
          line-height: 32px;
        }
        .step-img {
          width: 780px;
          margin: 80px auto 0 auto;
          height: 162px;
        }
        .apply-btn {
          display: block;
          width: 350px;
          height: 68px;
          margin: 96px auto 0 auto;
          text-align: center;
          line-height: 64px;
          background: rgba(209, 177, 126, 1);
          font-size: 24px;
          font-family: Roboto;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
        }
      }
    }
    .step-item {
      width: 1000px;
      margin: 0 auto;
      .icon-step {
        width: 154px;
        height: 104px;
        margin: 100px auto 40px auto;
      }
      .se-title {
        width: 514px;
        font-size: 24px;
        font-family: Roboto;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        margin: 0 auto;
      }
      .text {
        font-size: 14px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(102, 102, 102, 1);
        line-height: 21px;
        text-align: center;
        margin: 40px auto;
      }
    }
    .transition-item {
      height: auto;
      width: 100%;
      position: relative;
      margin-top: 160px;
      img {
        width: 100%;
      }
      .tip {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 34px;
        font-family: Roboto;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 32px;
      }
      .intro {
        position: absolute;
        top: 44%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
        font-family: Roboto;
        font-weight: 100;
        color: rgba(255, 255, 255, 1);
        line-height: 32px;
      }
      .apply-btn {
        position: absolute;
        top: 64%;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 350px;
        height: 68px;
        text-align: center;
        line-height: 64px;
        background: rgba(209, 177, 126, 1);
        font-size: 24px;
        font-family: Roboto;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
      }
    }
  }
}
</style>