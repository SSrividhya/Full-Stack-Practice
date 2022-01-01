const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,function()
{
  console.log("Calculator started at 3000");
});

app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res)
{
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
res.send("The sum is "+(n1+n2));
});

app.get("/bmi",function(req,res)
{
  res.sendFile(__dirname+"/bmiCalculator.html");

});

app.post("/bmi",function(req,res)
{
  res.send("Your BMI is "+(Number(req.body.w)/Math.pow(Number(req.body.h),2)));
});
