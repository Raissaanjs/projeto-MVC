import { Request, Response } from "express";
export const nome = ((req:Request, res:Response) =>{

let nome: string = req.query.nome as string

res.render('pages/nome', {
     nome
   })
})

export const idade = ((req:Request,res:Response) =>{
res.render('pages/idade')

})

export const resultado = ((req:Request, res:Response) =>{

let mostrarIdade: boolean = false
 let idade: number = 0

})

export const formula = ((req:Request, res:Response) =>{
  let nome: string = req.query.nome as string
  let idade: string = req.query.idade as string


  res.render('pages/formula', {
      nome, idade 
  })
})
 

