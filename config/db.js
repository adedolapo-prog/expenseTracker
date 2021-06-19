const mongoose = require("mongoose")
require("dotenv").config("./config.env")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`Mongodb connected : ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error : ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
