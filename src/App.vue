<template>
  <div id="app">
    <nav
      class="navbar"
      style="background-color: #8db596"
      role="navigation"
      aria-label="main navigation"
    >
      <!-- <div class="navbar-brand">
        <a class="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div> -->

      <div id="navbar" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"> <router-link to="/">Home</router-link> </a>

          <a class="navbar-item" v-if="role == 'customer'">
            <router-link to="/allProduct">All Plants</router-link>
          </a>
          <a class="navbar-item" v-if="role == 'seller'">
            <router-link to="/checkOrder">Check Order </router-link></a
          >
          <a class="navbar-item" v-if="role == 'seller'">
            <router-link to="/manageProduct">Manage Products </router-link>
          </a>

          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Check Order </a>
            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
            </div>
          </div> -->

          <a class="navbar-item" v-if="role == 'customer'"> News </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <figure class="image is-24x24 my-auto">
                <img
                  class="is-rounded"
                  :src="`https://bulma.io/images/placeholders/128x128.png`"
                />
              </figure>
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item"
                ><router-link to="/manageAccount"
                  >Manage Account
                </router-link></a
              >
              <a class="navbar-item"> <router-link to="/"
                  >Log out
                </router-link> </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons" v-if="!role">
              <a class="button is-light">
                <router-link to="/login">Log in</router-link></a
              >
            </div>
            <div v-if="!role">
              <a class="button is-primary">
                <strong><router-link to="/signup">Sign up</router-link></strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      role:'seller'
    };
  },
};
</script>
