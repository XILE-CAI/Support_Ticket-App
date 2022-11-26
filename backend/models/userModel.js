import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,'Please provide name']
        },
        email:{
            type:String,
            required:[true,'Please provide email'],
            unique:true
        },
        password:{
            type:String,
            required:[true,'Please provide password']
        },
        isAdmin:{
            type:Boolean,
            default:false
        }
    },
    //second parameter
    {
        timestamps:true
    }
)


export default mongoose.model('User',userSchema)