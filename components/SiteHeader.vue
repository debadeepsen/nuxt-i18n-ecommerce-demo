<template>
  <header>
    <a href="/products/">
      <img src="~/assets/img/logo_200x200.png" />
      <span class="brand">TEMPORIUM</span>
    </a>
    <div class="locale-switcher-group">
      <div class="cart-icon">
        <a href="/cart">
          <div v-show="cartCount > 0" class="cart-count">
            {{ cartCount }}
          </div>
          <img src="~/assets/img/cart.png" />
        </a>
      </div>
      <button
        class="locale-switcher"
        :class="getButtonClass('en')"
        @click="changeLocale('en')"
      >
        {{ $t("languages.english") }}
      </button>
      <button
        class="locale-switcher"
        :class="getButtonClass('fr')"
        @click="changeLocale('fr')"
      >
        {{ $t("languages.french") }}
      </button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartCount() {
      const cart = this.$store.state.cart;
      let count = 0;

      cart.forEach((item) => {
        count += item.count;
      });

      return count;
    },
  },

  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.$store.commit("setLocale", locale);
    },

    getButtonClass(locale) {
      return this.$i18n.locale === locale ? "selected" : "unselected";
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;
  padding: 10px 30px 8px 30px;
  box-shadow: 0px 0px 4px #3334;
  z-index: 3;
  display: flex;
  justify-content: space-between;
}

.brand {
  font-size: 2.2rem;
  font-family: "Nunito Sans", var(--body-font);
}

header > a {
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-content: center;
}

header > a > img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.locale-switcher-group {
  margin-right: 50px;
  display: flex;
  align-content: center;
}

.locale-switcher {
  display: inline-block;
  border: 0;
  background: #0000;
  padding: 3px;
  margin: 0;
  margin-top: 5px;
  color: #555;
  font-size: 0.75rem;
  min-width: 80px;
  height: 24px;
}

.locale-switcher:hover {
  transform: inherit;
}

.selected {
  border: 1px solid #aaaa;
  box-shadow: 1px 1px 3px #3334;
}

.unselected {
  background: #4441;
  /* box-shadow: inset 1px 1px 3px #3333; */
  color: #555;
}

.cart-icon {
  margin-right: 10px;
  position: relative;
}

.cart-icon img {
  width: 32px;
}

.cart-icon > a {
  position: relative;
  color: #111 !important;
}

.cart-count {
  position: absolute;
  display: flex;
  width: 18px;
  height: 18px;
  align-content: center;
  justify-content: center;
  padding-top: 1px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #111;
  left: 3px;
  top: -18px;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 50px;
}
</style>