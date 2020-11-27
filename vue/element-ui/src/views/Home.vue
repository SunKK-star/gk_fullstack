<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="title">旅梦管理系统</div>
        <div class="info">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">退出登录</el-dropdown-item>
              <el-dropdown-item command="2">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <span>学生列表</span>
              </template>
              <el-menu-item index="/home/userInfo">
                <span slot="title">小敏</span>
              </el-menu-item>
              <el-menu-item index="/home/userInfo">
                <span slot="title">酒神</span>
              </el-menu-item>
              <el-menu-item index="/home/form">
                <span slot="title">周老板</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">作业情况</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  created() {
    this.userName = localStorage.getItem("user");
  },
  methods: {
    handleCommand(e) {
      // console.log(e);
      if (e == 1) {
        this.$router.push("/");
        localStorage.removeItem("user");
      }
    },
  },
};
</script>
  
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
}

.el-container:nth-child(7) .el-aside {
}
.el-container {
  height: calc(100vh - 60px);
}

.title {
  float: left;
  font-weight: 700;
  font-size: 24px;
}
.info {
  float: right;
}
.el-menu {
  height: 100%;
}
.el-menu li {
  min-width: auto !important;
}
</style>