<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <nav
      class="navbar has-shadow has-background-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
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
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"> Home </a>

          <a class="navbar-item"> All Plants </a>
          <a class="navbar-item"> Check Order </a>
          <a class="navbar-item"> Check Payment </a>

          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Check Order </a>
            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
            </div>
          </div> -->

          <a class="navbar-item"> News </a>

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
              <a class="navbar-item"> Manage Account </a>
              <a class="navbar-item"> Log out </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
  
  <script>

</script>