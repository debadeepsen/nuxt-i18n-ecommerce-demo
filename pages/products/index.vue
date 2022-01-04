<template>
  <div>
    <div class="list-container">
      <div class="filter-col">
        <h3>Filters</h3>
        <thin-line />
        <h4>Type</h4>
        <check-box caption="Alarm clock" />
        <check-box caption="Wall clock" />
        <check-box caption="Table clock" />
        <check-box caption="Wristwatch" />
        <thin-line :m-top="20" />
        <h4>Colour</h4>
        <check-box caption="Red" />
        <check-box caption="Golden" />
        <check-box caption="Black" />
        <thin-line :m-top="20" />
        <h4>Technology</h4>
        <check-box caption="Analog" />
        <check-box caption="Digital" />
        <check-box caption="Smartwatch" />
      </div>
      <div class="product-grid-col">
        <h2>Product Inventory</h2>
        <div class="product-grid">
          <a
            :href="'/products/' + p.id"
            class="product-card"
            v-for="p in productList"
            :key="p.id"
          >
            <img class="thumb" :src="'/img/' + p.image" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from "~/components/CheckBox.vue";
import ThinLine from "~/components/ThinLine.vue";
import products from "~/db/products";

export default {
  components: { ThinLine, CheckBox },
  data() {
    return {
      productList: products,
    };
  },

  head() {
    return {
      title: "Product Inventory",
    };
  },
};
</script>

<style>
.list-container {
  display: flex;
  flex-direction: row;
}

.filter-col {
  width: 20%;
  padding: auto 20px;
}

.product-grid-col {
  width: 80%;
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

.product-card {
  width: 240px;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 3px 1px #2222;
  transition: all 0.2s;
}

.product-card:hover {
  transform: scale(1.1);
}
</style>