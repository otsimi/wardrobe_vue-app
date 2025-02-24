<template>
  <div id="app">
    <Navigation  />
    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
// import Home from './components/Home.vue'
// import Login from './components/Login.vue'
export default {
  name: "App",
  components:{
    Navigation,
    // Home,
    // Login
  }
};
</script>

<style>
body {
  background-color: #274d60;
  padding-top: 60px;
}
.custom-navbar {
  background-color: #6ba3be;
}
.navbar .nav-link {
  color: #000000;
}
.navbar .nav-link:hover {
  color: #e3f2fd;
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
</style>
