<template>
  <div class="customInput">
    <input
      class="inputField"
      :id="data.name"
      :type="data.type"
      :placeholder="data.placeholder"
      @input="handleInput($event.target.value)"
      @blur="handleBlur($event.target.value)"
      v-model.trim="inputValue"
      autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      inputValue: "",
    };
  },
  props: ["data"],
  methods: {
    handleInput(event) {
      this.$emit("updateInput", {
        inputValue: event,
        name: this.data.name,
      });
    },
    handleBlur(event) {
      this.$emit("updateInput", {
        inputValue: event,
        name: this.data.name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
div[class="customInput"] {
  display: flex;
  flex-direction: column;
  font-family: $primaryFontFamily;
  padding: 1em 2em;
  box-sizing: border-box;
  max-width: 100%;
  flex: 1;
  input[class="inputField"] {
    margin: 1em 0 0.5em 0;
    width: 100%;
    padding: 0.8em 0.6em;
    font-size: 1em;
    line-height: 1.5;
    border: 1px solid transparent;
    color: #495057;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px #00000047;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      outline: none;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  p[class="errMsg"] {
    font-size: 0.9em;
    color: #d9534f;
    align-self: flex-start;
  }
  div[class="customInput2"] {
    margin: auto;
  }
}
</style>
