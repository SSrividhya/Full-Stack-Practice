const express=require("express")
const app=express()
const port=3000
const https=require("https")
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html")
}
)

app.post("/",function(req,res)
{
  const category=req.body.c
  const url="https://v2.jokeapi.dev/joke/"+category+"?type=single"
  https.get(url,function(rs)
  {
  rs.on("data",function(data)
{
const jokeJson=JSON.parse(data)
const jokeId=jokeJson.id
res.write("<h1>Category : "+jokeJson.category+"</h1>")
res.write("<p>"+jokeJson.joke+"</p>")
res.write("<img src='https://images.indianexpress.com/2019/09/baby-laugh.jpg' height=75 width=75>")
res.send()
})
})
})

app.listen(port,function()
{
  console.log("Server running at port 3000")
})
