const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt= require('bcryptjs');
const {passwordEncrptionNumber}= require('../keys.js');
const jwt = require('jsonwebtoken');
const { jWT_SECRET_KEY }= require('../keys');
const checkAuthentication = require ('../middleware/checkAuthentication');

// this is used for protected route only 
router.get('/protectedRoute', checkAuthentication, (req,res) => {
    res.send("you are logged in");
})

router.get('/', (req, res) => {
    res.send("hello");
})

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log('this is sign up page',name,email,password);
    if (name && email && password) {
        User.findOne({ 'email': email }).then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "USER already exist" });
            } else {
                bcrypt.hash(password,passwordEncrptionNumber).then((securedPassword)=>{
                const user = new User({
                    email: email,
                    name: name,
                    password: securedPassword
                })
                user.save().then((user) => {
                    return res.json({ message: "saved successfully" });
                }).catch((err) => {
                    console.log('there is some error in saving user------>', err);
                })
            });
            }
        }).catch((err) => {
            console.log('there is some error in saving user', err);
        })
    }
    else {
        return res.status(422).json({ error: "please fill all the field" });
    }
})

//if user is signed in, we should give him a token
router.post('/signin', (req,res)=>{
    console.log('this is request',req.body);
    const {email, password}= req.body;
    if(!email || !password){
        res.status(422).json({error:"please add email and password"});
    }
    User.findOne({email: email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"});
        }
        bcrypt.compare(password,savedUser.password).then((isMatched) => {
            if(isMatched){
                const token = jwt.sign({_id:savedUser._id},jWT_SECRET_KEY)
                return res.json({message:`successfully logged in, ${token}`});
            }
            return res.status(401).json({error:"Invalid email or password"});
        })
    })
})

module.exports = router;
