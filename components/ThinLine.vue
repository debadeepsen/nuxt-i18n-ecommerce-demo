<template>
  <div :style="{ marginTop: mTop + 'px' }"></div>
</template>

<script>
export default {
  props: {
    mTop: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>

<style scoped>
div {
  width: 100%;
  height: 0px;
  /* border-top: 1px solid #bbb3; */
  border-bottom: 1px solid #5553;
}
</style>