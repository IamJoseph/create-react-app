const path = require("path");
const resolve = dir => path.join(process.cwd(), dir);

module.exports = {
  "@": resolve("src"),
  "@components": resolve("src/Components"),
  "@containers": resolve("src/Containers"),
  "@assets": resolve("src/assets"),
  "@styles": resolve("src/styles")
};
