const express = require('express');
const app = express();
const PORT = 3001;

let clients = [];

// Middleware to enable SSE

// SSE endpoint to handle connections
app.get('/sse', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders(); // Flush the headers to establish SSE connection

    const clientId = Date.now();
    const newClient = {
        id: clientId,
        res
    };
    res.write("new connnection establihed\n")
    clients.push(newClient);

    // Remove the client when connection is closed
    req.on('close', () => {
        console.log(`${clientId} Connection closed`);
        clients = clients.filter(client => client.id !== clientId);
    });
});

function sendNotice(data) {


    clients.forEach(client => client.res.write(`event: notice\nid: ${Date.now()}\ndata: ${JSON.stringify(data)}\n\n`));
}

function sendMessage(data) {
    clients.forEach(client => client.res.write(`id: ${Date.now()}\ndata: ${JSON.stringify(data)}\n\n`));
}

// Endpoint to trigger an event manually (for testing)
app.get('/send-notice', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    // res.flushHeaders(); // Flush the headers to establish SSE connection
    const data = { message: 'This is a notice event' };
    sendNotice(data);
    res.send('Notice event sent to all clients');
});

app.get('/send-message', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    // res.flushHeaders(); // Flush the headers to establish SSE connection
    const data = { message: 'This is a message event' };
    sendMessage(data);
    res.send('Message event sent to all clients');
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\index.html")
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
