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
            <button class="button is-warning  has-text-weight-bold"><router-link to="/allProduct" class="has-text-danger">BUY NOW</router-link></button>
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
    return {};
  },
};
</script>

<style scoped>
</style>