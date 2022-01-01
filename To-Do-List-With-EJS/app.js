const express=require("express")
const app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
const date=require(__dirname+"/date.js")
const port=3000
let toDoList=[]
let workList=[]
app.set("view engine","ejs");

app.use(express.static("public"))


app.get("/",function(req,res)
{
let day=date.getDate()
res.render("list",{header:day,items:toDoList})
})

app.get("/work",function(req,res){
  res.render("list",{header:"Work",items:workList})
})

app.post("/",function(req,res)
{
  let item=req.body.toDo
  let itemType=req.body.sub
  console.log(req.body.sub)
  if(itemType==="Work")
  {
    workList.push(item)
    res.redirect("/work")
  }
  else{
    toDoList.push(item)
    res.redirect("/")
  }

})

app.get("/about",function(req,res)
{
  res.render("about")
})
app.listen(port,function()
{
  console.log("Server up and running at 3000")
})
