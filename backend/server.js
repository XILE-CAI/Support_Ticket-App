import express from 'express'
import dotenv from 'dotenv'
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const PORT = process.env.PORT || 8000

const app = express()

app.get('/',(req,res) => {
    res.status(200).json({message: "Welcome to the Support Desk API"})
})

//middleware
app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server run on Port:${PORT}`))