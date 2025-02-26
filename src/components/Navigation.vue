<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <router-link to="/" class="nav-link nav-hover">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/login" class="nav-link nav-hover">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/register" class="nav-link nav-hover">Sign Up</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <button @click="logout" class="nav-link btn btn-link nav-hover">Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      this.isAuthenticated = !!localStorage.getItem("user_id");
    },
    logout() {
      localStorage.removeItem("user_id");
      localStorage.removeItem("user_name");
      this.isAuthenticated = false;
      this.$router.push("/login");
    },
  },
  watch: {
    "$route": "checkAuth",
  },
};
</script>

<style scoped>

.nav-hover {
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  padding: 8px 15px;
  border-radius: 5px;
}

.nav-hover:hover {
  color: white !important;
  background-color: #274d60 !important;
}
.nav-hover.btn-link {
  border: none;
  background: none;
  text-decoration: none;
  color: #274d60;
  font-size: 16px;
}

.nav-hover.btn-link:hover {
  color: white !important;
  background-color: #274d60 !important;
  text-decoration: none;
}
</style>
