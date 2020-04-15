<template>
  <div class="product">
    <div class="banner scroll-base scroll-hidden">
      <div class="left">
        <img src="./prolist-list-titlebg.png" alt />
        <div
          class="text"
        >We understand that people want unique decor for their homes and the best quality at affordable prices. No matter what our customers envision, we have a solution for every renovation project. We intentionally carry a very diverse selection to make sure that even the most complicated customizations feel effortless.</div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </div>
      <div class="swiper-container my-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in vrData" :key="index">
            <div class="img-box" @click.stop="onShowVR(index)">
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
            <img src="./mainone.jpg" alt class="mainone" @click="onPreImg(1)" />
            <img src="./maintwo.jpg" alt class="maintwo" @click="onPreImg(2)" />
            <img src="./mainthree.jpg" alt class="mainthree" @click="onPreImg(3)" />
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
            <img src="./mainone.jpg" alt class="mainone" @click="onPreImg(1)" />
            <img src="./maintwo.jpg" alt class="maintwo" @click="onPreImg(2)" />
            <img src="./mainthree.jpg" alt class="mainthree" @click="onPreImg(3)" />
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
            <img src="./mainone.jpg" alt class="mainone" @click="onPreImg(1)" />
            <img src="./maintwo.jpg" alt class="maintwo" @click="onPreImg(2)" />
            <img src="./mainthree.jpg" alt class="mainthree" @click="onPreImg(3)" />
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
        <div class="intro">The 12 Technologies For Cabinets</div>
        <div class="intro-img">
          <img src="./prolist-12tedian-pic.png" alt class="scroll-base" />
        </div>
      </div>
    </div>
    <div class="preimg-block" v-if="showPreImg">
      <div class="shade" @click="onCLosePreImg"></div>
      <div class="img-box" :style="{backgroundImage:'url('+currentUrl+')'}" @click="onCLosePreImg"></div>
    </div>
    <!-- <InnerPageLink :linkData="linkData"></InnerPageLink> -->
    <div v-if="showVR">
      <VR :vrData="vrData" :active="active" v-on:onCloseVR="onCloseVR"></VR>
    </div>
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

// 110,120,130为材质，111-116是同一材质得图片，以此类推
import detail110 from "./prolist-detail110.png";
import detail120 from "./prolist-detail120.png";
import detail130 from "./prolist-detail130.png";
import detail140 from "./prolist-detail140.png";
import detail150 from "./prolist-detail150.png";
import detail160 from "./prolist-detail160.png";
import detail170 from "./prolist-detail170.png";
import detail180 from "./prolist-detail180.png";
import detail190 from "./prolist-detail190.png";
import detail200 from "./prolist-detail200.png";
import detail210 from "./prolist-detail210.png";
import detail220 from "./prolist-detail220.png";
import detail230 from "./prolist-detail230.png";
import detail240 from "./prolist-detail240.png";
import detail250 from "./prolist-detail250.png";
import detail260 from "./prolist-detail260.png";
import detail270 from "./prolist-detail270.png";
import detail280 from "./prolist-detail280.png";
import detail111 from "./prolist-detail111.jpg";
import detail112 from "./prolist-detail112.jpg";
import detail113 from "./prolist-detail113.jpg";
import detail114 from "./prolist-detail114.jpg";
import detail115 from "./prolist-detail115.jpg";
import detail116 from "./prolist-detail116.jpg";
import detail121 from "./prolist-detail121.jpg";
import detail122 from "./prolist-detail122.jpg";
import detail123 from "./prolist-detail123.jpg";
import detail124 from "./prolist-detail124.jpg";
import detail125 from "./prolist-detail125.jpg";
import detail126 from "./prolist-detail126.jpg";
import detail131 from "./prolist-detail131.jpg";
import detail132 from "./prolist-detail132.jpg";
import detail133 from "./prolist-detail133.jpg";
import detail134 from "./prolist-detail134.jpg";
import detail135 from "./prolist-detail135.jpg";
import detail136 from "./prolist-detail136.jpg";
import detail141 from "./prolist-detail141.jpg";
import detail142 from "./prolist-detail142.jpg";
import detail143 from "./prolist-detail143.jpg";
import detail144 from "./prolist-detail144.jpg";
import detail145 from "./prolist-detail145.jpg";
import detail146 from "./prolist-detail146.jpg";
import detail151 from "./prolist-detail151.jpg";
import detail152 from "./prolist-detail152.jpg";
import detail153 from "./prolist-detail153.jpg";
import detail154 from "./prolist-detail154.jpg";
import detail155 from "./prolist-detail155.jpg";
import detail156 from "./prolist-detail156.jpg";
import detail161 from "./prolist-detail161.jpg";
import detail162 from "./prolist-detail162.jpg";
import detail163 from "./prolist-detail163.jpg";
import detail164 from "./prolist-detail164.jpg";
import detail165 from "./prolist-detail165.jpg";
import detail166 from "./prolist-detail166.jpg";
import detail171 from "./prolist-detail171.jpg";
import detail172 from "./prolist-detail172.jpg";
import detail173 from "./prolist-detail173.jpg";
import detail174 from "./prolist-detail174.jpg";
import detail175 from "./prolist-detail175.jpg";
import detail176 from "./prolist-detail176.jpg";
import detail181 from "./prolist-detail181.jpg";
import detail182 from "./prolist-detail182.jpg";
import detail183 from "./prolist-detail183.jpg";
import detail184 from "./prolist-detail184.jpg";
import detail185 from "./prolist-detail185.jpg";
import detail186 from "./prolist-detail186.jpg";
import detail191 from "./prolist-detail191.jpg";
import detail192 from "./prolist-detail192.jpg";
import detail193 from "./prolist-detail193.jpg";
import detail194 from "./prolist-detail194.jpg";
import detail195 from "./prolist-detail195.jpg";
import detail196 from "./prolist-detail196.jpg";
import detail201 from "./prolist-detail201.jpg";
import detail202 from "./prolist-detail202.jpg";
import detail203 from "./prolist-detail203.jpg";
import detail204 from "./prolist-detail204.jpg";
import detail205 from "./prolist-detail205.jpg";
import detail206 from "./prolist-detail206.jpg";
import detail211 from "./prolist-detail211.jpg";
import detail212 from "./prolist-detail212.jpg";
import detail213 from "./prolist-detail213.jpg";
import detail214 from "./prolist-detail214.jpg";
import detail215 from "./prolist-detail215.jpg";
import detail216 from "./prolist-detail216.jpg";
import detail221 from "./prolist-detail221.jpg";
import detail222 from "./prolist-detail222.jpg";
import detail223 from "./prolist-detail223.jpg";
import detail224 from "./prolist-detail224.jpg";
import detail225 from "./prolist-detail225.jpg";
import detail226 from "./prolist-detail226.jpg";
import detail231 from "./prolist-detail231.jpg";
import detail232 from "./prolist-detail232.jpg";
import detail233 from "./prolist-detail233.jpg";
import detail234 from "./prolist-detail234.jpg";
import detail235 from "./prolist-detail235.jpg";
import detail236 from "./prolist-detail236.jpg";
import detail241 from "./prolist-detail241.jpg";
import detail242 from "./prolist-detail242.jpg";
import detail243 from "./prolist-detail243.jpg";
import detail244 from "./prolist-detail244.jpg";
import detail245 from "./prolist-detail245.jpg";
import detail246 from "./prolist-detail246.jpg";
import detail251 from "./prolist-detail251.jpg";
import detail252 from "./prolist-detail252.jpg";
import detail253 from "./prolist-detail253.jpg";
import detail254 from "./prolist-detail254.jpg";
import detail255 from "./prolist-detail255.jpg";
import detail256 from "./prolist-detail256.jpg";
import detail261 from "./prolist-detail261.jpg";
import detail262 from "./prolist-detail262.jpg";
import detail263 from "./prolist-detail263.jpg";
import detail264 from "./prolist-detail264.jpg";
import detail265 from "./prolist-detail265.jpg";
import detail266 from "./prolist-detail266.jpg";
import detail271 from "./prolist-detail271.jpg";
import detail272 from "./prolist-detail272.jpg";
import detail273 from "./prolist-detail273.jpg";
import detail274 from "./prolist-detail274.jpg";
import detail275 from "./prolist-detail275.jpg";
import detail276 from "./prolist-detail276.jpg";
import detail281 from "./prolist-detail281.jpg";
import detail282 from "./prolist-detail282.jpg";
import detail283 from "./prolist-detail283.jpg";
import detail284 from "./prolist-detail284.jpg";
import detail285 from "./prolist-detail285.jpg";
import detail286 from "./prolist-detail286.jpg";

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
      vrData: [
        {
          src: pro1,
          text:
            "In marble numerous kinds, crystal marble appears all the more different, its quality of a material is hard, decorative pattern is exquisite, colour and lustre is even, resist corrode to wait a moment again, be applied in domestic decorating extensively by people.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 100, //id区分不同图片作用
          title: "GEMSTONE",
          detailList: [
            {
              id: 110,
              title: "Crystal Slate",
              src: detail110,
              imgList: [
                { id: 111, title: "", src: detail111 },
                { id: 112, title: "", src: detail112 },
                { id: 113, title: "", src: detail113 },
                { id: 114, title: "", src: detail114 },
                { id: 115, title: "", src: detail115 },
                { id: 116, title: "", src: detail116 }
              ]
            },
            {
              id: 120,
              title: "Beige Moonstone",
              src: detail120,
              imgList: [
                { id: 121, title: "", src: detail121 },
                { id: 122, title: "", src: detail122 },
                { id: 123, title: "", src: detail123 },
                { id: 124, title: "", src: detail124 },
                { id: 125, title: "", src: detail125 },
                { id: 126, title: "", src: detail126 }
              ]
            },
            {
              id: 130,
              title: "Snow Pearl",
              src: detail130,
              imgList: [
                { id: 131, title: "", src: detail131 },
                { id: 132, title: "", src: detail132 },
                { id: 133, title: "", src: detail133 },
                { id: 134, title: "", src: detail134 },
                { id: 135, title: "", src: detail135 },
                { id: 136, title: "", src: detail136 }
              ]
            }
          ]
        },
        {
          src: pro2,
          text:
            "In marble numerous kinds, crystal marble appears all the more different, its quality of a material is hard, decorative pattern is exquisite, colour and lustre is even, resist corrode to wait a moment again, be applied in domestic decorating extensively by people.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          title: "HERITAGE",
          id: 200,
          detailList: [
            {
              id: 210,
              src: detail140,
              title: "Ivory White",
              imgList: [
                { id: 141, title: "", src: detail141 },
                { id: 142, title: "", src: detail142 },
                { id: 143, title: "", src: detail143 },
                { id: 144, title: "", src: detail144 },
                { id: 145, title: "", src: detail145 },
                { id: 146, title: "", src: detail146 }
              ]
            },
            {
              id: 150,
              title: "Black Onyx",
              src: detail150,
              imgList: [
                { id: 151, title: "", src: detail151 },
                { id: 152, title: "", src: detail152 },
                { id: 153, title: "", src: detail153 },
                { id: 154, title: "", src: detail154 },
                { id: 155, title: "", src: detail155 },
                { id: 156, title: "", src: detail156 }
              ]
            },
            {
              id: 160,
              title: "Morning Dove",
              src: detail160,
              imgList: [
                { id: 161, title: "", src: detail161 },
                { id: 162, title: "", src: detail162 },
                { id: 163, title: "", src: detail163 },
                { id: 164, title: "", src: detail164 },
                { id: 165, title: "", src: detail165 },
                { id: 166, title: "", src: detail166 }
              ]
            },
            {
              id: 170,
              title: "Morning Dove",
              src: detail170,
              imgList: [
                { id: 171, title: "", src: detail171 },
                { id: 172, title: "", src: detail172 },
                { id: 173, title: "", src: detail173 },
                { id: 174, title: "", src: detail174 },
                { id: 175, title: "", src: detail175 },
                { id: 176, title: "", src: detail176 }
              ]
            }
          ]
        },
        {
          src: pro3,
          text:
            "In marble numerous kinds, crystal marble appears all the more different, its quality of a material is hard, decorative pattern is exquisite, colour and lustre is even, resist corrode to wait a moment again, be applied in domestic decorating extensively by people.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 300,
          title: "ALASKA",
          detailList: [
            {
              id: 180,
              src: detail180,
              title: "Polar White",
              imgList: [
                { id: 181, title: "", src: detail181 },
                { id: 182, title: "", src: detail182 },
                { id: 183, title: "", src: detail183 },
                { id: 184, title: "", src: detail184 },
                { id: 185, title: "", src: detail185 },
                { id: 186, title: "", src: detail186 }
              ]
            },
            {
              id: 190,
              title: "Morning Dove",
              src: detail190,
              imgList: [
                { id: 191, title: "", src: detail191 },
                { id: 192, title: "", src: detail192 },
                { id: 193, title: "", src: detail193 },
                { id: 194, title: "", src: detail194 },
                { id: 195, title: "", src: detail195 },
                { id: 196, title: "", src: detail196 }
              ]
            }
          ]
        },
        {
          src: pro4,
          text:
            "In marble numerous kinds, crystal marble appears all the more different, its quality of a material is hard, decorative pattern is exquisite, colour and lustre is even, resist corrode to wait a moment again, be applied in domestic decorating extensively by people.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 400,
          title: "EXOTIC",
          detailList: [
            {
              id: 190,
              src: detail190,
              title: "Natural Acacia",
              imgList: [
                { id: 191, title: "", src: detail191 },
                { id: 192, title: "", src: detail192 },
                { id: 193, title: "", src: detail193 },
                { id: 194, title: "", src: detail194 },
                { id: 195, title: "", src: detail195 },
                { id: 196, title: "", src: detail196 }
              ]
            },
            {
              id: 200,
              title: "Amazon Pine",
              src: detail200,
              imgList: [
                { id: 201, title: "", src: detail201 },
                { id: 202, title: "", src: detail202 },
                { id: 203, title: "", src: detail203 },
                { id: 204, title: "", src: detail204 },
                { id: 205, title: "", src: detail205 },
                { id: 206, title: "", src: detail206 }
              ]
            },
            {
              id: 210,
              title: "Moonlight Serenade",
              src: detail210,
              imgList: [
                { id: 211, title: "", src: detail211 },
                { id: 212, title: "", src: detail212 },
                { id: 213, title: "", src: detail213 },
                { id: 214, title: "", src: detail214 },
                { id: 215, title: "", src: detail215 },
                { id: 216, title: "", src: detail216 }
              ]
            }
          ]
        },
        {
          src: pro5,
          text:
            "In marble numerous kinds, crystal marble appears all the more different, its quality of a material is hard, decorative pattern is exquisite, colour and lustre is even, resist corrode to wait a moment again, be applied in domestic decorating extensively by people.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 500,
          title: "FARMHOUSE",
          detailList: [
            {
              id: 220,
              src: detail220,
              title: "Weathered Bark",
              imgList: [
                { id: 221, title: "", src: detail221 },
                { id: 222, title: "", src: detail222 },
                { id: 223, title: "", src: detail223 },
                { id: 224, title: "", src: detail224 },
                { id: 225, title: "", src: detail225 },
                { id: 226, title: "", src: detail226 }
              ]
            },
            {
              id: 230,
              title: "Ivory Tusk",
              src: detail230,
              imgList: [
                { id: 231, title: "", src: detail231 },
                { id: 232, title: "", src: detail232 },
                { id: 233, title: "", src: detail233 },
                { id: 234, title: "", src: detail234 },
                { id: 235, title: "", src: detail235 },
                { id: 236, title: "", src: detail236 }
              ]
            },
            {
              id: 240,
              title: "Ash Taupe",
              src: detail230,
              imgList: [
                { id: 241, title: "", src: detail241 },
                { id: 242, title: "", src: detail242 },
                { id: 243, title: "", src: detail243 },
                { id: 244, title: "", src: detail244 },
                { id: 245, title: "", src: detail245 },
                { id: 246, title: "", src: detail246 }
              ]
            },
            {
              id: 250,
              title: "Silver Gray",
              src: detail250,
              imgList: [
                { id: 251, title: "", src: detail251 },
                { id: 252, title: "", src: detail252 },
                { id: 253, title: "", src: detail253 },
                { id: 254, title: "", src: detail254 },
                { id: 255, title: "", src: detail255 },
                { id: 256, title: "", src: detail256 }
              ]
            },
            {
              id: 260,
              title: "Navy Gray",
              src: detail260,
              imgList: [
                { id: 261, title: "", src: detail261 },
                { id: 262, title: "", src: detail262 },
                { id: 263, title: "", src: detail263 },
                { id: 264, title: "", src: detail264 },
                { id: 265, title: "", src: detail265 },
                { id: 266, title: "", src: detail266 }
              ]
            },
            {
              id: 270,
              title: "Mossy Oak",
              src: detail270,
              imgList: [
                { id: 271, title: "", src: detail271 },
                { id: 272, title: "", src: detail272 },
                { id: 273, title: "", src: detail273 },
                { id: 274, title: "", src: detail274 },
                { id: 275, title: "", src: detail275 },
                { id: 276, title: "", src: detail276 }
              ]
            }
          ]
        },
        {
          src: pro6,
          text:
            "In marble numerous kinds, crystal marble appears all the more different, its quality of a material is hard, decorative pattern is exquisite, colour and lustre is even, resist corrode to wait a moment again, be applied in domestic decorating extensively by people.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 600,
          title: "Uptown",
          detailList: [
            {
              id: 280,
              title: "White Linen",
              src: detail280,
              imgList: [
                { id: 281, title: "", src: detail281 },
                { id: 282, title: "", src: detail282 },
                { id: 283, title: "", src: detail283 },
                { id: 284, title: "", src: detail284 },
                { id: 285, title: "", src: detail285 },
                { id: 286, title: "", src: detail286 }
              ]
            }
          ]
        }
      ],
      showVR: false,
      mySwiper: null,
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
      this.mySwiper = new Swiper(".swiper-container.my-swiper", {
        //   小数2.5不可以loop,循环的又slide点击事件不生效（插件自动复制的slide上的事件不生效）
        // loop: true,
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
        }
      });
      // let target = document.getElementsByClassName("detail-img");
      // for (let i = 0; i < target.length; i++) {
      //   target[i].addEventListener("click", () => {
      //     this.onShowVR();
      //   });
      // }
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
    onPreImg(id) {
      let url =
        id == 1
          ? require("./mainone.jpg")
          : id == 2
          ? require("./maintwo.jpg")
          : require("./mainthree.jpg");
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
      img {
        width: 221%;
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
        top: 500px;
      }

      .swiper-button-next {
        outline: none;
        width: 53px;
        height: 53px;
        background-size: 53px 53px;
        background-image: url(./prolist-list-r.png);
        left: 288px;
        top: 500px;
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
            width: 27%;
            height: auto;
            position: absolute;
            z-index: 6;
            bottom: 0px;
            @media screen and (max-width: 1400px) {
              bottom: 76px;
            }
            right: 44%;
          }
          .mainthree {
            width: 27%;
            height: auto;
            position: absolute;
            z-index: 6;
            bottom: 0px;
            @media screen and (max-width: 1400px) {
              bottom: 76px;
            }
            right: 4%;
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
            width: 27%;
            height: auto;
            position: absolute;
            z-index: 6;
            bottom: 0px;
            @media screen and (max-width: 1400px) {
              bottom: 76px;
            }
            left: 4%;
          }
          .mainthree {
            width: 27%;
            height: auto;
            position: absolute;
            z-index: 6;
            bottom: 0px;
            @media screen and (max-width: 1400px) {
              bottom: 76px;
            }
            left: 44%;
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
      top: 82%;
    }

    .swiper-button-next {
      outline: none;
      width: 53px;
      height: 53px;
      background-size: 53px 53px;
      background-image: url(./prolist-list-r.png);
      left: 50%;
      top: 82%;
    }
  }
}
</style>