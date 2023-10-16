import { Router } from "express";
import { registerModel } from "../models/register.model.js";
const router = Router();

router.post('/register', async(req,res)=>{
    try {
        const registerUser = req.body;


    } catch (error) {
        res.render("register", {error: "no se pudo registrar el usuario"})
    }
})

export {router as routerSessions};