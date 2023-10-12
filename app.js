const express = require('express')
const app = express()
const task = require ('./routes/task')

const connectDB = require('./db/connect')

require('dotenv').config()
const port = process.env.PORT || 3000
//MiddleWare 
app.use(express.json())


app.use(express.static('./public'))
app.use('/api/v1/tasks',task)


 const start = async()=>{
try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
        console.log(`Server is litening on ${port}`)
    })
}catch(error){
    console.log(error)
}
}

start()