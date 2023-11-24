import mongoose from "mongoose";

const registerCollection = 'register';

const registerSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type:String,
    },
    age:{
          type:Number,
        
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required:true,
        unique: true
    },
    rol: {
        type: String,
        enum: ['admin','user'],
        default: 'user'
    }
})

export const registerModel = mongoose.model(registerCollection,registerSchema)
