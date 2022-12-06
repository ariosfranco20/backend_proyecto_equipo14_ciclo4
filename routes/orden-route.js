let mongoose = require('mongoose')
    express = require('express')
    router = express.Router()

let ordenSchema = require('../models/ordenPaquete')

//CRUD

//Create
//localhost:5000/ordenes/crear
router.route('/crear').post((req, res, next) =>{
    ordenSchema.create(req.body, (error, data) =>{//Le paso al metodo create el cuerpo de la peticion (la informacion que se requiere guardar). Pede suceder dos cosas error o guardado exitoso
        if (error){
            return next(error)
        }else{
            res.json(data)//Sino existe algun error responde al usuario en formato JSON
        }
    })
})

// Leer todas las ordenes
//http://localhost:5000/ordenes?userId=1234
router.route('/').get((req, res)=>{
    ordenSchema.find({ userId: req.query.userId }, (error, data) => {
        if (error){
            return next(error)
        }else{
            res.json(data)//Sino existe algun error le muestra la data al usuario en formato JSON
        }
    })
})

//Read By Id
//http://localhost:5000/ordenes/1
router.route('/:id').get((req, res)=>{
    ordenSchema.findById(req.params.id, (error, data)=>{
        if (error){
            return next(error)
        }else{
            res.json(data)//Sino existe algun error le muestra la data al usuario en formato JSON
        }
    })
})

//update
//http://localhost:5000/ordenes/actualizar/2
router.route('/actualizar/:id').put((req, res)=>{
    ordenSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body //Recibe toda la informacion que se va a actualizar en la B.D
    },    (error, data)=>{
            if (error){
                return next(error)
            }else{
            res.json(data)//Sino existe algun error le muestra la data al usuario en formato JSON
            }
    })
})

// Delete Books
//localhost:5000/books/delete/2
router.route('/eliminar/:id').delete((req, res, next) => {
    bookSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router