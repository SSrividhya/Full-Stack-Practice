const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
  extended: true
}))
const request = require("request")
const port = 3001
const https = require("https")

app.use(express.static("public"))

app.listen(3001, function() {
  console.log("Server listening at 3001")
})


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html")
})


app.post("/", function(req, res) {
  const fname = req.body.fname
  const lname = req.body.lname
  const email = req.body.email

  //'{"email_address":"","email_type":"","status":"subscribed","merge_fields":{},"interests":{},"language":"","vip":false,"location":{"latitude":0,"longitude":0},"marketing_permissions":[],"ip_signup":"","timestamp_signup":"","ip_opt":"","timestamp_opt":"","tags":[]}'
  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: fname,
        LNAME: lname
      }
    }]
  }
  const JsonStringData = JSON.stringify(data)
  const url = "https://us1.api.mailchimp.com/3.0/lists/f3186c5fdf"
  const options = {
    method: 'POST',
    auth: "sri:954c8bda83dedac1bcd06e72eaa137fb-us1"
  }
  const rq = https.request(url, options, function(response) {
    if(response.statusCode===200)
    {
      res.sendFile(__dirname + "/success.html")
    }
    else
    {
      res.sendFile(__dirname + "/failure.html")
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data))
    })

  })


rq.write(JsonStringData)
rq.end()

})

app.post("/failure",function(req,res)
{
res.redirect("/")

})
//954c8bda83dedac1bcd06e72eaa137fb-us1
//f3186c5fdf
