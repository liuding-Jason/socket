
/*
* Socket
*/

var app 	= require("express")() ;
var http	= require("http").Server(app) ;
var io	 	= require("socket.io")(http) ;

app.get("/" , function(req , res){
	res.status(200);
	res.sendFile(__dirname + "/index.html");
});

io.on("connection" , function(socket){
	console.log("a client connected!");

	// disconnect
	socket.on("disconnect" , function(){
		console.log("the client disconnected!");
	}) ;

	// chat mess
	socket.on("chat mess" , function(mes){
		console.log("chatting mess "+ mes);
	})
})

http.listen(3000 , function(){
	console.log("server is running at port 3000");
}) ;



