
<template>
  <div class="columns">
    <div class="column"></div>

    <!-- Column แสดงสินค้า--------------------------------------------------------->
    <div class="column is-12 pt-6 mr-6">
      <h1 class="is-size-5 mr-6 mb-2">All Products ({{ products.length }})</h1>
      <div><button @click="modal_cart = !modal_cart">Show Cart {{ cart.length }}</button></div>
      <div class="container">
        <div class="is-multiline columns is-variable is-2">
          <!-- Card element start here------------------------------------------>
          <div
            id="card_product"
            class="column is-one-quarter"
            v-for="(value, index) in products"
            :key="index"
          >
            <div class="box">
              <div class="card-image">
                <figure class="image is-1by1">
                  <img :src="value.image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p id="title" class="title is-5">{{ value.title }}</p>
                    <p id="price" class="price is-5 has-text-danger">Price {{ value.price }} Bath</p>
                  </div>
                </div>
              </div>

              <div class="level">
                <div style="justify-content: space-between" class="level-right">
                  <!-- info -->
                  <div
                    @click="ShowInfo(value)">
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

    <!-- Modal info-->
    <div class="modal" :class="{ 'is-active': modal_info }">
      <div
        class="modal-background"
        @click="modal_info = !modal_info"
      ></div>
      <div
        class="modal-card"
        style="max-width: 960px; width: 90%"
      >
        <section class="modal-card-body">
          <p id="title2" class="title">{{ info.title }}</p>
          <div class="level">
          <img :src="info.image" style="width: 300px; height: 300px;">
          <p id="info" class="is-4">{{ info.detail }}</p>
          </div>
        </section>
      </div>
    </div>

    <!-- Modal Cart-->
    <div class="modal" :class="{ 'is-active': modal_cart }">
      <div
        class="modal-background"
        @click="modal_cart = !modal_cart"
      ></div>
      <div
        class="modal-card"
        style="max-width: 960px; width: 50%"
      >
        <section class="modal-card-body">
              <!-- Column แสดงตะกร้า--------------------------------------------------->
    <div class="column is-12 pt-6 pr-5 has-background-primary-light">
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
                  <button @click="quantityLob(product, index)">-</button>
                   <!-- จำนวนสินค้า----------------------------------------------- -->
                   <p>{{ product.quantity }}</p>
                  <!-- เพิ่มสินค้า----------------------------------------------- -->
                  <button @click="quantityPlush(product)">+</button>
                  <span>{{product.price * product.quantity}}</span>
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
      <div class="level">
        <span class="has-text-weight-bold">Total</span>
        <span id="totalPrice">{{ totalPrice }}</span>
      </div>
      <button @click="gotoPay()"><router-link to="/payment" class="has-text-black">go to PayMent</router-link></button>
    </div>
        </section>
      </div>
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
      modal_info: false,
      modal_cart: false,
      show_modal: false,
      info: {id: 0, image: '',detail: ''}, //เลือกตัวไหนไว้ ให้แสดง modal กดแล้วเปลี่ยน
      products: [
        {
          id: 1,
          title: "Pink Cockatoo",
          price: 350,
          quantity: 0,
          detail:'is a compact, small -sized species from Brazil that has green foliage with maroon centers',
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_73dcd44c-6947-43cf-a2fc-f64f2c52e387_360x.jpg?v=1676495614",
        },
        {
          id: 2,
          title: "Euphorbia ingens",
          price: 400,
          quantity: 0,
          detail:'Euphorbia ingens is a species of flowering plant in the family Euphorbiaceae. It is native to dry areas of southern Africa.',
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_f425b9f1-f593-4164-9ae3-da7c027f79b2_360x.jpg?v=1672342192",
        },
        {
          id: 3,
          title: "Sand Rose Succulent",
          price: 250,
          quantity: 0,
          detail:'Adenium obesum is a poisonous species of flowering plant belonging to the tribe Nerieae of the subfamily Apocynoideae of the dogbane family',
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_d46392c1-41ed-49ef-a1e9-62fa6b1de436_360x.jpg?v=1676495623",
        },
        {
          id: 4,
          title: "Pacific Maidenhair Fern",
          price: 590,
          quantity: 0,
          detail:'the maidenhair fern, is a genus of about 250 species of ferns in the subfamily Vittarioideae of the family Pteridaceae',
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_a3c29169-024b-48de-84df-4eed9b1c4094_360x.jpg?v=1675887180",
        },
        {
          id: 5,
          title: "Big Red Bird",
          price: 120,
          quantity: 0,
          detail:'Huge, Showy Red Leaves. Loves a bright-filtered light and wants to be moist but not wet.',
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_2de0efbf-3899-4748-aefe-25017ea8d1d4_540x.jpg?v=1667414207",
        },
        {
          id: 6,
          title: "Tahiti",
          price: 180,
          quantity: 0,
          detail:'is a species of plant in the family Rubiaceae. It is an evergreen tropical shrub that grows to 4 m (10 ft) tall',
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_b7ae8132-8dad-43da-9dbd-b265af9c397c_1024x1024@2x.jpg?v=1674677519",
        },
        {
          id: 7,
          title: "Calathea 'Misto'",
          price: 140,
          quantity: 0,
          detail:'Calathea leaves are often large and colorfully patterned.The leaves are often variegated with bright colors such as pink, orange, red, and white.',
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_f887ed49-396a-44c2-b432-0951ac4246ad_1024x1024@2x.jpg?v=1675887210",
        },
        {
          id: 8,
          title: "Alocasia cucullata",
          price: 200,
          quantity: 0,
          detail:'This aroid plant is a perennial herb producing thick, erect stems up to 6 centimeters wide that branch from the bases and grow up to a meter tall',
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_5ff47f45-b9db-48b1-851b-0196edcc7038_1024x1024@2x.jpg?v=1677100166",
        },
        {
          id: 9,
          title: "Velvet Moon Inch Plant",
          price: 120,
          quantity: 0,
          detail:'Tradescantia zebrina has attractive zebra-patterned leaves, the upper surface showing purple new growth and green older growth parallel to the central axis, as well as two broad silver-colored stripes on the outer edges',
          image:
            "https://cdn.shopify.com/s/files/1/0082/4701/7531/products/image_5a5ef493-e85a-47fd-9461-14c28f7f764f_1024x1024@2x.jpg?v=1675887192",
        },
      ],
    };
  },
  methods: {
    push(value) {
      if (value.quantity === 0) {
        this.cart.push(value);
      }
      console.log(this.cart)
      value.quantity++;
    },
    removeFromCart(index, product) {
      this.cart.splice(index, 1);
      product.quantity = 0;
    },
    ShowInfo(value) {
      this.modal_info = !this.modal_info
      this.info = value;
    },
    gotoPay(){
      localStorage.setItem("allCart", JSON.stringify(this.cart));
    },
    quantityLob(product, index) {
      product.quantity--;
      if (product.quantity <= 0) {
        // product.quantity = 0;
        this.cart.splice(index, 1);
      }
    },
    quantityPlush(product) {
      product.quantity++;
    },
  },
  computed: {
    totalPrice() {
      var total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price * this.cart[i].quantity;
      }
      return total;
    }
  },
};
</script>

<style>
</style>
