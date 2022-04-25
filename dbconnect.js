require('dotenv').config()
const MongoClient = require("mongodb").MongoClient; // MongoClient class 

const uri = "mongodb+srv://"+process.env.mongodbUser+":"+process.env.mongodbPassword+"@malik.jxkgh.mongodb.net/Sit_725_prac4_2022?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true});

client.connect((err, db) => {
    if (!err){
         console.log("MongoDB database Connected");
    } else {
        console.log("DB Error", err);
    }
});  

exports.mongoClient = client;