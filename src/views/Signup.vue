<!-- eslint-disable vue/multi-word-component-names -->
<template >
  <div class="section mt-5">
    <h1 class="has-text-centered is-size-1 has-text-weight-bold">
      Create Account
    </h1>

    <div class="column is-half is-offset-one-quarter">
      <div class="control">
        <label class="radio">
          <input type="radio" name="role" value="seller" v-model="role" />
          Seller
          <input type="radio" name="role" value="customer" v-model="role" />
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
        <input class="input" type="email" placeholder="Email" v-model="email" />
      </div>
    </div>
    <div class="column is-half is-offset-one-quarter">
      <label class="label">Password</label>
      <div class="control">
        <input
          class="input"
          type="password"
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
          type="password"
          placeholder="Confirm Password"
          v-model="confirmpassword"
        />
      </div>
    </div>

    <div class="control has-text-centered">
      <button
        class="button has-background-success-dark has-text-white has-text-weight-bold is-rounded"
        
      > <router-link to="/login" class="has-text-black"
            >CREATE</router-link
          >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      signup: [],
    };
  },
  methods: {
    // Signup(role, firstname, lastname, email, password, confirmpassword) {
    //   this.role = role;
    //   this.firstname = firstname;
    //   this.lastname = lastname;
    //   this.email = email;
    //   this.password = password;
    //   this.confirmpassword = confirmpassword;
    //   this.signup.push({
    //     role: this.role,
    //     firstname: this.firstname,
    //     lastname: this.lastname,
    //     email: this.email,
    //     password: this.password,
    //     confirmpassword: this.confirmpassword,
    //   });
    //   localStorage.setItem("allUser", JSON.stringify(this.signup));
    // },
  },
};
</script>
