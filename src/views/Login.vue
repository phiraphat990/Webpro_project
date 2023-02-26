<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="has-background-info">
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
            type="text"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>

      <div>
        <p class="has-text-centered mt-1 mb-4">Forgot your password?</p>
      </div>

      <div class="has-text-centered">
        <button class="button has-background-success-dark has-text-weight-bold">
          <router-link to="/allProduct" class="has-text-white"
            >SIGN IN
          </router-link>
        </button>
      </div>
      <div>
        <p class="has-text-centered mt-4">
          <router-link to="/signup" class="has-text-black"
            >Create account</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
</style>