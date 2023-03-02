<template>
  <div>
    <h1 class="column has-text-centered mt-6 is-size-3">Check Order</h1>
    <section class="column mt-3 ml-6 mr-6">
      <div>
        <table class="table table is-striped" style="width: 100%">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Pay Status</th>
            <th>Details</th>
          </tr>
          <tr
            v-for="(orderInfo, index) in OrderInfo"
            :key="index"
            :class="[
              orderInfo.status == 'unpaid'
                ? 'has-background-danger'
                : 'has-background-success',
            ]"
          >
            <td>{{ orderInfo.id }}</td>
            <td>{{ orderInfo.first_name }}</td>
            <td>{{ orderInfo.last_name }}</td>
            <td>{{ orderInfo.phone }}</td>
            <td>{{ orderInfo.status }}</td>
            <td><button @click="Check(orderInfo)">Check dettails</button></td>
          </tr>
        </table>
      </div>
    </section>

    <!-- Modal detials-->
    <div class="modal" :class="{ 'is-active': modal_detials }">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head has-background-primary-light">
              <p class="modal-card-title">Detials</p>
              <button class="delete" aria-label="close" @click="modal_detials = !modal_detials"></button>
            </header>
            <section class="modal-card-body">
              <div class="content">
                <span>ID {{ detail.id }}</span><br>
                <span>Quantity {{ detail.quantity }}</span><br>
                <span>Total Price {{ detail.total_price }}</span><br>
              </div>
            </section>
    </div>
  </div>
    </div>
</template>

<script>
import OrderInfo from "../views/order";
export default {
  data() {
    return {
      OrderInfo: OrderInfo,
      detail: { id: "" },
      modal_detials: false,
    };
  },
  methods: {
    Check(orderInfo) {
      this.detail = orderInfo;
      this.modal_detials = true;
      console.log(this.detail);
    },
  },
};
</script>

<style>
</style>