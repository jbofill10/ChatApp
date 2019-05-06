const path =  require("path");

const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, () => console.log(`listening on port ${port}`));

// Hello world route
app.get("/", (req,res)=> res.send("COSC 331 Project 1"))

// full path to this file as an array
let fullpath = path.dirname(__filename).split(path.sep);

// go to the project root
fullpath = fullpath.slice(0, fullpath.length - 2);

// path to client build dir
const clientpath = path.join(fullpath.join(path.sep), "client", "build");

// Serve the static files from the React app
app.use(express.static(clientpath));

app.post("/join", (req,res)=>{
    console.log(req.body);
})

console.log("Connected as: admin")