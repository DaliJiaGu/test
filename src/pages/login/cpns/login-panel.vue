<template>
  <div class="login-panel">
    <h1 class="title">学生就业吧</h1>
    <el-tabs type="border-card" class="demo-tabs" :stretch="true">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="LoginAccountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="control">
      <el-link type="primary">忘记密码</el-link>
      <el-link type="primary">我是企业</el-link>
    </div>
    <div class="login-btn">
      <el-button type="primary" @click="handleLoginClick">登录</el-button>
      <el-button type="primary">注册</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    let isKeepPassword = ref(true);
    // 获取loginaccoun这个组件对象
    const LoginAccountRef = ref<InstanceType<typeof LoginAccount>>();
    const handleLoginClick = () => {
      LoginAccountRef.value?.loginAction();
    };

    // const handRegisterClick = () => {

    // }
    return {
      isKeepPassword,
      handleLoginClick,
      LoginAccountRef
      // handRegisterClick
    };
  }
});
</script>

<style scoped>
.login-panel {
  width: 320px;
  /* 提高用户体验感，让组件视觉上居中 */
  margin-bottom: 130px;
}
.title {
  text-align: center;
}
.demo-tabs {
  margin-top: 16px;
  box-shadow: 0px 0px 10px -3px grey;
}
.control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
</style>
