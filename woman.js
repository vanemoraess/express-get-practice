const express = require("express")
const router = express.Router()

const app = express()
const portNumber = 3333

function showWoman(request, response) {
 response.json({
        nome: 'Vanessa Moraes',
        imagem: '',
        minibio: 'Desenvolvedora, escritora e comunicadora'
    })
}

function displayDoor() {
    console.log("Server created and running on port", portNumber )
}

app.use(router.get("/women",showWoman))
app.listen(portNumber, displayDoor)