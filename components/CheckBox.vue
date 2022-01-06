<template>
  <div class="cb-container">
    <div class="cb"></div>
    {{ caption }}
  </div>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped>
.cb-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-bottom: 6px;
}
.cb {
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 1px solid #8885;
  background: #fff;
  margin-right: 6px;
}
</style>