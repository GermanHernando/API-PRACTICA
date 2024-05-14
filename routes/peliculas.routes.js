import express from 'express'
import controllers from '../controllers/peliculas.controllers.js'


const router = express.Router()


router.getPeliculas("/peliculas",controllers.getPeliculas)
router.getPeliculasById("/peliculas/:id",controllers.getPeliculasById)

export default{
    getPeliculas,
    getPeliculasById
}