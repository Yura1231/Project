import express from "express";

import mongoose  from "mongoose";
import cors from 'cors';
import multer from "multer";
import { registerValidator , loginValidator , postCreateValidation } from './validation.js';


import chectAuth from "./utils/chectAuth.js";

import * as UserControler from './controlers/UserControler.js' 

import * as PostC from './controlers/PostC.js';

import handleErrors from './utils/handleErrors.js'






mongoose.connect('mongodb+srv://kvasnicaura24:g9paE8gYqRe8VBO9@cluster0.ngapd.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0'

).then(()=>{
    console.log('DB ok')
})
.catch((err)=> console.log('DB error', err))

const app = express()

const storage = multer.diskStorage({
    destination:(_,__,cb)=>{
        cb(null , 'uploads')
    },
    filename:(_,file,cb)=>{
        cb(null , file.originalname)

    }
})


const upload =multer({storage})

app.use(express.json())
app.use(cors());
app.use('/uploads',express.static('uploads'))

app.post("/auth/login",   loginValidator, handleErrors, UserControler.login);




app.post("/auth/register",   registerValidator, handleErrors , UserControler.register );

app.post('/upload' , chectAuth , upload.single('image'), (req , res)=>{
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})


app.get("/auth/me", chectAuth, UserControler.getMe , loginValidator);

app.get("/post" , PostC.getAll );

app.get("/post/:id", PostC.getOne );

app.post("/post", chectAuth , postCreateValidation,  handleErrors ,PostC.create );

app.delete("/post/:id", chectAuth, PostC.remove);


app.patch("/post/:id",chectAuth ,postCreateValidation,   PostC.update );








   



app.listen(4444 ,(err)=>{
    if(err){
        return console.log(err)
    }

    console.log('Sever ok')
})