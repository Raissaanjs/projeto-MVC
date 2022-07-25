import  { Router, Request, Response} from 'express'

import { request } from 'http'

import * as homeController from '../controllers/homeController'

import * as infoController from '../controllers/infoController'

import * as userController from '../controllers/userController'



const router = Router()




router.get('/',homeController.home)



router.get('/contato', infoController.contato)




router.get('/sobre', infoController.sobre)



//criar uma rota chamada nome

router.get('/nome', userController.nome)



router.get('/formula', userController.idade )




router.get('/idade', userController.idade)



router.post('/idade-resultado', userController.resultado)




export default router
