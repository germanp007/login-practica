import { Router } from "express";
import express from 'express';


const router = Router();


router.get('/', async(req,res)=>{
    try {
        const name= req.query;
        req.session.user = name;
        
        res.send('login y session creada en archivos')
    } catch (error) {
        console.log(error)
    }
})

export {router as routerLogin };