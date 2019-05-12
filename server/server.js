const path =  require("path");

const express = require("express");
const bodyParser = require("body-parser")

const socketio = require("socket.io")

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const server = app.listen(port, () => console.log(`listening on port ${port}`));

// Hello world route

// full path to this file as an array
let fullpath = path.dirname(__filename).split(path.sep);

// go to the project root
fullpath = fullpath.slice(0, fullpath.length - 2);

// path to client build dir
const clientpath = path.join(fullpath.join(path.sep), "client", "build");

// Serve the static files from the React app
app.use(express.static(clientpath));

const io = socketio(server)

var numUsers = 0;
var users = {};
const chat = {messages:[]}

io.on("connect", (socket)=>{
    socket.on("add user", (username) => {
        users[socket.id] = username;
        console.log(users[socket.id] + " has connected.");
        numUsers++;
    })

    socket.on("disconnect", () =>{
        numUsers--;
        console.log(users[socket.id] + " has disconnected.");
        delete users[socket.id];
    })

    socket.on("send message", data=>{
        const message = {
            name:users[socket.id],
            body:data
        }
        io.emit("send message",message);
    })

    socket.emit("get messages", {
        messages: chat.messages
    })
     
})
