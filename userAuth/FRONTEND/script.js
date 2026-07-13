      
     //  register parttttttttt
      
      async function register(){
        const userName=document.getElementById("name").value;
        const userEmail=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        const response=await fetch('http://localhost:5000/register',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({userName,userEmail,password})
          
                
            

        })
          const result=await response.json();
          document.getElementById("responseMsg").textContent=result.message
        }


        
        //login parttttttt................
         async function login(){
            const userEmail=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        const response=await fetch('http://localhost:5000/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify({userEmail,password})
        })
        const result= await response.json();
        document.getElementById("responseMsg").textContent=result.message
        }
