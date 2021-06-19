const express = require("express")
require("dotenv").config({ path: "./config/config.env" })
const morgan = require("morgan")
const router = require("./routes/transactionRoute")
const connectDB = require("./config/db")
const app = express()

connectDB()

//using middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

//importing the routes using middleware
app.use("/api/v1/transactions", router)

const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})
