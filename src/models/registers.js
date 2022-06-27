const mongoose = require("mongoose");
const iSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true
    }

})

const Register = new mongoose.model("Register",iSchema);
module.exports = Register;