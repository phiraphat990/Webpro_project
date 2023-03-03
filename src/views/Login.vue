<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div >
    <div class="section mt-6">
      <h1 class="has-text-centered is-size-1 has-text-weight-bold">Login</h1>
      
      <div class="column is-half is-offset-one-quarter">
        <label class="label">Email</label>
        <div>
          <input
            class="input"
            type="text"
            placeholder="Email"
            v-model="email"
          />
        </div>
      </div>
      <div class="column is-half is-offset-one-quarter">
        <label class="label">Password</label>
        <div>
          <input
            class="input"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>

      <div>
        <p class="has-text-centered mt-1 mb-4">Forgot your password?</p>
      </div>

      <div class="has-text-centered">
        <button class="button has-background-success-dark has-text-weight-bold is-rounded" @click="loginCustomer()">
          SIGN IN Customer
        </button>
      </div>
      <div class="has-text-centered mt-4">
        <button class="button has-background-success-dark has-text-weight-bold is-rounded" @click="loginSeller()">
          SIGN IN Seller
        </button>
      </div>
      <div>
        <p class="has-text-centered mt-4">
          Create account
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import users from '../views/user.json'
export default {
  data() {
    return {
      email: "",
      password: "",
      users: users,
    };
  },
  methods: {
    loginSeller(){
      if(this.email === "63070125@gmail.com" && this.password === "012345"){
        alert("User is Seller")
        this.$router.push({ path: '/manageProduct'})
      }
      else if(this.email === "" || this.password === ""){
        alert("Please input your data")
      }
      else{
        alert("User is NOT Seller")
      }
    },
    loginCustomer() {
      if(this.email === "Sunthorn@gmail.com" && this.password === "123456"){
        alert("User is Customer")
        this.$router.push({ path: '/allProduct'})
      }
      else if(this.email === "" || this.password === ""){
        alert("Please input your data")
      }
      else{
        alert("User is NOT Customer")
      }
    },
  },
};
</script>
