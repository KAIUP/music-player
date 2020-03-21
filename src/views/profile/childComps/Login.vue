<template>
  <div class="login">
    <!-- <div class="slogan">请先进行登陆,登陆后获取更多功能</div> -->
    <div class="login-type">
      <span class="login-type-text" v-for="(item,index) in type" :key="index" :class="{current:currentIndex==index}" @click="typeClick(index)">{{item}}</span>
    </div>
    <van-form @submit="onSubmit" v-if="currentIndex == 1">
      <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="手机/邮箱/账号"
      :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
      />
    <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
    </div>
    </van-form>
    <van-form @submit="onSubmit" v-if="currentIndex == 0">
      <van-field
      v-model="username"
      name="手机号"
      label="手机号"
      placeholder="手机号"
      :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
      v-model="password"
      type="password"
      name="验证码"
      label="验证码"
      placeholder="验证码"
      :rules="[{ required: true, message: '请填写验证码' }]"
      />
    <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
    </div>
    </van-form>
    <div class="about">关于我们</div>
  </div>
</template>

<script>
import { Form,Field,Button } from 'vant';

export default {
  name: 'Login',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      username: '',
      password: '',
      type: ['手机登陆','密码登陆'],
      currentIndex: 1
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    typeClick(index) {
    this.currentIndex = index
  }
  }
}
</script>

<style>
  .login {
    text-align: center;
  }

  .slogan {
    font-size: 20px;
    color: #ee0a24;
    margin: 30px;
  }

  .login-type {
   padding: 30px 0 20px 0;
  }

  .login-type-text {
    padding: 5px 0;
    margin: 0 15px;
  }

  .about {
    margin: 20px;
    font-size: 14px;
    color: #444;
  }

  .current {
    color: #ee0a24;
    border-bottom: 2px solid #ee0a24;
  }
</style>