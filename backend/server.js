import express from 'express'
import colors from "colors"
import dotenv from 'dotenv'
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middleware/errorMiddleware.js"
import connectDB from "./db/connect.js"

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

//error handler middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server run on Port:${PORT}`))