const mongoose = require('mongoose');

const dbName = "Finance_Management";

const connectDB = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://amdipumondal:aritramandal@finance.pzioobo.mongodb.net/Finance_Management?retryWrites=true&w=majority&appName=finance`);
        console.log("Connected to database");
    }catch(error){
        console.log(error.message);
    }
}

module.exports = {connectDB};