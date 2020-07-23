<template>
  <div class="warp">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-grid :column-num="4">
      <van-grid-item icon="volume" text="有声早报"/>
      <van-grid-item icon="chart-trending-o" text="明日主题前瞻"/>
      <van-grid-item icon="warning" text="每日投资预警"/>
      <van-grid-item icon="good-job" text="每日收评"/>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: 'ContentReference',
}
</script>
<style lang="less" scoped>
.warp {
}
</style>