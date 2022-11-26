//allow not to repeat use try catch
import asyncHandler from "express-async-handler"
//hash password
import bcrypt from "bcryptjs"
//use model
import User from "../models/userModel.js"
import jwt from "jsonwebtoken"


export const registerUser = asyncHandler( async (req,res) => {
    const {name, email, password} = req.body

    //validation required info
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please include all fields')
    }

    //if user already exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //if everything is fine, then hash password and create User 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({name, email, password:hashedPassword})
    
    //if user created successfully
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


export const loginUser= asyncHandler( async (req,res) => {
    //check email and password
    const {email, password} = req.body
    const user = await User.findOne({email})

    //if use found and password is correct
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

//protect route
export const getMe= asyncHandler( async (req,res) => {
    const user = {
        id: req.user._id,
        email: req.user.email,
        name:req.user.name
    }
    
    res.status(200).json(user)
})

//Generate token function
const generateToken = (id) => {
    return jwt.sign(
        { id }, 
        process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_LIFETIME}
    )
}