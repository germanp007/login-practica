import { Router } from "express";
import express from 'express';


const router = Router();

router.get('/',(req,res)=>{
    try {
       if(req.session.user){
        res.send(`Bienvenido ${req.session.user}`)
       } else{
        res.send('Debes iniciar session')
       }
    } catch (error) {
        console.log(error)
    }
})


export {router as routerProfile };