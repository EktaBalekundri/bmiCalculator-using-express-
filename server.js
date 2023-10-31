const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/bmicalculator", (req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", (req,res)=>{

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);


    var result = weight / (height * height);
    

    res.send("Your BMI is" + result);
});

app.listen(7000,() => {
    console.log("server is running on port 3000");
});