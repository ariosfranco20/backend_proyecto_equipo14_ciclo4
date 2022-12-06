let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
require ('dotenv').config()
const ordenRoute = require('../backend/routes/orden-route')//importamos las rutas
const userRoute = require('../backend/routes/user.route')

mongoose.connect(process.env.MONGODB_URI_2)
    .then((x)=>{
        console.log(`conectado a mongo DB! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error conectando mongoDB', err.reason)
    })

const app = express()
app.use(bodyParser.json())//Todas las peticiones las convierte en formato JSON
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors())//Para evitar tener errores cuando se trae la informacion de otros servidores
app.use('/ordenes', ordenRoute)//Es la ruta padre ejemplo http://localhost:3000/ordenes que se unse con las demas rutas que se crearon en el modulo orden-route.js
app.use('/users', userRoute)

// PORT
const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log('Conectado al puerto ' + port)
})

// 404 Error
app.use((req, res, next) => {
    next(createError(404))
})

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})



