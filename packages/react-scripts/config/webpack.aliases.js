const path = require("path");
const resolve = dir => path.join(__dirname, "..", dir);

module.exports = {
  "@": resolve("src"),
  "@components": resolve("src/Components"),
  "@containers": resolve("src/Containers"),
  "@assets": resolve("src/assets"),
  "@styles": resolve("src/styles")
};
