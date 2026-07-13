const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const bodyParser=require('body-parser')
const app=express()
app.use(cors())
app.use(express.json())
//connecting with mongoDB
mongoose.connect('mongodb://localhost:27017/AuthenSystem')
.then(()=>{console.log("mongoDB connected")})
.catch((err)=>{console.log(err);})
//blueprint schema
const userSchema=new mongoose.Schema({
    
        userName:String,
        userEmail:{
            type:String,
            unique:true,
            },
            password:String,
        
    
})
//model represent
const user=mongoose.model('user',userSchema)
//API ROUTES YAHA ADD KRUNGA AB
app.get('/',(req,res)=>{
    res.send("API running")
})
//regisstrer wla yaha se hai
app.post('/register',async(req,res)=>{
    const{userName,userEmail,password}=req.body
    if(!userName||!userEmail||!password){
        return res.json({message:"all feilds must be filled"})
    }
    const existingUser=await user.findOne({userEmail})
    if(existingUser){
        return res.json({message:"user already exist"})
    }
    //hashing password....................
    const hashPassword=await bcrypt.hash(password,10)
    //saving user...........
    const newUser=new user({
        userName,
        userEmail,
        password:hashPassword,
    })
    await newUser.save();
    res.json({
        message:"user created successfully"
    })

})
//login krooooo.....................
app.post('/login',async(req,res)=>{
    const {userEmail,password}=req.body
    //find kru user
    const foundUser=await user.findOne({userEmail})
    if(!foundUser){
        return res.send({
            message:"user not found"
        })
    
        //agr email nhi mila toh user hai hi nhi userName se nhi kr skte coz woh same ho skte hai but email pe hum
        //unique true daala hai
    }
    //agr upper wli statement invalid hui toh user hai then password compare
    const valid=await bcrypt.compare(password,foundUser.password)
    if(valid){
        return res.send({
            message:"login successfull!!"
        })
    }else{
        return res.send({
            message:"password incorrect"
        })
    }
})
app.listen(5000,()=>{console.log("server started at 5000 http://localhost:5000")

})