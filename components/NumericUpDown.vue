<template>
  <div class="numeric-container">
    <button @click="decrement">-</button>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { EVENTS } from "~/utils/constants";
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
      this.$emit(EVENTS.COUNT_CHANGED, this.count);
    },

    decrement() {
      if (this.count === 0) return;
      this.count--;
      this.$emit(EVENTS.COUNT_CHANGED, this.count);
    },
  },
};
</script>

<style scoped>
.numeric-container {
  width: 100px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.numeric-container > button {
  border: none;
  outline: none;
  height: auto;
  padding: 12px 10px;
  background: linear-gradient(-15deg, #fff, #eee);
  background: #fff;
  color: #222;
}

.numeric-container > button:hover {
  transform: none;
}

.numeric-container > div {
  padding: 12px;
}
</style>