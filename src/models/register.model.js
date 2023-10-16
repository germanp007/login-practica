import mongoose from "mongoose";

const registerCollection = 'session';

const registerSchema = new mongoose.Schema({
    first_name:{
        type: String,
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
    }
})

export const registerModel = mongoose.model(registerCollection,registerSchema)