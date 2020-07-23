<template>
  <div class="warp">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-tabs v-model="tab" @change="tabChange">
      <van-tab
        v-for="(item, index) in tabList"
        :key="index"
        :title="item.name"/>
    </van-tabs>
    <van-list>
      <card class="card" v-for="(item, index) in 10" :key="index"/>
    </van-list>
  </div>
</template>
<script>
import Card from '@/components/card';
export default {
  name: 'Flash',
  components: {
    Card
  },
  data() {
    return {
      tabList: [
        { name: '全部' },
        { name: '加红' },
        { name: '看板' },
        { name: '基金' },
      ],
      tab: 0
    }
  },
  methods: {
    tabChange() {
      console.log(this.tab);
    }
  }
}
</script>
<style lang="less" scoped>
.warp {
  .card {
    margin-bottom: 20px;
  }
}
</style>