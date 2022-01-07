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
            <a :href="'/products/' + item.product.id"
              ><h4>{{ item.product.title }}</h4></a
            >
            <div>{{ item.product.description }}</div>
            <div>${{ item.product.price }}</div>
          </div>
        </div>
        <div>
          <span class="qty">{{ item.count }}</span>
          <!-- <numeric-up-down v-model="item.count" /> -->
        </div>
      </div>
    </div>
    <div class="total-row">
      <div>
        <h5>{{ $t("shoppingCart.total") }}</h5>
      </div>
      <div class="total">${{ cartTotal }}</div>
    </div>
    <div style="text-align: center; margin-top: 10px">
      <button class="outline" @click="goToProducts">
        {{ $t("shoppingCart.continue") }}
      </button>
      <button class="danger" v-if="!cartEmpty" @click="clearCart">
        {{ $t("shoppingCart.clear") }}
      </button>
      <button v-if="!cartEmpty">
        {{ $t("shoppingCart.payment") }}
      </button>
    </div>
  </div>
</template>

<script>
import { EN } from "~/utils/constants";
import products_en from "~/db/en/products";
import products_fr from "~/db/fr/products";
import NumericUpDown from "~/components/NumericUpDown.vue";

export default {
  components: { NumericUpDown },
  head() {
    return {
      title: this.$t("shoppingCart.title"),
    };
  },

  data() {
    return {
      cart: [],
    };
  },

  mounted() {
    this.syncCartWithStore();
    this.refreshCartWithLocale();
  },

  computed: {
    cartEmpty() {
      return !this.cart || !this.cart.length;
    },

    cartTotal() {
      let total = 0;
      this.cart.forEach((item) => {
        total += item.count * item.product.price;
      });

      return total;
    },
  },

  methods: {
    syncCartWithStore() {
      // for deep copy
      this.cart = JSON.parse(JSON.stringify(this.$store.state.cart));
    },

    clearCart() {
      if (!confirm(this.$t("shoppingCart.clearWarning"))) return;

      this.$store.commit("clearCart");
    },

    goToProducts() {
      location.href = "/products";
    },

    refreshCartWithLocale() {
      const productList = this.$i18n.locale == EN ? products_en : products_fr;
      let newCart = [];
      this.cart.forEach((cartItem) => {
        newCart.push({
          product: productList.find((p) => p.id === cartItem.product.id),
          count: cartItem.count,
        });
      });

      this.$store.commit("setCart", newCart);
      this.syncCartWithStore();
    },
  },

  watch: {
    "$i18n.locale": function () {
      this.refreshCartWithLocale();
    }
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

.details > a {
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
}

.details > a:hover {
  text-decoration: underline;
}

h4,
h5 {
  margin: 0;
}

button {
  width: 180px;
}

button:hover {
  transform: scale(1.12);
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

.total-row {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  font-size: 1.35rem;
}

.total-row > div {
  width: 50%;
}

.total {
  text-align: right;
  padding-right: 10px;
}
</style>