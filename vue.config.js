const path = require("path");

module.exports = {
  publicPath: "",
  outputDir: "./www",
  pluginOptions: {
    cordovaPath: "."
  },
  devServer: {
    watchOptions: {
      poll: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style.scss";`
      }
    }
  }
};
