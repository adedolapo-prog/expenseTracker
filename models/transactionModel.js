const mongoose = require("mongoose")
const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add some text"],
    trim: true,
  },
  amount: {
    type: String,
    required: [true, "Please add a positive or negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Transaction = mongoose.model("Transaction", transactionSchema)

module.exports = Transaction
