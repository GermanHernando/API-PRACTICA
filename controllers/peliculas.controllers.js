import service from "../services/peliculas.service.js";

const getPeliculas = async (req,res)=>{
    const peliculas = service.getPeliculas()
    res.send(peliculas);
}
const getPeliculasById = async (req,res)=>{
   try{
    const{id} = req.params
    const peliculasId = await service.getPeliculasById(id)
    res.send(peliculasId);
   }catch{
    console.log("Error");
    res.send({ statusCode: 400, message: "No existe Id Película." });
   }
   
}

export default{
    getPeliculas,
    getPeliculasById
}