const express = require("express")
const router = express.Router()

const app = express()
const portNumber = 3333

function showWoman(request, response){
 response.json(
    [
        {
            nome: "Simara Conceição",
            imagem: "https://bit.ly/LJIyOF",
            minibio: "Desenvolvedora e instrutora"
        },

        {
            nome: "Iana Chan",
            imagem: "https://bit.ly/3JCXBqP",
            minibio: "CEO e fundadora da Programaria"

        },
        {
            nome: "Luana Pimentel",
            imagem: "https://bit.ly/3FKpFaz",
            minibio: "Staff Senior Software Engineer"
        }
    ]
 )
}
function displayDoor(){
    console.log("Server created and running on port", portNumber )
}

app.use(router.get("/woman", showWoman))
app.listen(portNumber, displayDoor)