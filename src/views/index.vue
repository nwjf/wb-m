<template>
  <div class="warp">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div class="title">咨询业务</div>
    <van-grid :column-num="3">
      <van-grid-item icon="home-o" text="7*24小时快讯" url="/flash"/>
      <van-grid-item icon="search" text="深度要闻" url="importantNews"/>
      <van-grid-item icon="search" text="主题推荐"/>
      <van-grid-item icon="search" text="核心内参" url="ContentReference"/>
      <van-grid-item icon="search" text="高端VIP推荐"/>
    </van-grid>
    <div class="title">咨询业务</div>
    <van-grid :column-num="3">
      <van-grid-item icon="home-o" text="个人新闻"/>
      <van-grid-item icon="search" text="个股研报"/>
      <van-grid-item icon="search" text="个股公告"/>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: 'Index'
}
</script>
<style lang="less" scoped>
.warp {
  .title {
    padding: 0 24px;
    height: 80px;
    line-height: 80px;
    font-size: 26px;
  }
}
</style>