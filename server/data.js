const bcrypt = require("bcryptjs");

const data = {
    "users":[
        {
            name:"AshokIT",
            password:bcrypt.hashSync("admin",8),
            isAdmin:true,
            email:"hr@ashokit.in",
            image:"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/photo.jpg"
        },
        {
            name:"Samba",
            password:bcrypt.hashSync("admin",8),
            isAdmin:false,
            email:"hr@ashokit.in",
            image:"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/photo.jpg"
        }
    ]
};


module.exports = data;