<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <h3 class="form-title">Sign Up</h3>
    <div class="form-group">
      <label>First Name</label>
      <input
        type="text"
        class="form-control"
        v-model="first_name"
        placeholder="First Name"
      />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input
        type="text"
        class="form-control"
        v-model="last_name"
        placeholder="Last Name"
      />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input
        type="text"
        class="form-control"
        v-model="email"
        placeholder="Email"
      />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
        type="text"
        class="form-control"
        v-model="password"
        placeholder="Password"
      />
    </div>
    <div class="form-group">
      <label>Password confirm</label>
      <input
        type="text"
        class="form-control"
        v-model="password_confirmation"
        placeholder="Confirm password"
      />
    </div>
    <button class="btn btn-primary btn-block">Sign Up</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    async onSubmit() {
      console.log("Form submitted");
     try{
const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      console.log(data, "dataaa");
      const response = await axios.post("api/register", data);
      console.log(response, "respomse");
      alert("Sign up successful! Login with your email and Password")
      this.$router.push("/login");
     } catch{
      alert("Sign up failed! check your details and try again")
     }
    },
  },
};
</script>
<style scoped>
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
