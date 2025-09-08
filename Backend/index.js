const express = require('express');
const {connectDB} = require('./config/database.js');
const cookieParser = require("cookie-parser")
const cors = require('cors');

const app = express();

app.use(cors({
    origin:"http://localhost:5173", // to get the cookies in the application option in the console
    credentials:true
}))

app.use(cookieParser());
app.use(express.json());

const authRouter = require('./routes/auth.js');
const profileRouter = require('./routes/profile.js');
const fillAlldataRoute = require('./routes/fill_the_datas.js');
const GetExpenseData = require('./routes/getExpenseData.js');
const UpdateDetails = require('./routes/updateDetails.js');

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",fillAlldataRoute);
app.use("/",GetExpenseData);
app.use("/",UpdateDetails);

connectDB().then(()=>{
    app.listen(3000,(req,res)=>{
        console.log("server is running");
    })  
}).catch((err)=>{
    console.log(err.message());
})
