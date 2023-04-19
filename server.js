const express = require("express")

const app = express()
const portNumber = 3333

function displayDoor(){
    console.log("Server created and running on port", portNumber )
}

app.listen(portNumber, displayDoor)