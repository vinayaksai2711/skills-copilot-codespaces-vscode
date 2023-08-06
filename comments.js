//create web server
var express = require('express');
var app = express();
var fs = require('fs');

//create server
var server = app.listen(5000, function(){
	console.log('Node server is running..');
});

//create socket on the server
var io = require('socket.io').listen(server);

//create connection event
io.sockets.on('connection', function(socket){
	console.log('socket connection is established..');

	//function to read comments from file
	function readComments(){
		fs.readFile('comments.json', 'utf8', function(err, data){
			if(err){
				console.log(err);
			}else{
				//convert data to json object
				var comments = JSON.parse(data);
				//emit comments to client
				socket.emit('comments', comments);
			}
		});
	}

	//function to write comments to file
	function writeComments(comments){
		fs.writeFile('comments.json', JSON.stringify(comments), function(err){
			if(err){
				console.log(err);
			}else{
				console.log('comments are saved to file..');
			}
		});
	}

	//read comments from file
	readComments();

	//listen for event
	socket.on('newComment', function(comment){
		//read comments from file
		fs.readFile('comments.json', 'utf8', function(err, data){
			if(err){
				console.log(err);
			}else{
				//convert data to json object
				var comments = JSON.parse(data);
				//add comment to comments array
				comments.push(comment);
				//write comments to file
				writeComments(comments);
				//emit comments to client
				io.sockets.emit('comments', comments);
			}
		});
	});
});