//allow not to repeat use try catch
import asynchandler from "express-async-handler"

export const registerUser = asynchandler( async (req,res) => {
    const {name, email, password} = req.body

    //validation
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please include all fields')
    }

    res.send("Register Route")
})

export const loginUser= asynchandler( async (req,res) => {
    res.send("Login Route")
})