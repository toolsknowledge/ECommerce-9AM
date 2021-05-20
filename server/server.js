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