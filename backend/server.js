import express from 'express'
import colors from "colors"
import dotenv from 'dotenv'
import userRoutes from "./routes/userRoutes.js"
import ticketRoutes from "./routes/ticketRoutes.js"
import errorHandler from "./middleware/errorMiddleware.js"
import connectDB from "./db/connect.js"
import path from 'path'

dotenv.config()

//connect to mongoDB
connectDB()

const PORT = process.env.PORT || 8000

const app = express()

//allow to send json form 
app.use(express.json())

app.get('/',(req,res) => {
    res.status(200).json({message: "Welcome to the Support Desk API"})
})

//middleware
app.use('/api/users', userRoutes)
app.use('/api/tickets', ticketRoutes)

//Serve Frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*',(req,res) => res.sendFile(__dirname, '../', 'frontend','build','index.html'))
}else {
    app.get('/',(req,res) => {
        res.status(200).json({message: "Welcome to the Support Desk API"})
    })
}

//error handler middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server run on Port:${PORT}`))