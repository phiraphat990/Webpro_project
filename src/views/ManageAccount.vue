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
          <button class="button is-warning has-text-weight-bold is-rounded">
            Edit
          </button>
        </div>
      </div>
      <div
        class="hero level-item is-fullheight column is-5 has-background-info-light"
        v-for="(user_info, index) in users"
        :key="index"
      >
        <div class="pt-6 pb-6 ml-6 mr-6" v-if="user_info.role == 'seller'">
          <div class="column">
            <label class="label">First Name</label>
            <div>
              <input
                class="input"
                type="text"
                :value="user_info.first_name"
                :disabled="disabled"
                :v-model="e_first_name"
              />
            </div>
          </div>

          <div class="column">
            <label class="label">Last Name</label>
            <div>
              <input
                class="input"
                type="text"
                :value="user_info.last_name"
                :disabled="disabled"
                :v-model="e_last_name"
              />
            </div>
          </div>

          <div class="column">
            <label class="label">Phone Number</label>
            <div>
              <input
                class="input"
                type="text"
                :value="user_info.phone"
                :disabled="disabled"
                :v-model="e_phone"
              />
            </div>
          </div>

          <div class="column">
            <label class="label">Email</label>
            <div>
              <input
                class="input"
                type="email"
                :value="user_info.email"
                :disabled="disabled"
                :v-model="e_email"
              />
            </div>
          </div>

          <div class="level">
            <button
              class="button is-danger has-text-weight-bold is-rounded"
              @click="disabled = false"
            >
              Edit
            </button>
            <button
              class="button is-info has-text-weight-bold is-rounded"
              @click="Save(user_info)"
            >
              Save
            </button>
            <button class="button is-warning has-text-weight-bold is-rounded" 
            @click="Update()">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userData from '../views/user.json'
export default {
  data() {
    return {
      disabled: true,
      e_first_name: "",
      e_last_name: "",
      e_phone: "",
      e_email: "",
      users: userData,
    };
  },
  methods: {
    Save(user_info) {
      this.disabled = true;
      user_info.first_name = this.e_first_name
      user_info.last_name = this.e_last_name
      user_info.phone = this.e_phone
      user_info.email = this.e_email
    },
  },
};
</script>

<style>
</style>