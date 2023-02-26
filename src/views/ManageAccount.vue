<template>
  <div>
    <div class="mt-5">
      <p class="has-text-centered is-size-1 has-text-weight-bold">
        User Profile
      </p>
    </div>

    <div class="section level">
      <div
        class="hero level-item is-fullheight p-6 has-background-primary-light"
      >
        <p class="title has-text-centered mb-5 mt-6">Profile Picture</p>
        <div class="columns is-centered">
          <!-- <figure class="image is-square"> -->
            <img class="is-rounded" src="../assets/profile.png" />
            

          <!-- </figure> -->
        </div>

        <div class="has-text-centered">
            <button class="button is-warning  has-text-weight-bold">Edit</button>
          </div>

      </div>
      <div
        class="hero level-item is-fullheight column is-5 has-background-info-light"
      >

        <div class="pt-6 pb-6 ml-6 mr-6">
          <div class="column">
            <label class="label">First Name</label>
            <div>
              <input
                class="input"
                type="text"
                placeholder="First Name"
                readonly
              />
            </div>
          </div>

          <div class="column">
            <label class="label">Last Name</label>
            <div>
              <input
                class="input"
                type="text"
                placeholder="Last Name"
                readonly
              />
            </div>
          </div>

          <div class="column">
            <label class="label">Phone Number</label>
            <div>
              <input
                class="input"
                type="text"
                placeholder="Phone Number"
                readonly
              />
            </div>
          </div>

          <div class="column">
            <label class="label">Email</label>
            <div>
              <input class="input" 
                type="text" 
                placeholder="Email" 
                readonly />
            </div>
          </div>

          <div class="has-text-centered">
            <button class="button is-warning  has-text-weight-bold" @click="Edit()">Edit</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      readonly: false
    }
  },
  methods:{
    Edit(){
      this.readonly = true;
    }
  }
};
</script>

<style>
</style>