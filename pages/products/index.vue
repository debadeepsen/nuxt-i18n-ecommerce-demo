<template>
  <div>
    <div class="list-container">
      <div class="filter-col">
        <product-filters />
      </div>
      <div class="product-grid-col">
        <h2>{{ $t("productInventory") }}</h2>
        <div class="product-grid">
          <product-card v-for="p in productList" :key="p.id" :product="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard.vue";
import ProductFilters from "~/components/ProductFilters.vue";
import products_en from "~/db/en/products";
import products_fr from "~/db/fr/products";
import { EN } from "~/utils/constants";

export default {
  components: { ProductCard, ProductFilters },

  data() {
    return {
      productList: this.$i18n.locale == EN ? products_en : products_fr,
    };
  },

  head() {
    return {
      title: this.$t("productInventory"),
    };
  },

  watch: {
    "$i18n.locale": function () {
      this.productList = this.$i18n.locale == EN ? products_en : products_fr;
    },
  },
};
</script>

<style>
.list-container {
  display: flex;
  flex-direction: row;
}

.filter-col {
  width: 16%;
  padding: auto 20px;
  background: #fff;
}

.product-grid-col {
  width: 84%;
  padding-left: 30px;
}

.thumb {
  width: 240px;
  height: 220px;
  object-fit: cover;
}

.product-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>