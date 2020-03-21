<template>
    <div class="login-button">
      <img src="~assets/img/profile/user.png" alt="">
      <span>立即登录</span>
    </div>
</template>

<script>
export default {
  name: 'LoginButton',
}
</script>

<style>
  .login-button {
    width: 130px;
    height: 30px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    background: #D43C33;
    margin: 30px auto;
    border-radius: 20px;
  }

  .login-button img {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    vertical-align:text-bottom
  }
</style>