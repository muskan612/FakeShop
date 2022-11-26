const mongoose = require('mongoose')
const User = require('../db/models/user')
require('dotenv').config();

const register = async (req,res)=>{
    const {email} = req.body;
    console.log(req.body)
        var exists = await User.exists({email: `${email}`})
        if(!exists){
            let UserInstance = new User(req.body,()=>{
                console.log(`Instance created...`)
            })
            UserInstance.save()
            .then(()=>{
                res.status(201).send(`User registered successfully!`)
            })
            .catch(()=>{
                res.status(502).send(`Bad Gateway: database error`)
            })
        }
        else{
            res.send(`The user already exists. Login instead.`)
        }
    
}
module.exports = register;