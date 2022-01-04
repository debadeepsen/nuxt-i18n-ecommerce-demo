<template>
  <div class="filters">
    <div class="section">
      <h3>{{ $t('filters.title') }}</h3>
    </div>
    <thin-line />
    <div class="section">
      <h4>{{ $t('filters.type.title') }}</h4>
      <check-box :caption="$t('filters.type.alarmClock')" />
      <check-box :caption="$t('filters.type.wallClock')" />
      <check-box :caption="$t('filters.type.tableClock')" />
      <check-box :caption="$t('filters.type.wristWatch')" />
    </div>
    <thin-line :m-top="20" />
    <div class="section">
      <h4>{{ $t('filters.colour.title') }}</h4>
      <check-box :caption="$t('filters.colour.red')" />
      <check-box :caption="$t('filters.colour.golden')" />
      <check-box :caption="$t('filters.colour.black')" />
    </div>
    <thin-line :m-top="20" />
    <div class="section">
      <h4>{{ $t('filters.technology.title') }}</h4>
      <check-box :caption="$t('filters.technology.analog')" />
      <check-box :caption="$t('filters.technology.digital')" />
      <check-box :caption="$t('filters.technology.smartWatch')" />
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