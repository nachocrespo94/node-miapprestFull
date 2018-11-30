require("./config/config")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let port = process.env.PORT ;



//MIDELWARE\\
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


 
    app.get('/', function (req, res) {
        res.json('get World');
    })
 
    app.post('/usuario', function (req, res) {
        
        let body = req.body;
        
        if(body.nombre==undefined){

            res.status(400).json({
                ok : false,
                mensaje : "El nombre es necesario"
            });

        }else {

        }
        
        res.json({
            body
        });
    })

    app.put('/usuario/:id', function (req, res) {
        
        let id = req.params.id;
        
        res.json({
            id:id
        });
    })

    app.patch('/usuario', function (req, res) {
        res.json('patch World');
    })



app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${ port }`);
})



