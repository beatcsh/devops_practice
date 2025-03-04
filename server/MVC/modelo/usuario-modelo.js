import { Schema, model } from "mongoose";

const EsquemaUsuario = new Schema({
    nombre:{      
    type:String
    },
correoElectronico:{
    type:String
    },
telefono:{
    type: Number
    }, 
edad:{
    type: Number
},
genero:{
    type: String
},
experiencia:{
    type: String
},
sugerencias:{
    type: String
}    
    
})

export const modeloUsuario = new model("Datos Usuario", EsquemaUsuario)