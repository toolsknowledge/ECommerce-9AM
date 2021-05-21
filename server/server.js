//import the node modules
//require() is the predefined function used to import the node modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const jsonwebtoken = require("jsonwebtoken");
const express_async_handler = require("express-async-handler");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const bodyparser = require("body-parser");
const Products = require("./model/productModel");


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


//make the availability of .env file
dotenv.config();













