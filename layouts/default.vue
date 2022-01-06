<template>
  <div>
    <site-header />
    <div style="padding-top: 60px">
      <nuxt />
    </div>
  </div>
</template>

<script>
import SiteHeader from "~/components/SiteHeader.vue";
export default {
  components: { SiteHeader },
};
</script>

<style>
</style>