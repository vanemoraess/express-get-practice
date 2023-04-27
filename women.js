const express = require("express") //starting Express
const router = express.Router() //setting up the first part of the route
const { v4: uuidv4 } = require('uuid');

const app = express() //starting the app
app.use(express.json())
const portNumber = 3333 //creating port

//Initial list of women
const women =[

]

//GET
function showWomen(request, response){
 response.json(
    [
        {
            id: "1",
            nome: "Simara Conceição",
            imagem: "https://bit.ly/LJIyOF",
            minibio: "Desenvolvedora e instrutora"
        },

        {
            id: "2",
            nome: "Iana Chan",
            imagem: "https://bit.ly/3JCXBqP",
            minibio: "CEO e fundadora da Programaria"

        },
        {
            id:"3",
            nome: "Luana Pimentel",
            imagem: "https://bit.ly/3FKpFaz",
            minibio: "Staff Senior Software Engineer"
        }
    ]
 )
}

//POST
function addWoman(request, response){
    const newWoman = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    women.push(newWoman)
    response.json(women)
}

//PORT
function displayDoor(){
    console.log("Server created and running on port", portNumber )
}

app.use(router.get("/women", showWomen))
app.use(router.post("/women", addWoman))
app.listen(portNumber, displayDoor) //server listening on port