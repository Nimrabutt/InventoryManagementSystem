const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
    user_name:{
        type :String,
        required : true,
        // unique: true,
    },
    password:{
        type: String,
        required: true,
    }
},{timestamps:true});

const Login = mongoose.model("Login" , LoginSchema);
module.exports = Login;