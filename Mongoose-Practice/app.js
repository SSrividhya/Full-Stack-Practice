const mongoose=require("mongoose")
//connection to mongodb - testDb is the db that will b newly created if not present
mongoose.connect("mongodb://localhost:27017/testDb",{userNewUrlParser: true,useUnifiedTopology: true});
//defining schema for document
//model creates employee a class for instanciating a doc using the schema
//Employee will b converted to employees --> that will b the collection name
//const employee=mongoose.model("Employee",empSchema)
//emp1 is the doc created
// const emp1=new employee({
//   name:"Raju",
//   age:25,
//   exp:3
// })
//saves the doc into collection inside testDb
//emp1.save()

// //insert many docs
// fruit.insertMany([o,b],function(err)
// {
//   if(err)
//   {
//     console.log(err)
//   }
//   else{
//     console.log("Success insert many")
//   }
// })

//update
// fruit.updateOne({name:"kiwi"},{tastedOn:"today"},function(err)
// {
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("Update done")
//   }
// })

//deleteONe
// fruit.deleteOne({name:"Kiwi"},function(err)
// {
//   if(err)
//   {
//     console.log(err)
//   }
//   else{
//     console.log("deleted kiwi")
//   }
//
// })
//deleteMany
// fruit.deleteMany({like:"false"},function(err)
// {
//   if(err)
//     {
//       console.log(err)
//     }
//     else{
//       console.log("Deleted dislikes")
//     }
// })

//Find
// fruit.find(function(err,fr)
// {
//   //console.log(fr)
//   fr.forEach(function(f)
// {
//   console.log(f.name)
// })
// })
//close connection
//mongoose.connection.close()

//Relation between docs

const fruitSchema=new mongoose.Schema({
  name:
  {
    type:String,
    required:true
  },
  like:Boolean

})

const fruit=mongoose.model("fruit",fruitSchema)
const o=new fruit({
  name:"Orange",
  like:true
})
//o.save()
const empSchema=new mongoose.Schema(
  {
    name:String,
    age:Number,
    exp:Number,
    favFruit:fruitSchema
  }
)
const employee=mongoose.model("Employee",empSchema)
const e2=new employee({
  name:"golu",
  age:27,
  exp:5,
  favFruit:o
})

//e2.save()
const m=new fruit({
  name:"Mango",
  like:true
})
m.save()
employee.updateOne({name:"Raju"},{favFruit:m},function(err)
{
  if(err)
      {
        console.log(err)
      }
      else{
        console.log("Udpated fav fruit for Raju")
      }

})
