const mongoose = require("mongoose")

async function connectToDatabase(){
    try{
        console.log("Starting database connection...")

        await mongoose.connect("mongodb+srv://vanemoraess:wtSfzA3QeaXV9V@cluster0.2k8k8nb.mongodb.net/?retryWrites=true&w=majority")
    
        console.log("The connection to the database has been established.")
    } catch (error){
        console.log(error)
    }
}

module.exports = connectToDatabase

