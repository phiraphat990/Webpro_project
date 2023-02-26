
<template>
  <div class="columns">
    <div class="column"></div>

    <!-- Column แสดงสินค้า--------------------------------------------------------->
    <div class="column is-7 pt-6 mr-6">
      <h1 class="is-size-5 mr-6 mb-2">All Products ({{ products.length }})</h1>
      <div class="container is-max-desktop">
        <div class="is-multiline columns is-variable is-2">
          <!-- Card element start here------------------------------------------>
          <div
            id="card_product"
            class="column is-one-quarter"
            v-for="(value, index) in products"
            :key="index"
          >
            <div >
              <div class="card-image">
                <figure class="image is-1by1">
                  <img :src="value.image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p id="title" class="title is-5">{{ value.title }}</p>
                    <p id="price" class="price is-5 has-text-danger">{{ value.price }}</p>
                  </div>
                </div>
              </div>

              <div class="level">
                <div style="justify-content: space-between" class="level-right">
                  <!-- info -->
                  <div
                    @click="modal_confirm_order = !modal_confirm_order">
                    <button class="button has-background-info is-rounded">
                      Info
                    </button>
                  </div>
                </div>

                <div class="level-right">
                  <!-- ไอคอนรูปตะกร้า -->
                  <div @click="push(value)">
                    <button class="button has-background-warning is-rounded">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal" :class="{ 'is-active': modal_confirm_order }">
      <div
        class="modal-background"
        @click="modal_confirm_order = !modal_confirm_order"
      ></div>
      <div
        class="modal-card"
        style="max-width: 960px; width: 90%"
        v-for="(value, index) in products"
        :key="index"
      >
        <section class="modal-card-body">
          <img :src="value.image">
          <p id="title2" class="title is-5">{{ value.id }}</p>
        </section>
      </div>
    </div>

    <!-- Column แสดงตะกร้า--------------------------------------------------->
    <div class="column is-4 pt-6 pr-5 has-background-primary-light">
      <div style="display: flex; justify-content: space-between">
        <span class="is-size-4 mb-4">Cart ({{ cart.length }})</span>
        <a class="is-danger mb-4 button" @click="cart = []">Clear</a>
      </div>

      <!-- Card element start here------------------------------------------>
      <div v-for="(product, index) in cart" :key="index" class="card mb-4">
        <div class="card-content p-0">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img :src="product.image" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content pt-2">
              <p class="is-5">{{ product.title }}</p>
              <div style="display: flex; justify-content: space-between">
                <div>
                  <!-- ราคาสินค้า------------------------------------------------ -->
                  <span class="is-6">{{ product.price }}</span>
                </div>
                <div style="display: flex; justify-content: space-between">
                  <!-- ลดสินค้า------------------------------------------------ -->
                  <button @click="product.quantity--">-</button>
                   <!-- จำนวนสินค้า----------------------------------------------- -->
                   <p>{{ product.quantity }}</p>
                  <!-- เพิ่มสินค้า----------------------------------------------- -->
                  <button @click="product.quantity++">+</button>
                </div>
                <div>
                  <!-- icon รูปถังขยะ------------------------------------------- -->
                  <span
                    class="icon mr-2"
                    key="false"
                    @click="removeFromCart(index, product)"
                  >
                    <button>del</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          font-size: 1.25rem;
        "
      >
        <span class="has-text-weight-bold">Total</span>
        <span id="totalPrice">{{ totalPrice }}</span>
      </div>
      <button class="has-text-centered">Check out</button>
    </div>
  </div>
</template>

<script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
<script>
export default {
  data() {
    return {
      shopName: "Sunthorn Shop",
      cart: [],
      show_modal: false,
      modal_confirm_order: false,
      show_modal: false,
      products: [
        {
          id: 1,
          title: "Vriesea 'Pink Cockatoo'1",
          price: 350,
          quantity: 0,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_73dcd44c-6947-43cf-a2fc-f64f2c52e387_360x.jpg?v=1676495614",
        },
        {
          id: 2,
          title: "Euphorbia ingens",
          price: 400,
          quantity: 0,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_f425b9f1-f593-4164-9ae3-da7c027f79b2_360x.jpg?v=1672342192",
        },
        {
          id: 3,
          title: "Sand Rose Succulent ",
          price: 250,
          quantity: 0,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_d46392c1-41ed-49ef-a1e9-62fa6b1de436_360x.jpg?v=1676495623",
        },
        {
          id: 4,
          title: "Pacific Maidenhair Fern",
          price: 590,
          quantity: 0,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_a3c29169-024b-48de-84df-4eed9b1c4094_360x.jpg?v=1675887180",
        },
        {
          id: 5,
          title: "Pacific Maidenhair Fern",
          price: 120,
          quantity: 0,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_a3c29169-024b-48de-84df-4eed9b1c4094_360x.jpg?v=1675887180",
        },
        {
          id: 6,
          title: "Bird's Nest Fern 'Champion'",
          price: 180,
          quantity: 0,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_02ad2546-181a-4528-8f7b-d38acac55982_360x.jpg?v=1674677512",
        },
        {
          id: 7,
          title: "Vriesea fenestralis",
          price: 140,
          quantity: 0,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_70485af9-45d8-45bc-85e1-9da8c5d7b386_360x.jpg?v=1671051183",
        },
        {
          id: 8,
          title: "Bird's Nest Fern 'Champion'",
          price: 200,
          quantity: 0,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_02ad2546-181a-4528-8f7b-d38acac55982_360x.jpg?v=1674677512",
        },
        {
          id: 9,
          title: "Vriesea fenestralis",
          price: 120,
          quantity: 0,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_70485af9-45d8-45bc-85e1-9da8c5d7b386_360x.jpg?v=1671051183",
        },
      ],
    };
  },
  methods: {
    push(value) {
      if (value.quantity === 0) {
        this.cart.push(value);
      }
      value.quantity++;
    },
    removeFromCart(index, product) {
      this.cart.splice(index, 1);
      product.quantity = 0;
    },
    fill(index) {
      return this.products.filter((data) => data.id.includes(index));
    },
  },
  computed: {
    totalPrice() {
      var total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price * this.cart[i].quantity;
      }
      return total;
    },
  },
};
</script>

<style>
</style>
