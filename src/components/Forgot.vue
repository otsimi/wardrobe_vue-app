<template>
    <form class="login-form" @submit.prevent="onSubmit">
        <h3 class="form-title">Forgot Password</h3>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control"  v-model="email" placeholder="Email"/>

        </div>
        <button class="btn btn-primary btn-block">Submit</button>
    </form>
</template>
<script>
import axios from 'axios'

export default{
name: 'Forgot',
data(){
    return{
        email: ''
    }
},
methods:{
   async onSubmit(){
    const response = await axios.post('/forgot',{
        email:this.email
    });
    console.log(response, 'response')

    }
}
}
    
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
