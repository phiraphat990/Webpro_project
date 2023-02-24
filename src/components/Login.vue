<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-6 ">
    <h1 class="has-text-centered is-size-1 has-text-weight-bold">Login</h1>
    <div class="column is-half is-offset-one-quarter">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="text" placeholder="Email" v-model="email"/>
      </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="text" placeholder="Password" v-model="password"/>
      </div>
    </div>

    <div><p class="has-text-centered mt-1 mb-4">Forgot your password?</p></div>

    <div class="control has-text-centered">
      <button
        class="button has-background-success-dark has-text-white has-text-weight-bold"
      >
        SIGN IN
      </button>
    </div>
    <div><p class="has-text-centered mt-4">Create account</p></div>
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      email:"",
      password:""
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>