<template >
  <div class="section mt-5">
    <h1 class="has-text-centered is-size-1 has-text-weight-bold">
      Create Account
    </h1>

    <div class="column is-half is-offset-one-quarter">
      <div class="control">
        <label class="radio">
          <input type="radio" name="role" />
          Seller
        </label>
        <label class="radio">
          <input type="radio" name="role" />
          Customer
        </label>
      </div>
    </div>

    <div class="column is-half is-offset-one-quarter">
      <label class="label">First Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="First Name"
          v-model="firstname"
        />
      </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
      <label class="label">Last Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Last Name"
          v-model="lastname"
        />
      </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="text" placeholder="Email" v-model="email" />
      </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
      <label class="label">Password</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Password"
          v-model="password"
        />
      </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
      <label class="label">Confirm Password</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Confirm Password"
          v-model="confirmpassword"
        />
      </div>
    </div>

    <div class="control has-text-centered">
      <button
        class="button has-background-success-dark has-text-white has-text-weight-bold"
      >
        CREATE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    };
  },
};
</script>
