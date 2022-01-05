<template>
  <div class="main-container">
    <div class="details">
      <div class="imgc">
        <img :src="'../img/' + product.image" />
      </div>
      <div class="info">
        <h2>{{ product.title }}</h2>
        <div>{{ product.description }}</div>
        <div class="price">${{ product.price }}</div>
        <button>{{ $t("buttons.addToCart") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import products_en from "~/db/en/products";
import products_fr from "~/db/fr/products";
import { EN } from "~/utils/constants";

export default {
  data() {
    let productList = this.$i18n.locale == EN ? products_en : products_fr;
    let product = productList.find((p) => p.id == this.$route.params.product);
    return {
      product,
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
};
</script>

<style scoped>
.main-container {
  width: 80%;
  margin: 30px auto;
  background: #fff;
  box-shadow: 2px 2px 8px #3333;
  padding: 20px;
  padding-top: 70px;
}

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
  margin-bottom: 30px;
}
</style>