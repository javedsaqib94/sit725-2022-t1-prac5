require('dotenv').config()
//console.log(process.env) // remove this after you've confirmed it working
var express = require("express");
var app = express();
var cors = require("cors");
let dbConnect = require("./dbconnect");
let projectRoutes = require("./routes/projectRoute");

app.use('/api/projects', projectRoutes);



app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 + num2;
    return result;
}
app.get("/addTwoNumbers",(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2);
    res.json({statusCode: 200, data: result, message:"Success"});
});

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port);
   
})

