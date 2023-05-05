const express = require("express") //starting Express
const router = express.Router() //setting up the first part of the route
const { v4: uuidv4 } = require('uuid');


const connectToDatabase = require("./database")
connectToDatabase()

const Woman = require("./womanModel")
const app = express() //starting the app
app.use(express.json())
const portNumber = 3333 //creating port

//GET
async function showWomen(request, response){
    try{
        const getWomenFromDatabase = await Woman.find()
        response.json(getWomenFromDatabase)
    }catch (erro){
        console.log(erro)
    }
 response.json(women)
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

//PATCH
function fixWomenData(request, response){
    function searchWomanForCorrection(woman) {
        if (woman.id === request.params.id) {
            return woman;
        }
    }
    
    const womanData = women.find(searchWomanForCorrection);
   
    if (request.body.nome){
        womanData.nome = request.body.nome
    }
    if(request.body.minibio){
        womanData.minibio = request.body.minibio
    }
    if(request.body.imagem){
        womanData.imagem = request.body.imagem
    }
    response.json(woman);
}

//DELETE
function deleteWomenData(request, response){
    function removeWomanById(woman){
        if(woman.id !== request.params.id){
            return woman;

        }
    }
    const remainingWomen = women.filter(removeWomanById);
    response.json(remainingWomen)
}


//PORT
function displayDoor(){
    console.log("Server created and running on port", portNumber )
}



app.use(router.get("/women", showWomen))
app.use(router.post("/women", addWoman))
app.use(router.patch("/women/:id",fixWomenData )) 
app.use(router.delete("/women/:id", deleteWomenData))
app.listen(portNumber, displayDoor) //server listening on port