const express = require('express');
const app = new express();

app.use(express.static('./loginpage/public'));

app.set('view engine','pug');
app.get('/',(req,res)=>{
    res.sendFile('C://Users//hp//OneDrive//Desktop//Repositories//Enterprises//loginpage//home.html') ;
})
app.get('/register',(req,res) =>{
    res.sendFile('C://Users//hp//OneDrive//Desktop//Repositories//Enterprises//loginpage//register.html')
})
   app.get('/login',(req,res)=>{
  res.sendFile('C://Users//hp//OneDrive//Desktop//Repositories//Enterprises//loginpage//login.html')
})
app.get('/dashboard',(req,res)=>{
    res.sendFile('C://Users//hp//OneDrive//Desktop//Repositories//Enterprises//loginpage//dashboard.html')
})
app.get('/ContactUs',(req,res)=>{
    res.sendFile("C://Users//hp//OneDrive//Desktop//Repositories//Enterprises//loginpage//contactus.html")
})
app.listen(3000);


