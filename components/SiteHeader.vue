<template>
  <header>
    <a href="/products/">
      <img src="~/assets/img/logo_200x200.png" />
      <span class="brand">TEMPORIUM</span>
    </a>
    <div class="locale-switcher-group">
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
  methods: {
    changeLocale(locale) {
      console.log({ locale });
      this.$i18n.locale = locale;
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

a {
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-content: center;
}

a > img {
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
  border: 0;
  background: #0000;
  padding: 3px;
  margin: 0;
  color: #555;
  font-size: 0.75rem;
  min-width: 80px;
  height: 24px;
}

.locale-switcher:hover {
  transform: inherit;
}

.selected {
  box-shadow: 1px 1px 3px #3334;
}

.unselected {
  background: #3332;
  box-shadow: inset 1px 1px 3px #3333;
}
</style>