
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: String,
  productCode: String,
  status: { type: String, default: "pending" },
  refId: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", transactionSchema);
