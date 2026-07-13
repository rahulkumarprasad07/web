const express=require('express')
const cors=require('cors')
// summon kr liiye maine express and cors module
const app=express();
//express ka app bna dia taaki mai iske routes use kr sku
app.use(express.json())
//api bnane mai help krta hai abhi data store krega
app.use(cors())
// connect backend and frontend mtlb sirf inn  dono ke beech data transfer hoga
app.get('/',(req,res)=>{
    res.json({
        message:'backend running'
    })
})
//home page pe agr sb shi tha toh server json format mai bhejega backend running
app.post('/login',(req,res)=>{
    const{name,email}=req.body
    if(!name|| !email){
        return res.status(400).json({
            success:false,
            message:"name and email are required"
        })

    }
    //jb login call hoga toh json format mai data aayega ho req.body mai store hoga and wha se object format mai data store ho 
//jayega  const email and const name mai aurr agr dono mai se kuch bhi availavble nhi hoga toh e rror aayega
const userName=name.trim().toLowerCase();
const userEmail=email.trim().toLowerCase();
//name and email ko lowercase mai and spaces htake userName and userEmail mai store kr dia 
if(userName.length<3){
    return res.status(400).json({
        success:false,
        message:"name must have atleast 3 characters"
    })
    //name agr 3letters se km ka hua toh error 400 and message name must have atleast 3 char error 400 wil be shown at console
    
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailRegex.test(userEmail)){
    return res.status(400).json({
        success:false,
        message:"email not valid"
    })

}
//agr email valid na hua like correct format na ho toh eror aayega
const loginId=Math.floor(Math.random()*100000);
//ek login id generate krega Math.random fir 100000 se into krke 4 ya 5 digit kr denge then integer bna denge Math.floor se
res.status(200).json({
    success:true,
    message:`welcome ${userName}`,
    info:'LOGIN SUCCESSFULL',
    loginId:loginId,
    loginTime:new Date().toLocaleString()

})
})


//agr success hua toh ye sb print honge uss paragraph mai
app.listen(8000,()=>{
    console.log("Server started at 8000 http://localhost:8000")
})
// server start kia at localhost:8000