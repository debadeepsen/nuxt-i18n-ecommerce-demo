<template>
  <div class="modal-bg">
    <div class="modal">
      <div class="title">
        <strong>{{ title }}</strong>
      </div>
      <div class="text">
        {{ text }}
      </div>
      <div class="buttons">
        <button v-for="(btn, i) in buttonDetails" :key="i" @click="handleClick(btn.caption)">
          {{ btn.caption }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    buttons: {
      type: String,
      required: false,
      default: "OK",
    },
  },

  data() {
    return {
      buttonDetails: [],
    };
  },

  mounted() {
    switch (this.buttons) {
      case "YesNo":
        this.buttonDetails = [
          {
            caption: this.$t("buttons.dialog.yes"),
            class: "outline",
            dialogResult: "yes"
          },
          {
            caption: this.$t("buttons.dialog.no"),
            class: "",
            dialogResult: "no"
          },
        ];
        break;
      default:
        this.buttonDetails = [
          {
            caption: this.$t("buttons.dialog.ok"),
            class: "",
            dialogResult: "ok"
          },
        ];
        break;
    }
  },
};
</script>

<style scoped>
.modal-bg {
  position: absolute;
  background: #4448;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  width: 350px;
  min-height: 100px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #3333;
}

.title {
  box-shadow: 0px 1px 2px #1112;
}

.title,
.text {
  padding: 10px;
}

.text {
  margin-bottom: 15px;
}

.buttons {
  text-align: center;
  padding-bottom: 10px;
}

.buttons > button {
  padding: 10px 20px;
  min-width: 100px;
}

.buttons > button:hover {
  transform: scale(1.1);
}
</style>