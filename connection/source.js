const express=require('express')
const cors=require('cors')
const app=express();
app.use(express.json())
app.use(cors())
app.post('/login',(req,res)=>{
    const{name,email}=req.body;
    if(!name || !email){
    return res.status(400).json({
        success:false,
        message:'enter name and email ',}
    )}
    
    const userName=name.trim().toLowerCase();

    const userEmail=email.trim().toLowerCase();

    if(userName.length<3){
        return res.status(400).json({
            success:false,
            message:'name should have more than 3 chars',
        })
    }
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(userEmail)){
        return res.status(400).json({
            success:false,
            message:'invalid email',
        })

    }
    const loginId=Math.floor(Math.random()*100000)
    res.status(200).json({
        success:true,
        message:`welcome ${userName} login successfull.......`,
        loginId:loginId,
        loginTime:new Date().toLocaleString()
    })
})
app.listen(4000,()=>{
    console.log('successfully loged in at server 4000 http://localhost:4000')
})
