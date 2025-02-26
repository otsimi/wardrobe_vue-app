<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <h3 class="form-title">Login</h3>

    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
        placeholder="Enter your email"
      />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="Enter your password"
      />
    </div>

    <button class="btn btn-primary btn-block">Login</button>
    <p class="forgot-password text-right">
      <router-link to="/forgot">Forgot password</router-link>
    </p>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.post("api/login", data);

        localStorage.setItem("user_id", response.data.user.id);
        console.log(response.data.user.id, 'Logged user')
        localStorage.setItem(
          "user_name",
          response.data.user.first_name + " " + response.data.user.last_name
        );
        alert("Login successful!");

        this.$router.push("/");
        // location.reload();
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed, Incorrect email/password! Try again or Sign up")
      }
      
    },
  },
};
</script>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-title {
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: #274d60;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-size: 14px;
  font-weight: 600;
  color: #274d60;
}

.form-control {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #6ba3be;
  font-size: 16px;
}

.form-control:focus {
  border-color: #274d60;
  outline: none;
}

.btn-primary {
  width: 100%;
  padding: 10px;
  background-color: #6ba3be;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary:hover {
  background-color: #508a9b;
}
</style>
