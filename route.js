const express = require('express').Router();
const route = require('express').Router();
const UserModule = require('./module');
const {registervalidation} = require('./validation');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// registration............................................................................

route.post('/register',async(req,res)=>{

    const{error}= registervalidation(req.body);
    if(error) return res.status(401).send(error);

   
    const newUser= new UserModule({
       name:req.body.name,
       
       
    })
    try{
      const SaveData= await newUser.save()
      res.send(SaveData);

    }catch(error){
      console.log(error);
    }
})


// ShowData.................................................................................

route.get('/showdata',async(req,res)=>{
    try{
        const ShowData = await UserModule.find();
        res.send(ShowData);

    }catch(error){
        console.log(`eroor while fatching data from DB. ${error}`);

    }

})

// data delete.........................................................................

route.delete('/delete',async(req,res)=>{
    let id=req.query.id;
    try{
        const deleteData= await UserModule.findByIdAndDelete(id);
        res.send(deleteData);

    }catch(error){
        console.log(error);

    }
})

// update data..................................................................
route.put('/update',async(req,res)=>{
    let _id = req.body._id
    try{
        const updateData= await UserModule.findByIdAndUpdate(_id,req.body);
        res.send(updateData);
        

    }catch(error){
        console.log(error);

    }
})




module.exports=route;