const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http)

const PORT = process.env.PORT || 3001

app.use(express.static('views'))

app.get('/', (req, res) => {
    res.sendFile('./index.html');
})

io.on('connection', function(socket){
    
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

});

http.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})