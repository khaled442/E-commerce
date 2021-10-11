const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser= require('cookie-parser');
require('dotenv').config({path:'./config/.env'})



app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))
connectDB()
    

app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))




const PORT = process.env.PORT || 5000
const server = app.listen(PORT, (err)=> err? console.log(err): console.log(`server runing on port ${PORT}`))