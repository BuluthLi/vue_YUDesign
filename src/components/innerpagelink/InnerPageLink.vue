<template>
  <!-- 滚动的双菜单的联动，是以滚动操作为唯一标准
  滚动到不同位置，切换当前的current导航条
  点击导航条，也是先主动滚动到改导航条对应的scrollTop的位置，current通过监测被动的改变选中状态，而不是主动改变选中状态，
  他们都是通过滚动，在判断位置
  -->
  <div class="innerpagelink">
    <ul>
      <li v-for="(item,index) in linkData" :key="index">
        <!-- <a :href="item.id" @click="onChangeLink(item.idx)"> -->
        <a @click="onChangeLink(item.idx)">
          <div class="normal" :class="{'active':current==item.idx}">{{item.name}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listHeight: [],
      //滚动条的位置
      scrollY: 0
    };
  },
  props: {
    linkData: {
      type: Array,
      default: []
    }
  },
  computed: {
    current: function() {
      let scrollY = this.scrollY + 40;
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        // 检测数组的最后一个下标越界和对应的位置
        if (scrollY < this.listHeight[0]) {
          return 0;
        }
        if (!height2) {
          return this.listHeight.length - 1;
        }
        if (scrollY >= height1 && scrollY < height2) {
          return i;
        }
      }
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to, from);
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
      this.listHeight = [];
      window.sessionStorage.setItem(
        "listHeight",
        JSON.stringify(this.listHeight)
      );
      setTimeout(() => {
        this._calculateHeight();
      }, 500);
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.initScroll);
    // 请给dom一点时间
    var language = window.sessionStorage.getItem("language")
      ? window.sessionStorage.getItem("language")
      : "zh";
    setTimeout(() => {
      this._calculateHeight();
    }, 500);
  },
  methods: {
    onChangeLink(idx) {
      let y = this.listHeight[idx];
      window.scrollTo(0, y);
    },
    _calculateHeight() {
      let itemList = document.getElementsByClassName("anchor-hook");
      let storageListHeight = JSON.parse(
        window.sessionStorage.getItem("listHeight")
      );
      this.listHeight = storageListHeight ? storageListHeight : [];
      if (this.listHeight.length != 0) return;
      for (let i = 0; i < itemList.length; i++) {
        let targetStyle = itemList[i].getBoundingClientRect();
        // console.log(targetStyle);
        let top = targetStyle.top;
        this.listHeight.push(top);
      }
      window.sessionStorage.setItem(
        "listHeight",
        JSON.stringify(this.listHeight)
      );
    },
    initScroll() {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      this.scrollY = scrollTop;
    }
  }
};
</script>
<style lang="less" scoped>
.innerpagelink {
  position: fixed;
  top: 300px;
  right: 0;
  li {
    list-style: none;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 100;
    .normal {
      color: rgba(220, 220, 220, 1);
      padding: 14px;
      width: 150px;
      text-align: center;
      float: right;
      border-bottom: 1px solid rgba(229, 229, 229, 1);
    }
    .active {
      color: #666666;
      width: 180px;
      text-align: center;
      border-bottom: 1px solid rgba(102, 102, 102, 1);
      transition: all 0.5s ease-in-out;
    }
  }
}
</style>