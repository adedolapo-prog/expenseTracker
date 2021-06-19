const express = require("express")
const router = express.Router()
const transaction = require("../controllers/transactionController")

//get request on / route
router.get("/", transaction.getTransaction)
router.post("/", transaction.addTransaction)
router.delete("/:id", transaction.deleteTransaction)
module.exports = router
