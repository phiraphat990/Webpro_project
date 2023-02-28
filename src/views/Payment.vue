<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="section">
      <div class="column">
        <!-- card cart component แสดงข้อมูลที่อยู่ใน Localstorage ---------------------------------------------->
        <div class="card mb-4">
          <div class="card-content p-0">
            <div class="media ">
              <table class="table table is-striped ml-6 mr-6 has-text-centered">
                <tr>
                  <th>Item</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Price</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Quantity</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Total</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr v-for="(product, index) in cart" :key="index">
                  <td>
                    <img
                      :src="product.image"
                      style="width: 120px; height: 120px"
                    />
                    {{ product.title }}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{{ product.price }}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div style="display: flex; justify-content: space-between"> 
                      <button @click="quantityLob(product, index)">-</button>
                    <!-- จำนวนสินค้า----------------------------------------------- -->
                    <p>{{ product.quantity }}</p>
                    <!-- เพิ่มสินค้า----------------------------------------------- -->
                    <button @click="quantityPlush(product)">+</button></div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{{ product.price * product.quantity }}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-size-4">
        <div class="column is-1 is-offset-8">Total</div>
        <div class="column is-3 has-text-right">
          <!-- Total here ---------------------------------------- -->
          {{ Total }}
        </div>
      </div>

      <hr />

      <h1 class="is-size-4">User Info</h1>
      <div class="columns">
                <div class="column">
                    <label class="label">ที่อยู่</label>
                    <textarea class="textarea" placeholder="e.g. บ้านเลขที่ 123 ลาดกระบัง ...."  v-model="address"></textarea>
                    <p>{{typing}}</p>
                </div>
            </div>
      <br />
      <h1 class="is-size-4">Address Info</h1><br>
            <div class="columns">
                <div class="column">
                    <label class="label">ที่อยู่</label>
                    <textarea class="textarea" placeholder="e.g. บ้านเลขที่ 123 ลาดกระบัง ...."  v-model="address"></textarea>
                    <p>{{typing}}</p>
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
    };
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem("allCart"));
  },
  methods: {
    quantityLob(product, index) {
      product.quantity--;
      if (product.quantity <= 0) {
        // product.quantity = 0;
        this.cart.splice(index, 1);
      }
      localStorage.setItem("allCart", JSON.stringify(this.cart));
    },
    quantityPlush(product) {
      product.quantity++;
      localStorage.setItem("allCart", JSON.stringify(this.cart));
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
};
</script>

<style>
</style>