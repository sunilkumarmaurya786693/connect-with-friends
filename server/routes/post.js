const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuthentication = require ('../middleware/checkAuthentication');
const Post= mongoose.model("Post"); 

router.get('/allpost', (req,res)=> {
    Post.find()
    .populate("postedBy")   //this gives the information about user by its id, and we can control the number of field which are populate by populate("postedBy","_id name")
    .then(posts =>{
        res.json({posts})
    }).catch(err=>{
        console.log('there is some error in fetching all posts',err);
    })
})

router.get('/mypost', checkAuthentication,(req,res)=>{
    // req.user is set in checkAuthentication function 
    console.log('req', req.user);
    Post.find({postedBy:req.user._id})
    .then((myposts)=>{
        console.log('this is my post',myposts);
        return res.json({myposts});
    }).catch(err=>{
        console.log('there is some error in fetching your posts',err);
    })
})

router.post('/createpost',checkAuthentication,(req,res)=>{
    const {title,body}= req.body;
    if(!title || !body){
        return res.status(422).json({error:"Please add title and description"})
    }
    // console.log('this is request of create post',req.user); //req.user is send by checkAuthentication function
    // req.user.password = undefined; //use to remove password from req.user
    const post = new Post({
        title,
        body,
        postedBy: req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router;
