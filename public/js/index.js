var socket = io();

socket.on('connect', function (){
    console.log('Connected to the server....');
    /*
    socket.emit('newMessage', {
        from: "Duffy",
        text: "Oh la"
    });*/
});

socket.on('disconnect', function() {
    console.log('Disconnected from the server');
});

socket.on('newMessage', function(msg) {
    console.log('Chat Message;' + msg.from);
    console.log('Chat Message;' + msg.text);
    console.log('Chat Message;' + msg.createAt);

});
