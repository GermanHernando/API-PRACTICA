

  const getPeliculas = async () =>{
   const data = await fetch('http://ww1.aniapi.com/')
   .then(res => res.json)
   return data
  }
  const getPeliculasById = async (id) =>{
    const data = await getPeliculas()
    const peliculaId = peliculas.find((element)=>element.id==id)
    return(peliculaId||"Pelicula Inexistente.")
  }


  export default{
    getPeliculas,
    getPeliculasById
  }