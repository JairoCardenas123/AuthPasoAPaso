const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre :{
        type:String,
        required: [true, 'Name is required']
    },
    email :{
        type:String,
        required: [true, 'Email is required'],
        unique:true
    }, 
    password :{
        type:String,
        required:true
    },
    imagen :{
        type:String,
    },
    rol :{
        type:String,
        required: true,
        default: 'USER',
       /*  enum: ['ADMIN', 'USER'] */
    },
    estado :{
        type:Boolean,
        default: true
    },
    googleSignIn :{
        type:Boolean,
        default: true
    },
    categorias: {
        type: Schema.Types.ObjectId,
        ref: 'categorias',
        required: true
    }
});

module.exports = model('usuarios', UsuarioSchema);