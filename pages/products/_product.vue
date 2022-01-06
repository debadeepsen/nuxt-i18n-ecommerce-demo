<template>
  <div class="main-container">
    <div class="details">
      <div class="imgc">
        <img :src="'../img/' + product.image" />
      </div>
      <div class="info">
        <h2>{{ product.title }}</h2>
        <div>{{ product.description }}</div>
        <div class="price mb-30">${{ product.price }}</div>
        <div class="mb-30">
          <numeric-up-down @countChanged="countChanged" />
        </div>
        <button @click="addToCart">{{ $t("buttons.addToCart") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import NumericUpDown from "~/components/NumericUpDown.vue";
import products_en from "~/db/en/products";
import products_fr from "~/db/fr/products";
import { EN } from "~/utils/constants";

export default {
  components: { NumericUpDown },
  data() {
    let productList = this.$i18n.locale == EN ? products_en : products_fr;
    let product = productList.find((p) => p.id == this.$route.params.product);
    return {
      product,
      count: 0,
    };
  },

  head() {
    return {
      title: this.product.title,
    };
  },

  watch: {
    "$i18n.locale": function () {
      let productList = this.$i18n.locale == EN ? products_en : products_fr;
      this.product = productList.find(
        (p) => p.id == this.$route.params.product
      );
    },
  },

  methods: {
    countChanged(count) {
      this.count = count;
    },

    addToCart() {
      if (!this.count) return;
      const item = { product: this.product, count: this.count };
      this.$store.commit("addToCart", item);
      location.href = "/cart";
    },
  },
};
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: row;
}

.imgc {
  width: 50%;
}

.imgc > img {
  max-width: 100%;
}

.info {
  width: 50%;
  padding-left: 40px;
  font-size: 1.2rem;
  box-sizing: border-box;
}

h2 {
  font-size: 1.8rem;
}

.price {
  font-size: 2.4rem;
  font-weight: 200;
  margin-top: 10px;
}

.mb-30 {
  margin-bottom: 30px;
}
</style>