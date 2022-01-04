<template>
  <div>
    <pre>{{ JSON.stringify(product, null, 2) }}</pre>
  </div>
</template>

<script>
import products from "~/db/products";

export default {
  data() {
    return {
      product: products.find((p) => p.id == this.$route.params.product),
    };
  },
};
</script>

<style>
</style>