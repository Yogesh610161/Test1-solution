<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: $primaryFontFamily;
}
</style>
