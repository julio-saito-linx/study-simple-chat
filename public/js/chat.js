$(document).ready(function() {

	var messages = [];
	var socket = io.connect('http://' + configuration.serverIP + ':3700');
	var jField = $("#field");
	var jSendButton = $("#send");
	var jContent = $("#content");
	var jName = $("#name");

	var sendMessage = function() {
		if(jName.val() == "") {
			alert("Please type your name!");
		} else {
			var text = jField.val();
			socket.emit('send', { message: text, username: jName.val() });
			jField.val("");
		}
	};
 
	socket.on('message', function (data) {
		if(data.message) {
			messages.push(data);
			var html = '';
			for(var i=0; i<messages.length; i++) {
				html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
				html += messages[i].message + '<br />';
			}
			jContent.html(html);
			jContent[0].scrollTop = jContent[0].scrollHeight;
		} else {
			console.log("There is a problem:", data);
		}
	});
 
	jField.on('keyup', function(e) {
		if(e.keyCode == 13) {
			sendMessage();
		}
	});

	jSendButton.on('click', function() {
		sendMessage();
	});
 
});
