
import { Router } from "express";

const router = Router()


router.get('/', (req,res)=>{
    res.render('home')
})

router.get('/login', (req,res)=>{
    res.render('login')
})

router.get('/register', (req,res)=>{
    res.render('register')
})

router.get('/profile', (req,res)=>{
    const userEmail = req.session.first_name;
    res.render('profile', {userEmail})
})


export {router as viewsRouter };