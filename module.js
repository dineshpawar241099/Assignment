const { string } = require('joi');
const mongoose = require('mongoose');
// const { stringify } = require('nodemon/lib/utils');
const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
  

    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model("dinesh",userschema);