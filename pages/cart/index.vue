<template>
  <div class="main-container">
    <h2>{{ $t("shoppingCart.title") }}</h2>
    <div v-if="cartEmpty">
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
    </div>
    <div style="text-align: center; margin-top: 10px">
      <button class="outline" @click="goToProducts">
        {{ $t("shoppingCart.continue") }}
      </button>
      <button v-if="!cartEmpty" @click="clearCart">
        {{ $t("shoppingCart.clear") }}
      </button>
    </div>
  </div>
</template>

<script>
import { EN } from "~/utils/constants";
import products_en from "~/db/en/products";
import products_fr from "~/db/fr/products";

export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },

    cartEmpty() {
      return !this.$store.state.cart || !this.$store.state.cart.length;
    },
  },

  methods: {
    clearCart() {
      if (!confirm(this.$t("shoppingCart.clearWarning"))) return;

      this.$store.commit("clearCart");
    },

    goToProducts() {
      location.href = "/products";
    },
  },

  watch: {
    "$i18n.locale": function () {
      const productList = this.$i18n.locale == EN ? products_en : products_fr;
      let newCart = [];
      this.cart.forEach((cartItem) => {
        newCart.push({
          product: productList.find((p) => p.id === cartItem.product.id),
          count: cartItem.count,
        });
      });

      this.$store.commit("setCart", newCart);
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