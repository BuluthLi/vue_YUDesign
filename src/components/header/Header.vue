<template>
  <div class="header" id="header">
    <div class="nav-box">
      <div class="logo-box">
        <img src="./LOGO.jpg" alt class="logo" />
      </div>
      <div
        class="nav-item"
        :class="current==index?'active':''"
        v-for="(item,index) in navList"
        :key="index"
        @click="onChagePage(item.path,item.id)"
      >
        <div class="nav-item-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      navList: [
        {
          id: 0,
          name: "HOME",
          path: "/home",
          hrefName: "home"
        },
        {
          id: 1,
          name: "COLLECTIONS",
          path: "/product",
          hrefName: "product"
        },
        {
          id: 2,
          name: "ABOUT US",
          path: "/about",
          hrefName: "about"
        },
        {
          id: 3,
          name: "JOIN US",
          path: "/join",
          hrefName: "join"
        }
      ]
    };
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0);
      if (to && to.path) {
        setTimeout(() => {
          this.initScroll();
        }, 300);
      }
      if (to.path == "/home") {
        this.current = 0;
        return;
      }
      if (to.path == "/product") {
        this.current = 1;
        return;
      }
      if (to.path == "/about") {
        this.current = 2;
        return;
      }
      if (to.path == "/join") {
        this.current = 3;
        return;
      }
    }
  },
  mounted: function() {
    let currentPath = window.location.href;
    window.addEventListener("scroll", this.initScroll);
    for (let i = 0; i < this.navList.length; i++) {
      if (currentPath.indexOf(this.navList[i].hrefName) != -1) {
        this.current = this.navList[i].id;
      }
    }
    setTimeout(() => {
      this.initScroll();
    }, 300);
  },
  methods: {
    onChagePage: function(path, id) {
      this.current = id;
      // 禁止跳转到当前页面
      let currentPath = this.$router.history.current.path;
      if (currentPath == path) return;
      this.$router.push({
        path: path,
        query: {}
      });
    },
    initScroll() {
      let documentObj = document.documentElement || document.body;
      let documentHeight = window.innerHeight || documentObj.clientHeight;
      let goalData = document.getElementsByClassName("scroll-base");
      for (let i = 0; i < goalData.length; i++) {
        let bouding = goalData[i].getBoundingClientRect();
        if (bouding.top <= documentHeight - 20) {
          goalData[i].classList.remove("scroll-hidden");
          goalData[i].classList.add("scroll-visible");
        } else {
          goalData[i].classList.remove("scroll-visible");
          goalData[i].classList.add("scroll-hidden");
        }
      }
    },
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  background: white;
  .nav-box {
    margin: 0 auto;
    width: 1170px;
    height: 150px;
    display: flex;
    align-items: center;
    line-height: 150px;
    .logo-box {
      width: 150px;
      height: 150px;
      text-align: center;
      margin-right: 90px;
      .logo {
        width: 150px;
        height: 150px;
        vertical-align: middle;
      }
    }
    .nav-item {
      margin: 0 30px;
      width: 156px;
      text-align: center;
      height: 26px;
      line-height: 28px;
      font-size: 18px;
      font-weight: 300;
      color: rgba(102, 102, 102, 1);
      position: relative;
      cursor: pointer;
      &.active::before {
        content: "";
        position: absolute;
        top: -14px;
        left: 50%;
        width: 2px;
        height: 10px;
        background: #444444;
      }
      &.active::after {
        content: "";
        position: absolute;
        bottom: -14px;
        left: 50%;
        width: 2px;
        height: 10px;
        background: #444444;
      }
    }
  }
}
</style>