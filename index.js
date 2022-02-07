const PORT = process.env.PORT || 3000;
const express = require('express');
// const apiRoute = require('./routes/api')
const path = require("path");
const app = express();
// const router = express.Router();
const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, "public")));
// app.use('/api', apiRoute)



let posts = [
    {
        id: 'IDTESTE',
        title: 'Exemplo de título',
        description: 'Exemplo de descrição'
    }
]

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts))
})

app.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    posts.push({ id: generateID(), title, description })
    res.send("Post Adicionado")
})
function generateID() {
    return Math.random().toString(36).substring(2, 9)
    //função gera ID aleatório na base 36, ou seja, 26 letras e 10 números. 
    //substring serve porque a função random gera um número aleatório de 0 a 1, 
    //então o valor inicial é onde começa a string e o final onde termina.

}

app.listen(PORT, () => {
    console.log('Servidor rodando na porta', PORT)
})
