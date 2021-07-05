//import the node modules
//require() is the predefined function used to import the node modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const express_async_handler = require("express-async-handler");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const bodyparser = require("body-parser");
const Product = require("./model/productModel");
const User = require("./model/userModel");
const data = require("./data");
const generateToken = require("./generateToken");
//make the availability of .env file
dotenv.config();
const stripe = require("stripe")(process.env.SECRETE_KEY);
const uuid = require("uuid");



//to develop "rest api's" we should create "rest" object
//we must dependent on "express" to develop "rest" object
const app = express();
//where "app" is the rest object
//by using "app" object we will develop rest services like GET,POST,PUT,DELETE,.....


//enable cors policy
//providing the "communication" between different "ports" called as "cors" policy
app.use(cors());


//set the json as MIME Type
app.use(bodyparser.json());


//read the data from client application
app.use(bodyparser.urlencoded({extended:false}));








//connect to mongodb database by using mongoose module
mongoose.connect("mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/ecommerce-9am?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});




//handle the server side error
app.use((err,req,res,next)=>{
    res.status(500).send({"err":err.message})        
});



//create the GET Request
app.get("/api/products",express_async_handler(async (req,res)=>{
        const products = await Product.find();
        res.send(products);
}));



//create the GET Request
app.get("/api/products/:id",express_async_handler(async (req,res)=>{
    const product = await Product.findOne({"_id":new mongodb.ObjectID(req.params.id)});
    if(product){
        res.status(200).send(product);
    }else{
        res.status(400).send({"message":"no product available"});
    }
}));


app.get("/api/users/seed",express_async_handler(async (req,res)=>{
    await User.remove({});
    const createUsers = await User.insertMany(data.users);
    res.send({createUsers});
}));


//create the post request
app.post("/api/users/signin",express_async_handler(async (req,res)=>{
    const user = await User.findOne({"email":req.body.email});
    if(user){
        if(bcryptjs.compareSync(req.body.password,user.password)){
            res.status(200).send({
                _id:user._id,
                email:user.email,
                isAdmin:user.isAdmin,
                image:user.image,
                token:generateToken(user)
            })
        }else{
            res.status(401).send({message:"invalid password"});
        }
    }else{
        res.status(401).send({"message":"invalid user name / password"});
    }
}));


//create the post request
app.post("/payment",(req,res)=>{
    //receive data from reactjs
    //connect to banking server
});



//assign the port number
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started");
});