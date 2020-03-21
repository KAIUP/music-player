<template>
  <div class="service">
    <div class="service-item">
      <div>
        <img src="~assets/img/profile/music.png" alt="">
        <div class="text">本地</div>
      </div>
      <div>
        <img src="~assets/img/profile/his.png" alt="">
        <div class="text">最近</div>
      </div>
      <div>
        <img src="~assets/img/profile/download.png" alt="">
        <div class="text">下载</div>
      </div>
      <div>
        <img src="~assets/img/profile/like.png" alt="">
        <div class="text">喜欢</div>
      </div>
    </div>
    <div class="user-song">
      <div>
        <span class="create">创建歌单0</span>
        <span class="collect">收藏歌单0</span>
      </div>
      <div class="import">+ 导入外部歌单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style>
  .service-item {
    display: flex;
    justify-content: space-around;
  }

  .service img {
    width: 28px;
    height: 28px;
  }

  .service .text {
    font-size: 13px;
  }

  .user-song {
    margin: 30px 15px 0;
  }

  .user-song .create {
    font-weight: 600;
    font-size: 14px;
  }

  .user-song .collect {
    font-size: 14px;
    margin-left: 10px;
  }

  .user-song .import {
    width: 100%;
    color: #777;
    font-size: 13px;
    margin: 13px 0;
    padding: 10px 0;
    text-align: center;
    border: 1px solid#ccc;
    border-radius: 5px;
  }
</style>