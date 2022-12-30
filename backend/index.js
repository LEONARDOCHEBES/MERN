const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false }))

const cors = require("cors")
app.use(cors())


/*====================================
database mongodb://localhost:27017
======================================*/
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginMern", {
    useNewUrlParser : true,
    useUnifieldTopology : true,

}).then(()=>{
    console.log("conected good")
}).catch((err)=>{
    console.log(err)
})


/*+++++++++++++++++++++
esquema
+++++++++++++++++++++*/

const userSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    email: {
        type : String,
        required : true,
        unique : true,
    },
    password: String,
    repassword: String,
})

const UserModel = new mongoose.model("UserModel", userSchema)

/*///////////////////////////////////////
GET Y POST
//////////////////////////////////////*/

/*
app.get("/", (req, res) => {
    res.send("app is run")
})
*/

app.post("/register", (req, res)=>{
    console.log(req.body)



})

/*/////////////////////////////////////
LISTEN
////////////////////////////////////*/

app.listen(8080, ()=>{
    console.log("Server is runing at port 8080")

})





