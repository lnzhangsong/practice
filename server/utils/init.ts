// eslint-disable-next-line import/no-extraneous-dependencies
const COS = require("cos-nodejs-sdk-v5");

const cos = new COS({
  SecretId: "AKIDnPkpd9PO6WgZAUYLr75oFPIuFJ6dsqWv",
  SecretKey: "9AzYw3tRjlWzC8m9F4nIWT9XeU3LL4Wh",
});

export default cos;
