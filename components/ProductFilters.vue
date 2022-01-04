<template>
  <div class="filters">
    <div class="section">
      <h3>Filters</h3>
    </div>
    <thin-line />
    <div class="section">
      <h4>Type</h4>
      <check-box caption="Alarm clock" />
      <check-box caption="Wall clock" />
      <check-box caption="Table clock" />
      <check-box caption="Wristwatch" />
    </div>
    <thin-line :m-top="20" />
    <div class="section">
      <h4>Colour</h4>
      <check-box caption="Red" />
      <check-box caption="Golden" />
      <check-box caption="Black" />
    </div>
    <thin-line :m-top="20" />
    <div class="section">
      <h4>Technology</h4>
      <check-box caption="Analog" />
      <check-box caption="Digital" />
      <check-box caption="Smartwatch" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filters {
  width: 16%;
  position: fixed;
}

.filters > .section {
  padding-left: 20px;
}
</style>