import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        unique : true
    },
    password : {
       type : String 
    },
    email : {
        type : String
    }
},{timestamps : true})