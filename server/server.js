const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, () => console.log(`listening on port ${port}`));

// Hello world route
app.get("/", (req,res)=> res.send("COSC 331 Project 1"))

console.log("Connected as: admin")