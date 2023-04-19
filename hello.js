const express = require("express")
const router = express.Router()

const app = express()
const portNumber = 3333

function showHello(request, response){
    response.send("Hello, World!")

}

function displayDoor(){
    console.log("Server created and running on port", portNumber)
}

app.use(router.get("/hello", showHello))
app.listen(portNumber, displayDoor)