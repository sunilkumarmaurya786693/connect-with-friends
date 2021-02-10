const { jWT_SECRET_KEY } = require('../keys');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const User = mongoose.model("User");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // console.log('authorization', authorization);
    
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in" });
    }
    
    const token = authorization.replace("Bearer ", "");
    
    jwt.verify(token, jWT_SECRET_KEY, (err, payload) => {
        console.log('payload', payload);
        if (err) {
            return res.status(401).json({ error: "You must logged in" });
        }
        const { _id } = payload;
        User.findById(_id).then(LogInUser => {
            const {_id,email,name}= LogInUser; //we give user name,id,email by token
            req.user = {_id,email,name};
            next();// this can be outside but it first first before then (aysnc)
        })

    })
}