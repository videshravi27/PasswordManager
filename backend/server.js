require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const detailRoutes = require('./routes/details')

//Express App
const app = express()

//Middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/details',detailRoutes)

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listen for req
        app.listen(process.env.PORT, () =>{
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
