import { Router } from "express";
import { registerModel } from "../models/register.model.js";
const router = Router();

router.post('/register', async(req,res)=>{
    try {
        const registerUser = req.body;
       
        const result = await registerModel.create(registerUser);
        res.render('login', {message: "usuario registrado con exito!"})

    } catch (error) {
        res.render("register", {error: "no se pudo registrar el usuario"})
    }
});
router.post('/login', async(req,res)=>{
    try {
        const loginUser = req.body;
        const user = await registerModel.findOne({email: loginUser.email})
        
       if(!user){
        return res.render("login", {error: 'Usuario no registrado'})
       }
       //verificar password
       if(user.password !== loginUser.password){
        return res.render("login", {error: 'Datos Invalidos'})
       }
       req.session.first_name = user.first_name;
       
       res.redirect('/profile')

    } catch (error) {
        res.render("login", {error: "no se pudo registrar el usuario"})
    }
})
router.get('/logout', async(req,res)=>{
    try {
       
       req.session.destroy(error=>{
        if(error) return res,render('profile', {error: 'No se pudo cerrar la session'})
       })

    } catch (error) {
       
    }
});
export {router as routerSessions};