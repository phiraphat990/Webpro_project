<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="section">
      <div class="column">
        <!-- card cart component แสดงข้อมูลที่อยู่ใน Localstorage ----->
        <div class="card mb-4">
          <div class="card-content p-0">
            <div class="media">
              <table class="table is-striped ml-6 mr-6" style="width: 100%">
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>

                <tr v-for="(product, index) in cart" :key="index">
                  <td>
                    <img
                      :src="product.image"
                      style="width: 120px; height: 120px"
                    />
                    {{ product.title }}
                  </td>
                  <td>{{ product.price }}</td>
                  <td>
                    <div style="display: flex; justify-content: space-between">
                      <!-- ลดสินค้า- -->
                      <button @click="quantityDel(product, index)">-</button>
                      <!-- จำนวนสินค้า- -->
                      <p>{{ product.quantity }}</p>
                      <!-- เพิ่มสินค้า- -->
                      <button @click="quantityPlus(product)">+</button>
                    </div>
                  </td>
                  <td>{{ product.price * product.quantity }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-size-4">
        <div class="column is-1 is-offset-8">Total</div>
        <div class="column is-3 has-text-right">
          <!-- Total here ---- -->
          {{ Total }}
        </div>
      </div>

      <!-- ที่อยู่ -->
      <h1 class="is-size-4">User Info</h1>
      <div class="columns">
        <div class="column">
          <label class="label">ชื่อผู้รับ - ที่อยู่</label>
          <textarea
            class="textarea"
            placeholder="ชื่อ - นามสกุล ที่อยู่..............."
            v-model="userInfo"
          ></textarea>
          <p></p>
        </div>
      </div>
      <br />

      <button @click="(modal_confirm = !modal_confirm), info.push(userInfo)">
        Check out
      </button>

      <!-- Modal confirm-->
      <div class="modal" :class="{ 'is-active': modal_confirm }">
        <div class="modal-background"></div>
        <div class="modal-card" style="max-width: 960px; width: 50%">
          <header class="modal-card-head has-background-primary-light">
            <p class="modal-card-title">Confirm</p>
            <button
              class="delete"
              aria-label="close"
              @click="modal_confirm = !modal_confirm"
            ></button>
          </header>
          <section
            class="modal-card-body"
            v-for="(infomation, index) in info"
            :key="index"
          >
            <p id="info" class="is-4 has-text-link">รายละเอียดผู้รับ</p>
            <p>{{ infomation }}</p>

            <p class="is-4 has-text-link">รายการสินค้า</p>
            <div class="level" v-for="(value, index) in cart" :key="index">
              <p>{{ value.title }}</p>
              <p class="is-4">จำนวน</p>
              <p>{{ value.quantity }}</p>
            </div>

            <input type="file" name="slip" />
            <button @click="(modal_confirm = false), index">Cancel</button>
            <button @click="Confirm()">
              <router-link to="/allProduct"> Confirm</router-link>
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      userInfo: "",
      modal_confirm: false,
      info: [],
    };
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem("allCart"));
  },
  methods: {
    quantityDel(product, index) {
      product.quantity--;
      if (product.quantity <= 0) {
        product.quantity = 0;
        this.cart.splice(index, 1);
      }
      localStorage.setItem("allCart", JSON.stringify(this.cart));
    },
    quantityPlus(product) {
      product.quantity++;
      localStorage.setItem("allCart", JSON.stringify(this.cart));
    },
    Confirm() {
      this.modal_confirm = false;
      // localStorage.setItem("Confirm", JSON.stringify(this.));
      // this.cart = []
      // localStorage.setItem("allOrder", JSON.stringify(this.cart, this.info));
    },
  },
  computed: {
    Total() {
      var cost = 0;
      for (let i = 0; i < this.cart.length; i++) {
        cost += this.cart[i].price * this.cart[i].quantity;
      }
      return cost;
    },
  },
  watch: {
    modal_confirm(index) {
      if (this.modal_confirm == false) {
        this.info.splice(index, 1);
      }
    },
  },
};
</script>

<style>
</style>