const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./route');
const env= require('dotenv');
env.config();
const postRoute= require('./post');



//middleware
app.use(express.json())
app.use('/user',router);

app.use('authoriseduser',postRoute);


mongoose.connect(process.env.DB_connection)
    .then(()=>{
        console.log("DB connected successfully...!");
    
    })
   .catch((err)=>{
       console.log(`there will be some problem ${err}`);
    
});

app.listen(7000,()=>{
    console.log("server is started")
});