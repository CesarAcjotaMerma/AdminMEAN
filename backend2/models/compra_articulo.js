
const { Schema, model } = require('mongoose');

const CompraArticuloSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: "USER_ROLE"
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});


//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'CompraArticulo', CompraArticuloSchema );
