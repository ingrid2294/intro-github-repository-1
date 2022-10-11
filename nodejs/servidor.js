//console.log("hola mundo desde NodeJS")
const express =  require ('express');
const mongoose = require ('mongoose');
const TareaSchema = require ("./modelos/Tarea.js");


const app = express ();
const router  = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// conexiona a la base de datos
mongoose.connect("mongodb+srv://estrella:1144180094@clusterweb.2t3dxpu.mongodb.net/ActidadesDB?retryWrites=true&w=majority");



// operaciones CRUD con la base de datos

router.get('/',(req, res)=> {
    res.send (" El inicio de mi API")
})

router.post('/tarea',(req, res)=> {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });

    nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("la tarea ha sido almacenada correctamente.");
    });
});

app.use(router);
app.listen (3000, () => {
console.log ("servidor corriendo en el puerto 3000")
});



