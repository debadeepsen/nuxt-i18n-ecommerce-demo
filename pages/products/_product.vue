<template>
  <div class="main-container">
    <pre>{{ JSON.stringify(product, null, 2) }}</pre>
    <div class="details">
      <div class="imgc">
        <img :src="'../img/' + product.image" />
      </div>
      <div class="info">
        <h2>{{ product.title }}</h2>
        <div>{{ product.description }}</div>
        <div class="price">${{ product.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import products_en from "~/db/en/products";

export default {
  data() {
    return {
      product: products_en.find((p) => p.id == this.$route.params.product),
    };
  },

  mounted() {
    // hacky code, because the scoped style below doesn't seem to be working
    document.querySelector("body").style.background = "#eee";
  },
};
</script>

<style scoped>
body {
  background: #eee;
}

.main-container {
  width: 80%;
  margin: 30px auto;
  background: #fff;
  box-shadow: 2px 2px 8px #3333;
  padding: 20px;
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
  padding-left: 20px;
  font-size: 1.2rem;
}

h2 {
  font-size: 1.8rem;
}

.price {
  font-size: 2.4rem;
  font-weight: 200;
  margin-top: 10px;
}
</style>