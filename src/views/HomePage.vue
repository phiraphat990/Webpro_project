<template>
  <div>
  <!-- <div style="background-color: #E5FDD1"> -->
    <div class="level">
      <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="p-6">
          <p class="title is-size-1">Welcome To <br> the Plants Store</p>
          <p class="subtitle mt-3">
            At The Plant Store we put an emphasis on Plants, <br />
            Prices, Community, Education and Mental Health.
          </p>
          <div class="has-text-centered">
            <button class="button is-success has-text-weight-bold is-rounded mr-3">
              <router-link to="/login" class="has-text-white">LOGIN</router-link>
            </button>
            
            <button class="button is-warning  has-text-weight-bold is-rounded">
              <router-link to="/signup" class="has-text-danger">SIGN UP</router-link>
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <section class="hero">
      <div class="hero-body">
        <img src="../assets/23.png">
      </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true,

    };
  },
};
</script>

<style scoped>
</style>