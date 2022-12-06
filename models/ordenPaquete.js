const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ordenSchema = new Schema({
    fecha: {
        type: Date,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    ancho: {
        type: Number,
        required: true,
    },
    alto: {
        type: Number,
        required: true,
    },
    largo: {
        type: Number,
        required: true,
    },
    peso: {
        type: Number,
        required: true,
    },
    dirRecogida: {
        type: String,
        required: true,
    },
    ciuRecogida: {
        type: String,
        required: true,
    },
    nomDestinatario: {
        type: String,
        required: true,
    },
    idDestinatario: {
        type: Number,
        required: true,
    },
    dirEntrega: {
        type: String,
        required: true,
    },
    ciuEntrega: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'     
    }
}, {
    collection: 'ordenesPaquetes'
})

module.exports = mongoose.model('ordenPaquete', ordenSchema)