const mongoose = require("mongoose");

const URI= "mongodb+srv://LakApp:LakApp@cluster0.b9yr5.mongodb.net/LakAppDB?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    console.log("Database Connected");
}

module.exports = connectDB;