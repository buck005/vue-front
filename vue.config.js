const BASE_URL = process.env.NODE_ENV === "production" ? "/dist" : "/";
module.exports = {
  publicPath: BASE_URL,
  outputDir: "dist",
  devServer: {
    proxy: {
      "/vue-back": {
        target: "http://101.132.184.211:8080",
        changeOrigin: true,
        secure: false,
      },
    },
    port: 9000,
  },
};
