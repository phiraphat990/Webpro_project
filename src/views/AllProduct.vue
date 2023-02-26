
<template>
  <div class="columns">
    <div class="column"></div>

    <!-- Column แสดงสินค้า--------------------------------------------------------->
    <div class="column is-12 pt-6">
      
      <h1 class="is-size-5 level-right mr-6" >All Products ({{ products.length }})</h1>
      <div class="container is-max-desktop">
        <div class="is-multiline columns is-variable is-2">
          <!-- Card element start here------------------------------------------>
          <div
            id="card_product"
            class="column is-one-quarter"
            v-for="value in products"
            :key="value"
          >
            <div>
              <div class="card-image">
                <figure class="image is-1by1">
                  <img :src="value.image" alt="Placeholder image" />
                </figure>
              </div>
              <div
                class="card-content"
                :class="[
                  value.is_favorite ? 'has-background-warning-light' : '',
                ]"
              >
                <div class="media">
                  <div class="media-content">
                    <p id="title" class="title is-5">{{ value.title }}</p>
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between">
                  <!-- ไอคอนรูปตะกร้า -->
                  <div class="icon is-size-4" @click="cart.push(value)">
                    <i class="fas fa-shopping-cart has-text-warning"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Column แสดงตะกร้า--------------------------------------------------->
    <!-- <div class="column is-3 pt-6 pl-0 pr-5">
        <div style="display: flex; justify-content: space-between">
          <span class="is-size-4 mb-4">Cart ({{ cart.length }})</span>
          <a class="is-danger mb-4 button" @click="cart.pop(items)">Clear</a>
        </div> -->

    <!-- Card element start here------------------------------------------>
    <!-- <div class="card mb-4" v-for="items in cart" :key="items">
          <div class="card-content p-0">
            <div class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img :src="items.image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content pt-2">
                <p class="is-5">{{ items.title }}</p>
                <p class="has-text-grey-light is-6">{{ items.brand }}</p>
                <p class="is-6 has-text-danger">{{ items.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
  </div>
</template>

<script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
<script>
export default {
  name: "App",
  data() {
    return {
      shopName: "Sunthorn Shop",
      products: [
        {
          title: "Vriesea 'Pink Cockatoo'1",
          price: 34900,
          is_favorite: false,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_73dcd44c-6947-43cf-a2fc-f64f2c52e387_360x.jpg?v=1676495614",
        },
        {
          title: "Euphorbia ingens",
          price: 44900,
          is_favorite: false,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_f425b9f1-f593-4164-9ae3-da7c027f79b2_360x.jpg?v=1672342192",
        },
        {
          title: "Sand Rose Succulent ",
          price: 990,
          is_favorite: false,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_d46392c1-41ed-49ef-a1e9-62fa6b1de436_360x.jpg?v=1676495623",
        },
        {
          title: "Pacific Maidenhair Fern",
          price: 590,
          is_favorite: false,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_a3c29169-024b-48de-84df-4eed9b1c4094_360x.jpg?v=1675887180",
        },
        {
          title: "Pacific Maidenhair Fern",
          price: 120,
          is_favorite: false,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_a3c29169-024b-48de-84df-4eed9b1c4094_360x.jpg?v=1675887180",
        },
        {
          title: "Bird's Nest Fern 'Champion'",
          price: 3290,
          is_favorite: false,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_02ad2546-181a-4528-8f7b-d38acac55982_360x.jpg?v=1674677512",
        },
        {
          title: "Vriesea fenestralis",
          price: 22490,
          is_favorite: false,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_70485af9-45d8-45bc-85e1-9da8c5d7b386_360x.jpg?v=1671051183",
        },
        {
          title: "Bird's Nest Fern 'Champion'",
          price: 3290,
          is_favorite: false,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_02ad2546-181a-4528-8f7b-d38acac55982_360x.jpg?v=1674677512",
        },
        {
          title: "Vriesea fenestralis",
          price: 22490,
          is_favorite: false,
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_70485af9-45d8-45bc-85e1-9da8c5d7b386_360x.jpg?v=1671051183",
        }
      ],
      cart: [],
      show_modal: false,
    };
  },
  methods: {
    chang() {
      this.products.is_favorite = true;
    },
  },
};
</script>

<style>
</style>
