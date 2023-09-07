const mongoose = require('mongoose')
require('dotenv')

let connectionUrl = process.env.DB_CONNECTION_URL;
console.log(connectionUrl)
connectionUrl = connectionUrl.replace('<username>', process.env.DB_USERNAME)
connectionUrl = connectionUrl.replace('<password>', process.env.DB_PASSWORD)
connectionUrl = `${connectionUrl}/${process.env.DB_NAME}?${DB_QUERY}`





const connectDB = async () => {

    await mongoose.connect(connectionUrl, { dbName: process.env.DB_NAME })
    console.log('Database connected')

}

module.exports = connectDB