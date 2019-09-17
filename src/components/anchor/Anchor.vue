<template>
  <div class="anchor">
    <a href="#header">
      <div class="top-block">
        <img src="./icon-right-top.png" alt />
        <div class="text">Top</div>
      </div>
    </a>
    <a href="#footer">
      <div class="footer-block">
        <img src="./icon-right-apply.png" alt />
        <div class="text">Apply</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.anchor {
  position: fixed;
  bottom: 400px;
  right: 20px;
  z-index: 301;
  .top-block,
  .footer-block {
    width: 74px;
    height: 74px;
    box-sizing: border-box;
    background: #535353;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin-top:4px;
    img {
      display: block;
      width: 100%;
      padding: 0 26px;
    }
    .text{
        margin-top:10px;
        color:white;
    }
  }
}
</style>