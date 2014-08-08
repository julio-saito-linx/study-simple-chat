var express = require("express");
var app = express();
var port = 3700;
//require('./enableMogger')(express);

// jade tamplate
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);

// index/ root
app.get("/", function(req, res){
  res.render("page");
});

// static files
app.use(express.static(__dirname + '/public'));

// start and get socket.io
var io = require('socket.io').listen(app.listen(port));

console.log("Listening on port " + port);

io.sockets.on('connection', function (socket) {
  socket.emit('message', { message: 'welcome to the chat' });
  socket.on('send', function (data) {
    io.sockets.emit('message', data);
  });
});
