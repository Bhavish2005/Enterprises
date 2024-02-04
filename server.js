const express = require('express');
const app = new express();

app.use(express.static('./loginpage/public'));

app.set('view engine','pug');
app.get('/',(req,res)=>{
    res.sendFile('C://Users//hp//OneDrive//Desktop//Enterprises//loginpage//home.html') ;
})
app.get('/register',(req,res) =>{
    res.sendFile('C://Users//hp//OneDrive//Desktop//Enterprises//loginpage//register.html')
})
   app.get('/login',(req,res)=>{
  res.sendFile('C://Users//hp//OneDrive//Desktop//Enterprises//loginpage//login.html')
})
app.listen(3000);


