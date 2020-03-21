<template>
  <div class="comment-main">
    <div class="title">热门评论</div>
    <div class="comment-list" v-for="(item,index) in comment" :key="index">
      <div class="about-user">
        <div class="user-info">
          <div class="writer">{{item.user.nickname}}</div>
          <span class="upload-time">{{item.time | showDate}}</span>
          <img :src="item.user.avatarUrl" class="avatar"/>
        </div>
        <div class="like-count">
          <span class="count">{{item.likedCount | likedCount}}</span>
          <img src="~assets/img/comment/good.png" alt="" class="good">
        </div>
      </div>
      <div class="comment-cont">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'

export default {
  name: 'commentMain',
  props: {
    comment: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    showDate(value) {
      //1.将时间戳转换为Data对象
      const date = new Date(value)
      //2.将Data进行格式化
      return formatDate(date,'yyyy年MM月dd日')
    },
    likedCount(count) {
      return count >= 10000 ? (count/10000).toFixed(1) + '万' : count
    }
  }
}
</script>

<style scoped>
  .title {
    font-size: 14px;
    font-weight: 600;
    padding: 15px 10px;
  }

  .comment-list {
    padding: 5px 15px 10px;
  }

  .about-user {
    position: relative;
    display: flex;
  }

  .user-info {
    position: relative;
    padding-left: 38px;
  }

  .user-info .avatar{
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .user-info .writer {
    font-size: 12px;
  }

  .user-info .upload-time {
    font-size: 10px;
    color: #aaa;
  }

  .about-user .like-count {
    position: absolute;
    top: 5px;
    right: 0;
    display: flex;
    align-items: center;
  }

  .like-count .count {
    font-size: 13px;
    color: #bbb;
    padding: 3px 5px 0 0;
  }

  .like-count .good {
    width: 17px;
    height: 17px;
  }

  .comment-cont {
    font-size: 14px;
    margin-left: 38px;
    padding: 7px 0;
    border-bottom: 1px solid #eee;
  }
</style>