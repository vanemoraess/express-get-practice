const express = require("express")
const router = express.Router()
const app = express()

app.use(express.json())

const portNumber = 3333

function localTime(request, response) {

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
}

function displayDoor(){
    console.log("Server created and running on port", portNumber)
}

app.use(router.get("/localtime", localTime))
app.listen(portNumber, displayDoor)