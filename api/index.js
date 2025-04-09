const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const secret ="dfgdxfgftthftghf"

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

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
    try {
        const userDoc = await User.findOne({ username });

        // If user does not exist, return error
        if (!userDoc) {
            return res.status(401).json({ error: 'Wrong credentials' });
        }

    const passOk = bcrypt.compareSync(password, userDoc.password); // true
    
    if(passOk){
        jwt.sign({username,id:userDoc._id},secret,{}, (err,token)=>{

            if(err)throw err;
            res.cookie('token',{token}).json( { id: userDoc._id,username})
        })
    } else {
        return res.status(401).json({ error: 'Wrong credentials' });
    }
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
    }
})

app.get('/profile',(req,res)=>{
    const token = req.cookies?.token?.token;
    jwt.verify(token,secret,{},(err,info)=>{
        if(err) throw err;
        res.json(info);
    })
    
})

app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok')
})

app.listen(4000);
//febK4XM67qahM8qj


//mongodb+srv://blog:febK4XM67qahM8qj@cluster0.yuw3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0