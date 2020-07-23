<!--
  * 自行创建插槽调试
-->
<template>
  <div class="card">
    <div class="header">
      <div class="header-tag" v-if="headerTag">
        <van-tag plain type="danger">{{headerTag}}</van-tag>
      </div>
      <div class="title text-overflow">这是很长很长的标题这是很长很长的标题这是很长很长的标题这是很长很长的标题</div>
      <div class="date">2020-12-12</div>
    </div>
    <div class="text">这是很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的内容</div>
    <div class="opt">
      <div class="tag">
        <van-tag class="tag-menu" round type="default">标签</van-tag>
        <van-tag class="tag-menu" round type="default">标签</van-tag>
        <van-tag class="tag-menu" round type="default">标签</van-tag>
      </div>
      <div class="btn">
        <span>1212阅读</span>
        <van-icon class="icon" name="like-o" />
        <van-icon class="icon" name="comment-o" />
        <van-icon class="icon" name="share" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    headerTag: {
      type: String
    }
  }
}
</script>
<style lang="less" scoped>
.card {
  width: 100%;
  background: #fff;
  padding: 24px;
  font-size: 24px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    font-size: 28px;
    color: #010101;
    margin-bottom: 10px;
    .date {
      font-size: 24px;
      flex: none;
      margin-left: 20px;
    }
    .header-tag {
      flex: none;
      margin-right: 10px;
    }
  }
  .text {
    line-height: 36px;
    color: #4c4c4c;
  }
  .opt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    .tag {
      .tag-menu {
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .btn {
      display: flex;
      align-items: center;
      font-size: 24px;
      color: #ccc;
      &>* {
        margin-left: 20px;
      }
      .icon {
        font-size: 28px;
      }
    }
  }
}
</style>