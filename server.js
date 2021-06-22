let mongoose = require('mongoose');
const express=require('express')
const app=express()
const MONGO_URI='mongodb+srv://boutheina11:boutheina11@cluster0.smifj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true },err=>{
  if(err) throw err;
  console.log('DB connected...')
})
app.use(express.json())

app.use('/persons',require('./routes/PersonRoutes'))

app.listen(5000,()=>console.log('Server is on...'))