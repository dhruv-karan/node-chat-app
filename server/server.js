const path = require('path');
const http = require('http');
const express = require('express');
const SochekIo = require('socket.io');

const publicPath = path.join(__dirname,'../public');
 const port = process.env.PORT || 3000;
var app = express();
var server= http.createServer(app);
var io = SochekIo(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
console.log("user connected");

socket.on('disconnect',()=>{
    console.log("user disconnected")
})
});

server.listen(port , ()=>{
console.log(`server is up at ${port}`);
}); 