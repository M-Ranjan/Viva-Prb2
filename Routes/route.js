const express = require('express')
const User = require('../Model/user.model')
const bcrypt = require('bcrypt')


const UserRouter = express.Router()
const GetRouter = express.Router()

UserRouter.post("/Add",async (req, res) =>{
    try{
        const {Id,name, username, password} = req.body
        if(!name || !username || !Id || !password){
            return res.status(400).json({Message: "Please enter all fields"})
        }
        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({Message: "User already exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        let newUser = await User.create({Id,name, username,  password: hashedPassword})
        return res.status(200).json({User: newUser})
    } catch(err){
        return res.status(500).json({success: false, message: err.message,});
    }
})


GetRouter.get('/get',async (req, res)=>{
    try{
        const User  =  await User.find()
        res.status(200).send(User)
        

    }catch(e){
        res.status(400).send("Error")
        
    }
})




