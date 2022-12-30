const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false }))

const cors = require("cors")
app.use(cors())

/*
///////////////////////////////////////
GET Y POST
//////////////////////////////////////
*/
/*
app.get("/", (req, res) => {
    res.send("app is run")
})
*/

app.post("/register", (req, res)=>{
    console.log(req.body)



})

/*
/////////////////////////////////////
LISTEN
////////////////////////////////////
*/

app.listen(8080, ()=>{
    console.log("Server is runing at port 8080")

})





