// @flow strict-local

const { Runtime } = require("@parcel/plugin");

const CODE = `
import x from "./test.png";
console.log(x);
`;

module.exports = new Runtime({
  async apply({ bundle, options }) {
    return {
      filePath: __filename,
      code: CODE,
      isEntry: true,
    };
  },
});
