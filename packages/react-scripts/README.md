# react-scripts

Please create an alias file i.e. src/utils/alias.js similar to the folowing:
```javascript
const path = require("path");

module.exports = {
  "@": path.resolve("src"),
  "@components": path.resolve("src/Components"),
  "@containers": path.resolve("src/Containers"),
  "@assets": path.resolve("src/assets"),
  "@styles": path.resolve("src/styles")
};
```
This package is a modification of scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
