const http = require('http').createServer()

const io = require("socket.io")(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('User connected');
    // 'message' is a custom event invoked to send/broadcast message  
    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id} said ${message}`)
    })
})

http.listen(8080, () => console.log("Server started on http://localhost:8080"))