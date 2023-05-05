const express = require("express") //starting Express
const router = express.Router() //setting up the first part of the route


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
async function addWoman(request, response){
    const newWoman = new Woman({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })
    try {
        const createdWoman = await newWoman.save()
        response.status(201).json(createdWoman)
    } catch (erro){
        console.log(erro)
    }
}

//PATCH
async function fixWomenData(request, response){
    try{
        const searchWomanForCorrection = await Woman.findById(request.params.id)
        if (request.body.nome){
            womanData.nome = request.body.nome
        }
        if(request.body.minibio){
            womanData.minibio = request.body.minibio
        }
        if(request.body.imagem){
            womanData.imagem = request.body.imagem
        }
        if (request.body.citacao){
            womanData.citacao = request.body.citacao
        }
        const updatedWomanInDatabase = await womanData.save()
        response.json(women);
    } catch(erro){
       console.log(erro)

    }
    

    response.json(woman);
}

//DELETE
async function deleteWomenData(request, response){
    try {
        await Woman.findByIdAndDelete(request.params.id)
        response.json({messagem: "Inform that the deletion of the woman was successful!"})

    }catch (erro){
        console.log(erro)
    }

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