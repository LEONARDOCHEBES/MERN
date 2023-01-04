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
const URI = "mongodb://127.0.0.1:27017/loginMern"

/*
    //estas opciones dan error

    const options ={
    useNewUrlParser : true,
    useCreateIndex: true,
    useUnifieldTopology : true

}*/

mongoose.connect(URI).then(
    ()=>{console.log("conected good")}).catch((err)=>{
    console.log(err)
    console.log("PEPEEEEEEEEaaaaaaa")
});

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
    repassword: String
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
    const {firstName,lastName,email,password,repassword} =req.body

    UserModel.findOne({email : email}, (err,user)=>{
            if(user){
                res.send({message : "Ya existe"})
            }else{
                const user = new UserModel ({
                    firstName,
                    lastName,
                    email,
                    password,
                    repassword
                })
                user.save();
                res.send({message : "Register"})
            }
    })

})

app.post("/login",(req,res)=>{
    console.log(req.body)
    const {email, password} = req.body

    UserModel.findOne ({email : email}, (err,user)=>{
        if(user){
            if(password == user.password){
                res.send({message : "logeado"})
            }else{
                res.send({message : "password no pego"})
            }
        }else{
            res.send({message : "this email not register"})
        }
    })

})




/*/////////////////////////////////////
LISTEN
////////////////////////////////////*/

app.listen(8080, ()=>{
    console.log("Server is runing at port 8080")

})





