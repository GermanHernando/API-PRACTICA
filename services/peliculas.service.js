import models from "../models/peliculas.model.js"

  const getPeliculas = () => {
   const peliculas = models.getPeliculas
  }

  const getPeliculasById = (id) => {
    const peliculas = models.getPeliculasById(id)
   }

  export default{
    getPeliculas,
    getPeliculasById
  }

  