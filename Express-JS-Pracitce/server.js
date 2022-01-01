const express=require("express");
const app=express();
const port= 3000;

app.get("/",function(req,res)
{
  res.send("<center><h1>The main page</h1></center>");
});
app.get("/about",function(req,res)
{
  res.send("<center><h1>The About page</h1></center>");
});
app.get("/contact",function(req,res)
{
  res.send("<center><h1>My Contact page</h1></center>");
});
app.listen(port,function()
{
  console.log("My first Express Server");
});
