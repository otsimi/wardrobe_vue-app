<template>
  <div id="app" :class="{ 'auth-body': isAuthPage }">
    <Navigation />
    <div v-if="isAuthPage" class="auth-wrapper">
      <div class="auth-inner">
        <router-view />
      </div>
    </div>
    <div v-else class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
  computed: {
    isAuthPage() {
      return this.$route.path.includes("login") || this.$route.path.includes("register")|| this.$route.path.includes("forgot");
    },
  },
};
</script>

<style>

body {
  background-color: #274d60;
  padding-top: 60px;
}
.auth-body {
  background-color: #274d60;
}
.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.auth-inner {
  width: 450px;
  margin: auto;
  background: #e3f2fd;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 50px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}
.main-content {
  min-height: 100vh;
  background-color: #274d60;
  padding: 20px;
}

</style>
