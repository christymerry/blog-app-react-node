const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const secret ="dfgdxfgftthftghf"

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

mongoose.connect('mongodb+srv://blog:febK4XM67qahM8qj@cluster0.yuw3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register',async (req,res)=>{
    const{username,password} =req.body;
    try{ const userDoc = await User.create({
        username,
        password:bcrypt.hashSync(password,salt)
    });
    res.json(userDoc);
    }catch(e){
        console.log(e)
        res.status(400).json(e);

    }
    
});

app.post('/login',async (req,res)=>{
    const{username,password} =req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password); // true
    
    if(passOk){
        jwt.sign({username,id:userDoc._id},secret,{}, (err,token)=>{

            if(err)throw err;
            res.cookie('token',{token}).json('ok')
        })
    }
})

app.get('/profile',(req,res)=>{
    
})
app.listen(4000);
//febK4XM67qahM8qj


//mongodb+srv://blog:febK4XM67qahM8qj@cluster0.yuw3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0