<template>
  <div class="main-container">
    <h2>{{ $t("shoppingCart.title") }}</h2>
    <div v-if="!cart || !cart.length">
      {{ $t("shoppingCart.empty") }}
    </div>
    <div v-else class="cart-items">
      <div v-for="item in cart" :key="item.id" class="item-box">
        <div style="display: flex">
          <img class="thumb" :src="'/img/' + item.product.image" />
          <div class="details">
            <h4>{{ item.product.title }}</h4>
            <div>{{ item.product.description }}</div>
          </div>
        </div>
        <div>
          <span class="qty">{{ item.count }}</span>
        </div>
      </div>
      <div style="text-align: center; margin-top: 10px">
        <button @click="clearCart">{{ $t("shoppingCart.clear") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import ThinLine from "~/components/ThinLine.vue";
export default {
  components: { ThinLine },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },

  methods: {
    clearCart() {
      if (!confirm(this.$t("shoppingCart.clearWarning"))) return;

      this.$store.commit("clearCart");
    },
  },
};
</script>

<style scoped>
.item-box {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}

.thumb {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.details {
  padding-left: 20px;
}

h4 {
  margin: 0;
}

.qty {
  display: inline-block;
  background: #eee8;
  border: 1px solid #eee;
  padding: 10px;
  font-size: 1.12rem;
  font-weight: bold;
  margin-top: 10px;
  min-width: 30px;
  text-align: center;
  border-radius: 3px;
}
</style>