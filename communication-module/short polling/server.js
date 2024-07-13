const express = require('express');
const app = express();

app.use(express.json())

let data = "Initial Data"
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}\\index.html`)
})

app.get("/getData", (req, res) => {
    res.send({ data });
})

// for example purpose its created as get, ideally update will be always put/post request
app.get("/updateData", (req, res) => {
    data = "Updated data";
    res.send({ message: "Updated data" });
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
})