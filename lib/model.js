const { default: mongoose, Schema } = require("mongoose");

const model = mongoose.model(
  "user",
  new Schema({
    password: { type: String },
  })
);

module.exports = model;
