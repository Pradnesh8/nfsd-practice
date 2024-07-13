const express = require('express');
const app = express();

app.use(express.json())

let data = ""
const waitingClients = [];
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}\\index.html`)
})

app.get("/getData", (req, res) => {
    const prevData = req.query.data;
    if (data !== prevData) {
        data = prevData;
        res.send({ data });
    } else {
        // user request will be queued, so that once new data gets updated
        // it will be sent to those who are in queue
        waitingClients.push(res);
    }
})

// for example purpose its created as get, ideally update will be always put/post request
app.get("/updatedData", (req, res) => {
    const newData = req.query.data
    while (waitingClients.length > 0) {
        const client = waitingClients.pop()
        client.json({ data: newData })
    }
    res.send({ message: "Updated data" });
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
})