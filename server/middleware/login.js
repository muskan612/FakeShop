const jwt = require('jsonwebtoken')
const {hash, compareSync} = require('bcryptjs')
const User = require('../db/models/user')
require('dotenv').config();

const login = (req, res)=>{
    // console.log("login triggered")
    const {email, password} = req.body;
    const authHead = req.headers.authorization;
    console.log(authHead)
        User.findOne({email: `${email}`}).exec()
        .then((doc)=>{
            console.log(doc); 

            if(compareSync(password,doc.password)){
                if(authHead && authHead.startsWith("Bearer ")){
                    jwtToken = authHead.split(' ')[1];
                    
                    const extract = jwt.verify(jwtToken, process.env.JWT_SECRET)
                    console.log(extract)
                    if(extract.email === doc.email)
                    res.send({
                        responseText: `Token already present: Authorized`,
                        token: authHead
                    })
                }
                res.send({
                    responseText: "Login successfull! Token provided",
                    token: `${getAccessToken(req.body)}`,
                })
            }
            else
            res.status(401).send({responseText: "Unauthorised!"})
        })
        .catch((e)=>{
            console.log(e);
            res.status(401).send({responseText: `User id does not exist!`})
        })
    }
const getAccessToken = ({email})=>{
    const accessToken = jwt.sign({email},process.env.JWT_SECRET, {expiresIn: '15m'})
    return accessToken;
}

module.exports = login;