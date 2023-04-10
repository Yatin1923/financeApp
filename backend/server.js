const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const userRouter = require('./routes/userRoutes');
const categoryRouter = require('./routes/categoryRoutes');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb+srv://bugTracker123:Monsoon2023@bugtracker.c1zj8px.mongodb.net/financeApp',(err)=>{
    if(err)
    console.log("Error",err);
    else
    console.log('Connected to database successfully');
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret:"secret",
  resave:false,
  saveUninitialized:false
}));
app.use(cors({
    origin: "http://localhost:4200",
    credentials:true
  }));

app.use("/user",userRouter);
app.use("/category",categoryRouter);
  
app.listen(3000,(req,res,err)=>{
    if(err)
    console.log(err)
    else
    console.log('server started...');
});
