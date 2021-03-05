<template>
  <div class="header">
    <router-link to="/" tag="div" class="navbar-brand">
      <img src="../assets/logo.png" alt="">
    </router-link>
    <div class="end-btn-wrapper">
      <div class="sign no-sign" v-if="!user.isLogin">
        <router-link :to="'/login'">
          <a-button type="primary" ghost>登录</a-button>
        </router-link>
        <router-link :to="'/register'">
          <a-button type="primary" ghost>注册</a-button>
        </router-link>
      </div>
      <div class="sign is-sign" v-else>
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            Hover me
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">新建文章</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">编辑</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">退出</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue'
import { UserProps } from '../store'
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  components: {
    DownOutlined
  }
})
</script>

<style scoped>
  .header{
    height: 70px;
    padding: 15px 200px;
    background-color: #0d6efd;
    display: flex;
    justify-content: space-between;
  }
  .navbar-brand{
    line-height: 70px;
    display: flex;
    align-items: center;
  }
  .navbar-brand img{
    width: 25px;
    height: 25px;
  }
  .end-btn-wrapper{
    display: flex;
  }
  .sign{
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sign .ant-dropdown-link{
    color: #fff;
  }
</style>
