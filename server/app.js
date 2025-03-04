import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import { comment } from './MVC/controlador/usuario-controlador.js';

dotenv.config()

mongoose.connect(process.env.url)
.then(()=>{
    console.log("funciona la conexion a la base de datos")
})
.catch((error)=>{
    console.log("no funciona la conexion", error)
})

const app = express();
app.use(cors())
app.use(express.json())

app.post('/comments/add',comment)

app.listen(4000,()=> {
    console.log("Se escucha bien")
})