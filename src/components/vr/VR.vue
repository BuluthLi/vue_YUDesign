<template>
  <div class="vr">
    <div class="shade" @click="onCloseVR"></div>
    <div class="swiper-container vr-swiper">
      <div class="left">
        <!-- <div class="title" style="color:white">{{active}}{{detailActive}}{{imgActive}}</div> -->
        <img :src="vrData[active].detailList[detailActive].imgList[imgActive].src" alt />
        <div class="img-list">
          <div
            class="img-item"
            :class="imgActive==innerIndexL?'img-item-active':''"
            v-for="(innerItemL,innerIndexL) in vrData[active].detailList[detailActive].imgList"
            :key="innerIndexL"
            @click="onChangeImg(innerIndexL)"
          >
            <progressive-background :src="innerItemL.src" :placeholder="initImg" :blur="0" />
            <!-- <img class="preview" v-progressive="innerItemL.src" :style="{zIndex:99+innerIndexL}" :src="initImg" /> -->
          </div>
        </div>
      </div>
      <div class="right" :style="{backgroundImage:'url('+rightBg+')'}">
        <div class="title">{{vrData[active].title}}</div>
        <!-- <div class="title">{{active}}{{detailActive}}{{imgActive}}</div> -->
        <div class="split-line black-gold"></div>
        <div class="intro-block">
          <div class="intro-left">
            <div class="item-name">Door Finish</div>
            <div class="cover-list">
              <div
                class="cover-item"
                v-for="(innerItemR,innerIndexR) in vrData[active].detailList"
                :key="innerIndexR"
                :class="detailActive==innerIndexR?'cover-item-active':''"
                @click="onChangeDetail(innerIndexR)"
              >
                <div class="cover" :style="{backgroundImage:'url('+innerItemR.src+')'}"></div>
                <div class="name">{{innerItemR.title}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-name item-name-description">Description</div>
        <div class="text">{{vrData[active].detailList[detailActive].text}}</div>
        <!-- 暂时隐藏vr按钮 -->
        <!-- <div class="btn" @click.stop="onOpenVR(item.vrUrl)">→ VR PANORAMA</div> -->
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev vr-prev" @click="onPrev"></div>
    <div class="swiper-button-next vr-next" @click="onNext"></div>
    <div class="close" @click="onCloseVR">
      <img src="./pro-intro-close.png" alt />
    </div>
  </div>
</template>
<script>
import rightBg from "./right-bg.jpg";
import initImg from "./init-img.jpg";
// import Swiper from "swiper";

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
import detail117 from "./prolist-detail117.jpg";
import detail118 from "./prolist-detail118.jpg";
import detail119 from "./prolist-detail119.jpg";
import detail121 from "./prolist-detail121.jpg";
import detail122 from "./prolist-detail122.jpg";
import detail123 from "./prolist-detail123.jpg";
import detail124 from "./prolist-detail124.jpg";
import detail125 from "./prolist-detail125.jpg";
import detail126 from "./prolist-detail126.jpg";
import detail127 from "./prolist-detail127.jpg";
import detail128 from "./prolist-detail128.jpg";
import detail129 from "./prolist-detail129.jpg";
import detail131 from "./prolist-detail131.jpg";
import detail132 from "./prolist-detail132.jpg";
import detail133 from "./prolist-detail133.jpg";
import detail134 from "./prolist-detail134.jpg";
import detail135 from "./prolist-detail135.jpg";
import detail136 from "./prolist-detail136.jpg";
import detail137 from "./prolist-detail137.jpg";
import detail138 from "./prolist-detail138.jpg";
import detail139 from "./prolist-detail139.jpg";
import detail141 from "./prolist-detail141.jpg";
import detail142 from "./prolist-detail142.jpg";
import detail143 from "./prolist-detail143.jpg";
import detail144 from "./prolist-detail144.jpg";
import detail145 from "./prolist-detail145.jpg";
import detail146 from "./prolist-detail146.jpg";
import detail147 from "./prolist-detail147.jpg";
import detail148 from "./prolist-detail148.jpg";
import detail149 from "./prolist-detail149.jpg";
import detail151 from "./prolist-detail151.jpg";
import detail152 from "./prolist-detail152.jpg";
import detail153 from "./prolist-detail153.jpg";
import detail154 from "./prolist-detail154.jpg";
import detail155 from "./prolist-detail155.jpg";
import detail156 from "./prolist-detail156.jpg";
import detail157 from "./prolist-detail157.jpg";
import detail158 from "./prolist-detail158.jpg";
import detail159 from "./prolist-detail159.jpg";
import detail161 from "./prolist-detail161.jpg";
import detail162 from "./prolist-detail162.jpg";
import detail163 from "./prolist-detail163.jpg";
import detail164 from "./prolist-detail164.jpg";
import detail165 from "./prolist-detail165.jpg";
import detail166 from "./prolist-detail166.jpg";
import detail167 from "./prolist-detail167.jpg";
import detail168 from "./prolist-detail168.jpg";
import detail169 from "./prolist-detail169.jpg";
import detail171 from "./prolist-detail171.jpg";
import detail172 from "./prolist-detail172.jpg";
import detail173 from "./prolist-detail173.jpg";
import detail174 from "./prolist-detail174.jpg";
import detail175 from "./prolist-detail175.jpg";
import detail176 from "./prolist-detail176.jpg";
import detail177 from "./prolist-detail177.jpg";
import detail178 from "./prolist-detail178.jpg";
import detail179 from "./prolist-detail179.jpg";
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
import detail197 from "./prolist-detail197.jpg";
import detail198 from "./prolist-detail198.jpg";
import detail199 from "./prolist-detail199.jpg";
import detail201 from "./prolist-detail201.jpg";
import detail202 from "./prolist-detail202.jpg";
import detail203 from "./prolist-detail203.jpg";
import detail204 from "./prolist-detail204.jpg";
import detail205 from "./prolist-detail205.jpg";
import detail206 from "./prolist-detail206.jpg";
import detail207 from "./prolist-detail207.jpg";
import detail208 from "./prolist-detail208.jpg";
import detail209 from "./prolist-detail209.jpg";
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
import detail227 from "./prolist-detail227.jpg";
import detail228 from "./prolist-detail228.jpg";
import detail229 from "./prolist-detail229.jpg";
import detail231 from "./prolist-detail231.jpg";
import detail232 from "./prolist-detail232.jpg";
import detail233 from "./prolist-detail233.jpg";
import detail234 from "./prolist-detail234.jpg";
import detail235 from "./prolist-detail235.jpg";
import detail236 from "./prolist-detail236.jpg";
import detail237 from "./prolist-detail237.jpg";
import detail238 from "./prolist-detail238.jpg";
import detail239 from "./prolist-detail239.jpg";
import detail241 from "./prolist-detail241.jpg";
import detail242 from "./prolist-detail242.jpg";
import detail243 from "./prolist-detail243.jpg";
import detail244 from "./prolist-detail244.jpg";
import detail245 from "./prolist-detail245.jpg";
import detail246 from "./prolist-detail246.jpg";
import detail247 from "./prolist-detail247.jpg";
import detail248 from "./prolist-detail248.jpg";
import detail249 from "./prolist-detail249.jpg";
import detail251 from "./prolist-detail251.jpg";
import detail252 from "./prolist-detail252.jpg";
import detail253 from "./prolist-detail253.jpg";
import detail254 from "./prolist-detail254.jpg";
import detail255 from "./prolist-detail255.jpg";
import detail256 from "./prolist-detail256.jpg";
import detail257 from "./prolist-detail257.jpg";
import detail258 from "./prolist-detail258.jpg";
import detail259 from "./prolist-detail259.jpg";
import detail261 from "./prolist-detail261.jpg";
import detail262 from "./prolist-detail262.jpg";
import detail263 from "./prolist-detail263.jpg";
import detail264 from "./prolist-detail264.jpg";
import detail265 from "./prolist-detail265.jpg";
import detail266 from "./prolist-detail266.jpg";
import detail267 from "./prolist-detail267.jpg";
import detail268 from "./prolist-detail268.jpg";
import detail269 from "./prolist-detail269.jpg";
import detail271 from "./prolist-detail271.jpg";
import detail272 from "./prolist-detail272.jpg";
import detail273 from "./prolist-detail273.jpg";
import detail274 from "./prolist-detail274.jpg";
import detail275 from "./prolist-detail275.jpg";
import detail276 from "./prolist-detail276.jpg";
import detail277 from "./prolist-detail277.jpg";
import detail278 from "./prolist-detail278.jpg";
import detail279 from "./prolist-detail279.jpg";
import detail281 from "./prolist-detail281.jpg";
import detail282 from "./prolist-detail282.jpg";
import detail283 from "./prolist-detail283.jpg";
import detail284 from "./prolist-detail284.jpg";
import detail285 from "./prolist-detail285.jpg";
import detail286 from "./prolist-detail286.jpg";
export default {
  data() {
    return {
      vrSwiper: null,
      detailActive: 0,
      imgActive: 0,
      // active: 0,
      rightBg: rightBg,
      initImg: initImg,
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
              text:
                "Dark,extreme and polished. The minimalist loves the stark contrast that Crystal Slate brings to an otherwise white room.  Veined marble and chrome complete the look.",
              src: detail110,
              imgList: [
                { id: 111, title: "", src: detail111 },
                { id: 112, title: "", src: detail112 },
                { id: 113, title: "", src: detail113 },
                { id: 114, title: "", src: detail114 },
                { id: 115, title: "", src: detail115 },
                { id: 116, title: "", src: detail116 },
                { id: 117, title: "", src: detail117 },
                { id: 118, title: "", src: detail118 },
                { id: 119, title: "", src: detail119 }
              ]
            },
            {
              id: 120,
              title: "Beige Moonstone",
              text:
                "Clean and crisp but with with a glossy finish.  If you like an airy feel in a room but favor warm tones, golds and rich wood finishes, Beige Moonstone is perfect for you.",
              src: detail120,
              imgList: [
                { id: 121, title: "", src: detail121 },
                { id: 122, title: "", src: detail122 },
                { id: 123, title: "", src: detail123 },
                { id: 124, title: "", src: detail124 },
                { id: 125, title: "", src: detail125 },
                { id: 126, title: "", src: detail126 },
                { id: 127, title: "", src: detail127 },
                { id: 128, title: "", src: detail128 },
                { id: 129, title: "", src: detail129 }
              ]
            },
            {
              id: 130,
              title: "Snow Pearl",
              text:
                "Our bright arctic white finish makes the room light and clean and sets off darker shades of countertops, backsplashes and paint or colorful curtains with high contrast.",
              src: detail130,
              imgList: [
                { id: 131, title: "", src: detail131 },
                { id: 132, title: "", src: detail132 },
                { id: 133, title: "", src: detail133 },
                { id: 134, title: "", src: detail134 },
                { id: 135, title: "", src: detail135 },
                { id: 136, title: "", src: detail136 },
                { id: 137, title: "", src: detail137 },
                { id: 138, title: "", src: detail138 },
                { id: 139, title: "", src: detail139 }
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
              text:
                "Ivory White is a timeless classic that mixes well with colonial blue and deep reds.  Bring a little bit of New England into your home with the welcoming finish.",
              imgList: [
                { id: 141, title: "", src: detail141 },
                { id: 142, title: "", src: detail142 },
                { id: 143, title: "", src: detail143 },
                { id: 144, title: "", src: detail144 },
                { id: 145, title: "", src: detail145 },
                { id: 146, title: "", src: detail146 },
                { id: 147, title: "", src: detail147 },
                { id: 148, title: "", src: detail148 },
                { id: 149, title: "", src: detail149 }
              ]
            },
            {
              id: 150,
              title: "Black Onyx",
              text:
                "Our straight graphite black finish allows bright countertops and accessories to stand out and shine.",
              src: detail150,
              imgList: [
                { id: 151, title: "", src: detail151 },
                { id: 152, title: "", src: detail152 },
                { id: 153, title: "", src: detail153 },
                { id: 154, title: "", src: detail154 },
                { id: 155, title: "", src: detail155 },
                { id: 156, title: "", src: detail156 },
                { id: 157, title: "", src: detail157 },
                { id: 158, title: "", src: detail158 },
                { id: 159, title: "", src: detail159 }
              ]
            },
            {
              id: 160,
              title: "Morning Dove",
              text:
                "Our rock dove gray matte finish is versatile enough to provide contrast to black and white shades and colors ranging from intense reds to cool, dark evergreens.",
              src: detail160,
              imgList: [
                { id: 161, title: "", src: detail161 },
                { id: 162, title: "", src: detail162 },
                { id: 163, title: "", src: detail163 },
                { id: 164, title: "", src: detail164 },
                { id: 165, title: "", src: detail165 },
                { id: 166, title: "", src: detail166 },
                { id: 167, title: "", src: detail167 },
                { id: 168, title: "", src: detail168 },
                { id: 169, title: "", src: detail169 }
              ]
            },
            {
              id: 170,
              title: "Manila Beige",
              text:
                "Our Scandinavian maple is the epitome of contemporary design.  This natural wood finish combines a bright but neutral color with unobtrusive natural grain.",
              src: detail170,
              imgList: [
                { id: 171, title: "", src: detail171 },
                { id: 172, title: "", src: detail172 },
                { id: 173, title: "", src: detail173 },
                { id: 174, title: "", src: detail174 },
                { id: 175, title: "", src: detail175 },
                { id: 176, title: "", src: detail176 },
                { id: 177, title: "", src: detail177 },
                { id: 178, title: "", src: detail178 },
                { id: 179, title: "", src: detail179 }
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
              text:
                "Our neutral toned off-white eggshell matte finish may be combined with any warm colors to highlight the colors and other accessories without competing with them.",
              imgList: [
                { id: 181, title: "", src: detail181 },
                { id: 182, title: "", src: detail182 },
                { id: 183, title: "", src: detail183 },
                { id: 184, title: "", src: detail184 },
                { id: 185, title: "", src: detail185 },
                { id: 186, title: "", src: detail186 }
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
              text:
                "Our warm hardwood finish allows a unique blend of contemporary styling with warmth and the appeal of a natural material.",
              imgList: [
                { id: 191, title: "", src: detail191 },
                { id: 192, title: "", src: detail192 },
                { id: 193, title: "", src: detail193 },
                { id: 194, title: "", src: detail194 },
                { id: 195, title: "", src: detail195 },
                { id: 196, title: "", src: detail196 },
                { id: 197, title: "", src: detail197 },
                { id: 198, title: "", src: detail198 },
                { id: 199, title: "", src: detail199 }
              ]
            },
            {
              id: 200,
              title: "Amazon Pine",
              text:
                "Our deep heartwood finish provides cool, dark browns with black veins that allow depth and the appeal of a natural material which can be combined with products such as dark granite while maintaining the warmth of wood and a subtle contrast.",
              src: detail200,
              imgList: [
                { id: 201, title: "", src: detail201 },
                { id: 202, title: "", src: detail202 },
                { id: 203, title: "", src: detail203 },
                { id: 204, title: "", src: detail204 },
                { id: 205, title: "", src: detail205 },
                { id: 206, title: "", src: detail206 },
                { id: 207, title: "", src: detail207 },
                { id: 208, title: "", src: detail208 },
                { id: 209, title: "", src: detail209 }
              ]
            },
            {
              id: 210,
              title: "Moonlight Serenade",
              text:
                "Mr. Zhang, with a family of five, has many requirements for thekitchen. He likes the dark wood color on the door, dark grey color on the countertop. In addition to the most basic require-ments of a reasonable layout, color matching, he hopes that the kitchen can have more storage functions. he hopes that the kitchen can have more storage functions.",
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
              text:
                "The farmhouse kitchen: it begs for the smell of freshly baked bread and the sound of family gatherings.Even if you've never stepped foot outside city limits, Weathered Bark reminds us of simpler times.",
              imgList: [
                { id: 221, title: "", src: detail221 },
                { id: 222, title: "", src: detail222 },
                { id: 223, title: "", src: detail223 },
                { id: 224, title: "", src: detail224 },
                { id: 225, title: "", src: detail225 },
                { id: 226, title: "", src: detail226 },
                { id: 227, title: "", src: detail227 },
                { id: 228, title: "", src: detail228 },
                { id: 229, title: "", src: detail229 }
              ]
            },
            {
              id: 230,
              title: "Ivory Tusk",
              text:
                "The fine grained finish of Ivory Tusk is a delight to those who love the look of white but want to see wood grain.  This finish pairs well with gray quartz and other neutral shades",
              src: detail230,
              imgList: [
                { id: 231, title: "", src: detail231 },
                { id: 232, title: "", src: detail232 },
                { id: 233, title: "", src: detail233 },
                { id: 234, title: "", src: detail234 },
                { id: 235, title: "", src: detail235 },
                { id: 236, title: "", src: detail236 },
                { id: 237, title: "", src: detail237 },
                { id: 238, title: "", src: detail238 },
                { id: 239, title: "", src: detail239 }
              ]
            },
            {
              id: 240,
              title: "Ash Taupe",
              text:
                "Ash Taupe is widely popular in both home and office settings.  The gray tone crosses traditional, transitional and contemporary lines.  Use this finish both horizontally and vertically to create interest.",
              src: detail230,
              imgList: [
                { id: 241, title: "", src: detail241 },
                { id: 242, title: "", src: detail242 },
                { id: 243, title: "", src: detail243 },
                { id: 244, title: "", src: detail244 },
                { id: 245, title: "", src: detail245 },
                { id: 246, title: "", src: detail246 },
                { id: 247, title: "", src: detail247 },
                { id: 248, title: "", src: detail248 },
                { id: 249, title: "", src: detail249 }
              ]
            },
            {
              id: 250,
              title: "Silver Gray",
              text:
                "Silver Gray has an interesting depth and can be quite dramatic.  The soft appearance of this finish lets your eye focus on splashes of color in an otherwise neutral room.  Silver Gray is timeless.",
              src: detail250,
              imgList: [
                { id: 251, title: "", src: detail251 },
                { id: 252, title: "", src: detail252 },
                { id: 253, title: "", src: detail253 },
                { id: 254, title: "", src: detail254 },
                { id: 255, title: "", src: detail255 },
                { id: 256, title: "", src: detail256 },
                { id: 257, title: "", src: detail257 },
                { id: 258, title: "", src: detail258 },
                { id: 259, title: "", src: detail259 }
              ]
            },
            {
              id: 260,
              title: "Navy Gray",
              text:
                "Navy Gray is evenly grained; almost striped in its appearance. It is a perfect enhancement to a room that demands order and organization.  The blue undertone is unique to wood finishes.",
              src: detail260,
              imgList: [
                { id: 261, title: "", src: detail261 },
                { id: 262, title: "", src: detail262 },
                { id: 263, title: "", src: detail263 },
                { id: 264, title: "", src: detail264 },
                { id: 265, title: "", src: detail265 },
                { id: 266, title: "", src: detail266 },
                { id: 267, title: "", src: detail267 },
                { id: 268, title: "", src: detail268 },
                { id: 269, title: "", src: detail269 }
              ]
            },
            {
              id: 270,
              title: "Mossy Oak",
              text:
                "Our natural charcoal wood finish combines the advantages of its deep black color with the depth, contrast and natural wood feeling that its veins of woodgrain add to its character.  It is the beautiful combination of elegant, contemporary and natural design.",
              src: detail270,
              imgList: [
                { id: 271, title: "", src: detail271 },
                { id: 272, title: "", src: detail272 },
                { id: 273, title: "", src: detail273 },
                { id: 274, title: "", src: detail274 },
                { id: 275, title: "", src: detail275 },
                { id: 276, title: "", src: detail276 },
                { id: 277, title: "", src: detail277 },
                { id: 278, title: "", src: detail278 },
                { id: 279, title: "", src: detail279 }
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
          title: "UPTOWN",
          detailList: [
            {
              id: 280,
              title: "White Linen",
              text:
                "How daring are you? White Linen breaks the mold in cabinetry.  The pattern of this finish is a statement within itself.  Pair with solid quartz and a bold accent wall as a backdrop.  So sophisticated!",
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
      ]
    };
  },
  props: {
    // vrData: {
    //   type: Array,
    //   default: []
    // },
    active: {
      type: Number,
      default: 0
    }
  },
  watch: {
    //监测对象类型
    // vrData: {
    //   handler: function(val, oldval) {
    //     console.log(val, oldval);
    //   },
    //   deep: true //对象内部的属性监听，也叫深度监听
    // },
    active(val, oldval) {
      console.log(val, oldval);
      let _this = this;
      _this.detailActive = 0;
      _this.imgActive = 0;
    }
  },
  mounted() {
    // console.log(this.active);
  },
  methods: {
    // initSwiper() {
    //   let _this = this;
    //   _this.vrSwiper = new Swiper(".swiper-container.vr-swiper", {
    //     navigation: {
    //       nextEl: ".vr-next",
    //       prevEl: ".vr-prev"
    //     },
    //     on: {
    //       transitionEnd: function() {
    //         let active = _this.vrSwiper.activeIndex;
    //         _this.active = active;
    //         _this.detailActive = 0;
    //         _this.imgActive = 0;
    //       }
    //     }
    //   });
    // },
    onOpenVR: function(url) {
      console.log(url);
      window.open(url);
    },
    onCloseVR: function() {
      this.$emit("onCloseVR");
    },
    onNext: function() {
      let domSelect = document.querySelector(".vr-next");
      if (this.active == this.vrData.length - 1) return;
      // this.active = this.active + 1;
      this.$emit("onChangeActive", this.active + 1);
      this.detailActive = 0;
      this.imgActive = 0;
    },
    onPrev() {
      let domSelect = document.querySelector(".vr-prev");
      if (this.active == 0) return;
      // this.active = this.active - 1;
      this.$emit("onChangeActive", this.active - 1);
      this.detailActive = 0;
      this.imgActive = 0;
    },
    //改变材料
    onChangeDetail(index) {
      this.detailActive = index;
      this.imgActive = 0;
    },
    //改变图片
    onChangeImg(index) {
      this.imgActive = index;
      // console.log(this.active, this.detailActive, this.imgActive);
    }
  }
};
</script>
<style lang="less" scoped>
.vr {
  position: relative;
  .shade {
    position: fixed;
    z-index: 401;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
  }
  .vr-swiper {
    position: fixed;
    z-index: 402;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13.5rem;
    height: 8.1rem;
    display: flex;
    .left {
      display: inline-block;
      width: 10.3rem;
      height: 8.1rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .img-list {
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 1.1rem;
        text-align: center;
        .img-item {
          height: 0.9rem;
          width: 0.9rem;
          margin: 0.1rem 0.05rem;
          background-size: cover;
          display: inline-block;
          box-sizing: content-box;
          cursor: pointer;
          &.img-item-active {
            border: 2px solid #32b67a;
          }
          // position: relative;
          // img {
          //   width: auto;
          //   height: 100%;
          //   position: absolute;
          //   top: 0;
          //   left: 0;
          //   z-index: 1;
          // }
        }
      }
    }
    .right {
      display: inline-block;
      width: 4.2rem;
      padding: 0 0.3rem;
      box-sizing: border-box;
      background: white;
      position: relative;
      background-size: 4.09rem 1.23rem;
      background-position: 0rem 10%;
      background-repeat: no-repeat;
      .title {
        margin-top: 0.6rem;
        font-size: 0.28rem;
        font-family: Roboto;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        white-space: nowrap;
        @media screen and (max-width: 1400px) {
          font-size: 0.24rem;
          margin-top: 0.4rem;
        }
      }
      .split-line {
        width: 1.24rem;
        height: 3px;
        background: #32b67a;
        margin: 0.3rem 0 0.6rem 0;
        @media screen and (max-width: 1400px) {
          margin: 0.1rem 0 0.2rem 0;
        }
      }
      .intro-block {
        display: flex;
        .intro-left {
          width: 100%;
          .cover-list {
            margin-bottom: 0.2rem;
            .cover-item {
              width: 1.1rem;
              height: 1.4rem;
              box-sizing: border-box;
              padding-top: 0.14rem;
              display: inline-block;
              margin-top: 0.2rem;
              vertical-align: top;
              cursor: pointer;
              .cover {
                border-radius: 50%;
                width: 0.66rem;
                height: 0.66rem;
                background-size: cover;
                margin: 0 auto;
              }
              .name {
                text-align: center;
                font-size: 0.14rem;
                font-family: Roboto;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                margin: 0.06rem auto 0 auto;
                width: 0.9rem;
              }
              &.cover-item-active {
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 10px 24px 0px rgba(97, 97, 97, 0.28);
                border-bottom: 2px solid rgba(50, 182, 122, 1);
              }
            }
          }
          .intro-img {
            width: 1.2rem;
            height: 100%;
          }
        }
      }
      .item-name-description {
        margin-top: 0.3rem;
        @media screen and (max-width: 1400px) {
          margin-top: 0.2rem;
        }
      }
      .text {
        font-size: 14px;
        font-family: Roboto;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        line-height: 22px;
        margin-top: 0.2rem;
        word-break: break-all;
        @media screen and (max-width: 1400px) {
          margin-top: 0.2rem;
          line-height: 20px;
          font-size: 12px;
        }
      }
      .btn {
        position: absolute;
        bottom: 0;
        width: 105%;
        padding: 36px 100px;
        background: #32b67a;
        left: -5%;
        font-size: 22px;
        font-family: Roboto;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 24px;
        text-align: center;
        cursor: pointer;
        @media screen and (max-width: 1400px) {
          font-size: 14px;

          line-height: 20px;
        }
      }
    }
  }
  .close {
    position: fixed;
    z-index: 402;
    right: 10%;
    top: 18%;
    left: 93%;
    top: 10%;
    width: 18px;
    height: 18px;
    cursor: pointer;
    img {
      width: 100%;
    }
    @media screen and (max-width: 1400px) {
      right: 10%;
      top: 21%;
    }
  }
  .vr-prev {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-image: url("./pro-intro-pre.png");
    background-size: 56px 56px;
    position: fixed;
    z-index: 402;
    top: 50%;
    left: 4%;
    outline: none;
    border: transparent;
  }
  .vr-next {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-image: url("./pro-intro-next.png");
    background-size: 56px 56px;
    position: fixed;
    z-index: 402;
    top: 50%;
    left: 92%;
    outline: none;
    border: transparent;
  }
  .touch-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>