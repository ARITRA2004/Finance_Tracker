const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3
    },
    lastName:{
        type:String,
        required:true,
        minLength:2
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        validator(valid){
            if(!validator.isEmail(valid)){
                throw new Error("Prov the correct email");
            }
        }
    },
    password:{
        type:String,
        required:true,
        validator(valid){
            if(!validator.isStrongPassword(valid)){
                alert('Make the password **strong**');
            }
        }
    }
})

const userModel = mongoose.model("User",userSchema);
module.exports = userModel;