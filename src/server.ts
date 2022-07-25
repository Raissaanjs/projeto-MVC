import express from "express";
import mainRoutes from './routes/index'
import mustache from 'mustache-express'
import path from 'path'
import dotenv from 'dotenv'

const server = express()

dotenv.config()

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))

server.engine('mustache',mustache())

//Habilitando o método post
server.use(express.urlencoded({extended:true}))

server.use(mainRoutes)

server.listen(process.env.PORT)