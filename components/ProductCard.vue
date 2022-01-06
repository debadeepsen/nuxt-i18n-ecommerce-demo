<template>
  <a :href="'/products/' + product.id" class="product-card" :key="product.id">
    <img class="thumb" :src="'/img/' + product.image" />
    <h5>{{ product.title }}</h5>
    <div>${{ product.price }}</div>
  </a>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 240px;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 3px #2222;
  transition: all 0.2s;
  text-align: center;
  text-decoration: none;
  color: #222;
  background: #fff;
}

.product-card:hover {
  transform: scale(1.1);
  box-shadow: 3px 3px 5px 1px #2224;
}

h5 {
  color: #555;
  text-transform: uppercase;
  margin: 3px auto;
}
</style>