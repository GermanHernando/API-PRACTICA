import express from "express"
//const express = require("express")
import peliculasRoutes from "./routes/peliculas.routes.js"

const PORT = 8080
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//app.get("/",(req,res)=>{res.send('El servicio está funcionando!');});
app.get("/api",peliculasRoutes)

app.listen(PORT,() => console.log(`Servidor está escuchando el puerto: ${PORT}`))
app.on("Error",(error)=>console.log(`Server error: ${error}`))
