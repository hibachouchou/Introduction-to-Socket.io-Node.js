const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
});

io.on("connection", (socket) => {
 console.log("user connected")

 socket.on("disconnect", () => {
    console.log("user disconnected")
   });
});



httpServer.listen(6001,function(){
    console.log('listening on *:6001');
});