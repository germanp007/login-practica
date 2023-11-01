import mongoose from "mongoose";

const registerCollection = 'register';

const registerSchema = new mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type:String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type:String,
        require:true,
        unique: true
    },
    rol: {
        type: String,
        enum: ['admin','user']
    }
})

export const registerModel = mongoose.model(registerCollection,registerSchema)
