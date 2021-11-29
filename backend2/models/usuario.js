const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    dni: {
        type: Number,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    telefono:{
        type:Number,
    },
    direccion:{
        type:String,
    },
    google: {
        type: Boolean,
        default: false
    },
});

UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Usuario', UsuarioSchema );
